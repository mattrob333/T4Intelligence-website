"use client"
import { CustomButton } from "@/components/ui/custom-button"
import { CheckCircle, PlayCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useCallback, useState } from "react"
import ProcessExplainerModal from "@/components/ui/process-explainer-modal"

interface Dot {
  x: number
  y: number
  baseColor: string
  targetOpacity: number
  currentOpacity: number
  opacitySpeed: number
  baseRadius: number
  currentRadius: number
}

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const trustBadges = [
    "From Chaos to Automated in 12 Weeks",
    "Average Client Saves $2.4M Year One",
    "Your AI or Your Money Back"
  ]

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const dotsRef = useRef<Dot[]>([])
  const gridRef = useRef<Record<string, number[]>>({})
  const canvasSizeRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 })
  const mousePositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null })

  // Adjusted constants for dot size, noticeability, and interaction
  const DOT_SPACING = 30
  const BASE_OPACITY_MIN = 0.15 // Increased from 0.1
  const BASE_OPACITY_MAX = 0.45 // Increased from 0.3
  const BASE_RADIUS = 1.2 // Increased from 0.8
  const INTERACTION_RADIUS = 120
  const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS
  const OPACITY_BOOST = 0.65 // Increased from 0.5
  const RADIUS_BOOST = 1.7 // Increased from 1.5
  const GRID_CELL_SIZE = Math.max(50, Math.floor(INTERACTION_RADIUS / 1.5))
  const PRIMARY_GREEN_RGB = "0, 208, 132" // --primary-green: #00d084

  const handleMouseMove = useCallback((event: globalThis.MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) {
      mousePositionRef.current = { x: null, y: null }
      return
    }
    const rect = canvas.getBoundingClientRect()
    mousePositionRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top }
  }, [])

  const createDots = useCallback(() => {
    const { width, height } = canvasSizeRef.current
    if (width === 0 || height === 0) return

    const newDots: Dot[] = []
    const newGrid: Record<string, number[]> = {}
    const cols = Math.ceil(width / DOT_SPACING)
    const rows = Math.ceil(height / DOT_SPACING)

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * DOT_SPACING + DOT_SPACING / 2
        const y = j * DOT_SPACING + DOT_SPACING / 2
        const cellX = Math.floor(x / GRID_CELL_SIZE)
        const cellY = Math.floor(y / GRID_CELL_SIZE)
        const cellKey = `${cellX}_${cellY}`

        if (!newGrid[cellKey]) newGrid[cellKey] = []
        const dotIndex = newDots.length
        newGrid[cellKey].push(dotIndex)

        const baseOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN
        newDots.push({
          x,
          y,
          baseColor: `rgba(${PRIMARY_GREEN_RGB}, ${BASE_OPACITY_MAX})`,
          targetOpacity: baseOpacity,
          currentOpacity: baseOpacity,
          opacitySpeed: Math.random() * 0.003 + 0.001,
          baseRadius: BASE_RADIUS,
          currentRadius: BASE_RADIUS,
        })
      }
    }
    dotsRef.current = newDots
    gridRef.current = newGrid
  }, [DOT_SPACING, GRID_CELL_SIZE, BASE_OPACITY_MIN, BASE_OPACITY_MAX, BASE_RADIUS, PRIMARY_GREEN_RGB])

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement
    if (!container) return

    const dpr = window.devicePixelRatio || 1
    const width = container.clientWidth
    const height = container.clientHeight

    if (
      canvas.width !== width * dpr ||
      canvas.height !== height * dpr ||
      canvasSizeRef.current.width !== width ||
      canvasSizeRef.current.height !== height
    ) {
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      const ctx = canvas.getContext("2d")
      ctx?.scale(dpr, dpr)
      canvasSizeRef.current = { width, height }
      createDots()
    }
  }, [createDots])

  const animateDots = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    const dots = dotsRef.current
    const grid = gridRef.current
    const { width, height } = canvasSizeRef.current
    const { x: mouseX, y: mouseY } = mousePositionRef.current

    if (!ctx || !dots || !grid || width === 0 || height === 0) {
      animationFrameId.current = requestAnimationFrame(animateDots)
      return
    }

    ctx.clearRect(0, 0, width, height)

    const activeDotIndices = new Set<number>()
    if (mouseX !== null && mouseY !== null) {
      const mouseCellX = Math.floor(mouseX / GRID_CELL_SIZE)
      const mouseCellY = Math.floor(mouseY / GRID_CELL_SIZE)
      const searchRadius = Math.ceil(INTERACTION_RADIUS / GRID_CELL_SIZE)
      for (let i = -searchRadius; i <= searchRadius; i++) {
        for (let j = -searchRadius; j <= searchRadius; j++) {
          const cellKey = `${mouseCellX + i}_${mouseCellY + j}`
          if (grid[cellKey]) {
            grid[cellKey].forEach((dotIndex) => activeDotIndices.add(dotIndex))
          }
        }
      }
    }

    dots.forEach((dot, index) => {
      dot.currentOpacity += dot.opacitySpeed
      if (dot.currentOpacity >= dot.targetOpacity || dot.currentOpacity <= BASE_OPACITY_MIN) {
        dot.opacitySpeed = -dot.opacitySpeed
        dot.currentOpacity = Math.max(BASE_OPACITY_MIN, Math.min(dot.currentOpacity, dot.targetOpacity))
        dot.targetOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN
      }

      let interactionFactor = 0
      dot.currentRadius = dot.baseRadius

      if (mouseX !== null && mouseY !== null && activeDotIndices.has(index)) {
        const dx = dot.x - mouseX
        const dy = dot.y - mouseY
        const distSq = dx * dx + dy * dy

        if (distSq < INTERACTION_RADIUS_SQ) {
          const distance = Math.sqrt(distSq)
          interactionFactor = Math.max(0, 1 - distance / INTERACTION_RADIUS)
          interactionFactor = interactionFactor * interactionFactor
        }
      }

      const calculatedOpacity = dot.currentOpacity + interactionFactor * OPACITY_BOOST
      dot.currentRadius = dot.baseRadius + interactionFactor * RADIUS_BOOST

      // Y-position based opacity multiplier for placement adjustment
      const fadeInEndY = height * 0.55 // Dots fully visible below 55% of canvas height
      const fadeInStartY = height * 0.3 // Dots start appearing below 30% of canvas height
      let yPosOpacityMultiplier = 1.0

      if (dot.y < fadeInEndY) {
        if (dot.y < fadeInStartY) {
          yPosOpacityMultiplier = 0.05 // Very faint at the top (was 0.1)
        } else {
          yPosOpacityMultiplier = 0.05 + ((dot.y - fadeInStartY) / (fadeInEndY - fadeInStartY)) * 0.95 // Adjusted to start from 0.05
        }
      }
      yPosOpacityMultiplier = Math.max(0, Math.min(1, yPosOpacityMultiplier)) // Clamp

      const finalOpacity = Math.min(1, calculatedOpacity * yPosOpacityMultiplier)

      ctx.beginPath()
      ctx.fillStyle = `rgba(${PRIMARY_GREEN_RGB}, ${finalOpacity.toFixed(3)})`
      ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2)
      ctx.fill()
    })

    animationFrameId.current = requestAnimationFrame(animateDots)
  }, [
    GRID_CELL_SIZE,
    INTERACTION_RADIUS,
    INTERACTION_RADIUS_SQ,
    OPACITY_BOOST,
    RADIUS_BOOST,
    BASE_OPACITY_MIN,
    BASE_OPACITY_MAX,
    PRIMARY_GREEN_RGB, // Removed BASE_RADIUS from here as it's used in createDots
  ])

  useEffect(() => {
    handleResize()
    const canvasElement = canvasRef.current

    const handleMouseLeaveCanvas = () => {
      mousePositionRef.current = { x: null, y: null }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("resize", handleResize)
    canvasElement?.addEventListener("mouseleave", handleMouseLeaveCanvas)

    animationFrameId.current = requestAnimationFrame(animateDots)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      canvasElement?.removeEventListener("mouseleave", handleMouseLeaveCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [handleResize, handleMouseMove, animateDots]) // createDots is stable, no need to list if not changing

  return (
    <section className="relative min-h-screen flex items-center justify-center py-section-padding-mobile md:py-section-padding overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-hero-headline-mobile md:text-hero-headline text-text-primary mb-6">
            We Turn Your Messy Business Into An <span className="text-primary-green">AI-Powered Profit Machine</span> in 90 Days
          </h1>
          <p className="text-body-large-mobile md:text-body-large text-text-secondary max-w-3xl mx-auto mb-10">
            While McKinsey charges $3M for PowerPoints, we build AI that actually runs your business. Working AI in 90 days. 5X ROI in 6 months. Or you don't pay.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <CustomButton variant="primary" size="default" onClick={() => setIsModalOpen(true)}>
            <PlayCircle className="mr-2 h-5 w-5" /> See How We Do It
          </CustomButton>
          <CustomButton variant="secondary" size="secondary" onClick={() => (window.location.href = "/book-call")}>
            Get Your AI Roadmap
          </CustomButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="space-y-3 md:space-y-0 md:flex md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-3"
        >
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center justify-center text-text-secondary text-sm">
              <CheckCircle className="h-4 w-4 mr-2 text-primary-green" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
      <ProcessExplainerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
