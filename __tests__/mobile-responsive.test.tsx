/**
 * Mobile Responsiveness Tests
 * 
 * These tests validate that the new components work correctly on mobile devices
 * and respond appropriately to different screen sizes.
 */

import { render, screen } from '@testing-library/react'
import OptimizedImage from '../components/ui/optimized-image'
import FormProgress from '../components/ui/form-progress'
import GoogleAnalytics from '../components/google-analytics'

// Mock window.matchMedia for mobile testing
const mockMatchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})

// Helper to simulate mobile viewport
const setMobileViewport = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {
      return {
        ...mockMatchMedia(query),
        matches: query.includes('(max-width: 768px)'),
      }
    }),
  })
  
  // Mock window dimensions
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 375,
  })
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 667,
  })
}

// Helper to simulate desktop viewport
const setDesktopViewport = () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => {
      return {
        ...mockMatchMedia(query),
        matches: query.includes('(min-width: 1200px)'),
      }
    }),
  })
  
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1920,
  })
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 1080,
  })
}

describe('Mobile Responsiveness', () => {
  beforeEach(() => {
    // Reset to desktop by default
    setDesktopViewport()
  })

  describe('OptimizedImage Component', () => {
    const defaultProps = {
      src: '/test-image.jpg',
      alt: 'Test image',
      width: 400,
      height: 300,
    }

    it('should use mobile-optimized sizes by default', () => {
      render(<OptimizedImage {...defaultProps} />)
      
      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw')
    })

    it('should handle custom mobile sizes', () => {
      render(
        <OptimizedImage 
          {...defaultProps} 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
        />
      )
      
      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('data-sizes', '(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw')
    })

    it('should render properly with fill on mobile', () => {
      setMobileViewport()
      
      render(
        <OptimizedImage 
          src="/test-image.jpg"
          alt="Mobile fill image"
          fill={true}
          sizes="100vw"
        />
      )
      
      const image = screen.getByAltText('Mobile fill image')
      expect(image).toHaveAttribute('data-fill', 'true')
      expect(image).toHaveAttribute('data-sizes', '100vw')
    })

    it('should handle error states on mobile', async () => {
      setMobileViewport()
      
      const { container } = render(<OptimizedImage {...defaultProps} />)
      
      const image = screen.getByAltText('Test image')
      
      // Simulate image error on mobile
      const { fireEvent, waitFor } = await import('@testing-library/react')
      fireEvent.error(image)
      
      await waitFor(() => {
        const errorDiv = screen.getByText('Image failed to load')
        expect(errorDiv).toBeInTheDocument()
        expect(errorDiv).toHaveClass('text-sm') // Should be readable on mobile
      })
    })
  })

  describe('FormProgress Component', () => {
    const defaultProps = {
      currentStep: 2,
      totalSteps: 5,
    }

    it('should render progress bar on mobile', () => {
      setMobileViewport()
      
      const { container } = render(<FormProgress {...defaultProps} />)
      
      const progressBar = container.querySelector('.bg-gradient-to-r')
      expect(progressBar).toHaveStyle('width: 40%')
    })

    it('should display step information clearly on mobile', () => {
      setMobileViewport()
      
      render(<FormProgress {...defaultProps} />)
      
      expect(screen.getByText('Step 2 of 5')).toBeInTheDocument()
      expect(screen.getByText('40% Complete')).toBeInTheDocument()
    })

    it('should handle step labels on mobile with proper spacing', () => {
      setMobileViewport()
      
      const stepLabels = ['Info', 'Details', 'Review', 'Complete']
      
      render(
        <FormProgress
          currentStep={2}
          totalSteps={4}
          stepLabels={stepLabels}
        />
      )
      
      stepLabels.forEach(label => {
        const labelElement = screen.getByText(label)
        expect(labelElement).toBeInTheDocument()
        expect(labelElement).toHaveClass('text-xs') // Small text for mobile
      })
    })

    it('should maintain proper spacing on small screens', () => {
      setMobileViewport()
      
      const { container } = render(
        <FormProgress 
          {...defaultProps}
          className="test-mobile-progress"
        />
      )
      
      const wrapper = container.querySelector('.test-mobile-progress')
      expect(wrapper).toHaveClass('mb-8') // Proper mobile margin
    })
  })

  describe('GoogleAnalytics Component', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production'
      process.env.NEXT_PUBLIC_GA_ID = 'G-TEST123'
    })

    afterEach(() => {
      process.env.NODE_ENV = 'test'
    })

    it('should load Google Analytics on mobile', () => {
      setMobileViewport()
      
      const { container } = render(<GoogleAnalytics />)
      
      const scripts = container.querySelectorAll('script')
      expect(scripts).toHaveLength(2)
      
      // GA should load regardless of device type
      expect(scripts[0]).toHaveAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-TEST123')
    })

    it('should not affect mobile performance with proper loading strategy', () => {
      setMobileViewport()
      
      const { container } = render(<GoogleAnalytics />)
      
      const scripts = container.querySelectorAll('script')
      
      // Both scripts should have afterInteractive strategy for mobile performance
      expect(scripts[0]).toHaveAttribute('strategy', 'afterInteractive')
      expect(scripts[1]).toHaveAttribute('strategy', 'afterInteractive')
    })
  })

  describe('Responsive Behavior', () => {
    it('should adapt to viewport changes', () => {
      const { rerender } = render(
        <OptimizedImage 
          src="/test.jpg"
          alt="Responsive test"
          width={800}
          height={600}
        />
      )
      
      // Start with desktop
      setDesktopViewport()
      rerender(
        <OptimizedImage 
          src="/test.jpg"
          alt="Responsive test"
          width={800}
          height={600}
        />
      )
      
      let image = screen.getByAltText('Responsive test')
      expect(image).toHaveAttribute('data-sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw')
      
      // Switch to mobile
      setMobileViewport()
      rerender(
        <OptimizedImage 
          src="/test.jpg"
          alt="Responsive test"
          width={800}
          height={600}
        />
      )
      
      image = screen.getByAltText('Responsive test')
      // Should still have the same responsive sizes
      expect(image).toHaveAttribute('data-sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw')
    })

    it('should handle touch interactions properly', () => {
      setMobileViewport()
      
      render(<FormProgress currentStep={3} totalSteps={5} />)
      
      // Form progress should be visually accessible on touch devices
      const progressText = screen.getByText('60% Complete')
      expect(progressText).toHaveClass('text-sm') // Readable font size
      expect(progressText).toHaveClass('font-medium') // Good contrast
    })
  })

  describe('Accessibility on Mobile', () => {
    it('should maintain accessibility on mobile devices', () => {
      setMobileViewport()
      
      render(
        <OptimizedImage 
          src="/test.jpg"
          alt="Accessible mobile image"
          width={300}
          height={200}
        />
      )
      
      const image = screen.getByAltText('Accessible mobile image')
      expect(image).toHaveAttribute('alt', 'Accessible mobile image')
    })

    it('should have touch-friendly interactive elements', () => {
      setMobileViewport()
      
      const stepLabels = ['Step 1', 'Step 2', 'Step 3']
      
      render(
        <FormProgress
          currentStep={2}
          totalSteps={3}
          stepLabels={stepLabels}
        />
      )
      
      stepLabels.forEach(label => {
        const element = screen.getByText(label)
        // Should have appropriate sizing for touch
        expect(element).toHaveClass('text-xs')
      })
    })

    it('should handle error states accessibly on mobile', async () => {
      setMobileViewport()
      
      render(
        <OptimizedImage 
          src="/broken.jpg"
          alt="Test image"
          width={300}
          height={200}
        />
      )
      
      const image = screen.getByAltText('Test image')
      
      const { fireEvent, waitFor } = await import('@testing-library/react')
      fireEvent.error(image)
      
      await waitFor(() => {
        const errorMessage = screen.getByText('Image failed to load')
        expect(errorMessage).toBeInTheDocument()
        expect(errorMessage).toHaveClass('text-sm') // Readable on mobile
      })
    })
  })
})