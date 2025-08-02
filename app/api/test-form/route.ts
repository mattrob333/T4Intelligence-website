import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableId = process.env.AIRTABLE_TABLE_ID
    const apiKey = process.env.AIRTABLE_API_KEY
    
    // Test with minimal data first
    const minimalRecord = {
      fields: {
        'Full Name': 'Test User',
        'Email': 'test@example.com',
        'Company Name': 'Test Company',
        'Role': 'CEO/President'
      }
    }

    console.log('Testing minimal record creation:', minimalRecord)

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableId}`
    
    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [minimalRecord]
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Minimal record creation failed:', {
        status: response.status,
        statusText: response.statusText,
        errorData: errorData
      })
      
      return NextResponse.json(
        { 
          error: 'Failed to create minimal record',
          status: response.status,
          details: errorData
        },
        { status: response.status }
      )
    }

    const result = await response.json()
    console.log('Minimal record created successfully:', result.records[0].id)

    return NextResponse.json({
      success: true,
      message: 'Minimal record created successfully!',
      recordId: result.records[0].id
    })

  } catch (error) {
    console.error('Test form endpoint error:', error)
    return NextResponse.json(
      { error: 'Test failed', details: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableId = process.env.AIRTABLE_TABLE_ID
    const apiKey = process.env.AIRTABLE_API_KEY
    
    // Test with minimal data first
    const minimalRecord = {
      fields: {
        'Full Name': 'Test User',
        'Email': 'test@example.com',
        'Company Name': 'Test Company',
        'Role': 'CEO/President'
      }
    }

    console.log('Testing minimal record creation:', minimalRecord)

    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableId}`
    
    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [minimalRecord]
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Minimal record creation failed:', {
        status: response.status,
        statusText: response.statusText,
        errorData: errorData
      })
      
      return NextResponse.json(
        { 
          error: 'Failed to create minimal record',
          status: response.status,
          details: errorData
        },
        { status: response.status }
      )
    }

    const result = await response.json()
    console.log('Minimal record created successfully:', result.records[0].id)

    return NextResponse.json({
      success: true,
      message: 'Minimal record created successfully!',
      recordId: result.records[0].id
    })

  } catch (error) {
    console.error('Test form endpoint error:', error)
    return NextResponse.json(
      { error: 'Test failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
