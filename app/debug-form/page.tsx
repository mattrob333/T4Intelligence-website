'use client'

import { useState } from 'react'

export default function DebugForm() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function testMinimal() {
    setLoading(true)
    setStatus('Testing with minimal data (what worked before)...')
    
    try {
      const minimalData = {
        fullName: 'Test User',
        email: 'test@example.com',
        companyName: 'Test Company',
        role: 'CEO'
      }
      
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(minimalData),
      })
      
      const result = await response.json()
      setStatus(`Response: ${response.status}\n${JSON.stringify(result, null, 2)}`)
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`)
    } finally {
      setLoading(false)
    }
  }

  async function testFull() {
    setLoading(true)
    setStatus('Testing with full form data...')
    
    try {
      const fullData = {
        fullName: 'Test User',
        email: 'test@example.com',
        companyName: 'Test Company',
        role: 'CEO',
        phone: '555-1234',
        // Remove annualRevenue - not in Airtable schema
        numEmployees: '11-50',
        industry: 'Technology',
        aiStatus: 'Exploring AI',
        biggestChallenge: 'Process optimization',
        interestTriggers: ['Improve Efficiency'],
        implementationTimeline: '3-6 months',
        budgetRange: '$50k-$100k',
        decisionProcess: 'I am the decision maker',
        specificInterests: ['Business Process Automation'],
        meetingFormat: '30-minute call',
        biggestOpportunity: 'Customer service automation',
        questions: 'How quickly can we implement?',
        preferredTimes: ['Morning (9am-12pm)'],
        timeZone: 'EST (Eastern Standard Time)'
      }
      
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullData),
      })
      
      const result = await response.json()
      setStatus(`Response: ${response.status}\n${JSON.stringify(result, null, 2)}`)
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`)
    } finally {
      setLoading(false)
    }
  }

  async function checkStatus() {
    setLoading(true)
    setStatus('Checking Airtable configuration...')
    
    try {
      const response = await fetch('/api/airtable-status')
      const result = await response.json()
      setStatus(`Configuration:\n${JSON.stringify(result, null, 2)}`)
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-8">Debug Form Submission</h1>
      
      <div className="space-x-4 mb-8">
        <button
          onClick={checkStatus}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded disabled:opacity-50"
        >
          Check Config
        </button>
        
        <button
          onClick={testMinimal}
          disabled={loading}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded disabled:opacity-50"
        >
          Test Minimal Data
        </button>
        
        <button
          onClick={testFull}
          disabled={loading}
          className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded disabled:opacity-50"
        >
          Test Full Data
        </button>
      </div>
      
      <pre className="p-4 bg-gray-900 rounded overflow-auto whitespace-pre-wrap">
        {status || 'Click a button to test'}
      </pre>
      
      <div className="mt-8 text-sm text-gray-400">
        <p>• Check Config: Verifies your Airtable credentials are loaded</p>
        <p>• Test Minimal: Sends only basic fields (what worked before)</p>
        <p>• Test Full: Sends all form fields</p>
        <p className="mt-4">Open browser console (F12) to see detailed logs</p>
      </div>
    </div>
  )
}
