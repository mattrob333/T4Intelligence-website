import { NextResponse } from 'next/server'

// Store logs in memory (for debugging only)
let logs: string[] = []

// Override console.log to capture logs
const originalLog = console.log
const originalError = console.error

console.log = (...args) => {
  const message = args.map(arg => 
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' ')
  logs.push(`[LOG] ${new Date().toISOString()}: ${message}`)
  // Keep only last 100 logs
  if (logs.length > 100) logs.shift()
  originalLog(...args)
}

console.error = (...args) => {
  const message = args.map(arg => 
    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
  ).join(' ')
  logs.push(`[ERROR] ${new Date().toISOString()}: ${message}`)
  // Keep only last 100 logs
  if (logs.length > 100) logs.shift()
  originalError(...args)
}

export async function GET() {
  return NextResponse.json({
    logs: logs.slice(-50) // Return last 50 logs
  })
}

export async function DELETE() {
  logs = []
  return NextResponse.json({ message: 'Logs cleared' })
}
