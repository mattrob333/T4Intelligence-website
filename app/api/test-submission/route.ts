import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    // Create test data matching what the form would send
    const testData = {
      fullName: 'Test User',
      email: 'test@example.com',
      companyName: 'Test Company',
      role: 'CEO/President',
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

    // Call our own API endpoint
    const response = await fetch('http://localhost:3003/api/book-call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })

    const result = await response.json()

    if (!response.ok) {
      return NextResponse.json({
        error: 'Submission failed',
        details: result,
        status: response.status
      }, { status: response.status })
    }

    return NextResponse.json({
      success: true,
      message: 'Test submission successful!',
      result: result
    })

  } catch (error) {
    console.error('Test submission error:', error)
    return NextResponse.json(
      { error: 'Test failed', details: (error as Error).message },
      { status: 500 }
    )
  }
}
