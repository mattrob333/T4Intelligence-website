'use client'

import { useState } from 'react'

export default function TestForm() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function testSubmission() {
    setLoading(true)
    setStatus('Testing submission...')
    
    try {
      // First check environment variables
      const envResponse = await fetch('/api/check-env')
      const envData = await envResponse.json()
      setStatus(prev => prev + '\n\nEnvironment check: ' + JSON.stringify(envData, null, 2))
      
      // Then test the actual submission
      const testData = {
        fullName: 'Test User',
        email: 'test@example.com',
        companyName: 'Test Company',
        role: 'CEO',
        phone: '555-1234',
        annualRevenue: '$1M-$10M',
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
        body: JSON.stringify(testData),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setStatus(prev => prev + '\n\nSuccess! ' + JSON.stringify(result, null, 2))
      } else {
        setStatus(prev => prev + '\n\nError: ' + JSON.stringify(result, null, 2))
      }
    } catch (error) {
      setStatus(prev => prev + '\n\nError: ' + (error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-8">Test Airtable Submission</h1>
      
      <button
        onClick={testSubmission}
        disabled={loading}
        className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Submission'}
      </button>
      
      <pre className="mt-8 p-4 bg-gray-900 rounded overflow-auto">
        {status || 'Click the button to test the form submission'}
      </pre>
    </div>
  )
}
