import { NextRequest, NextResponse } from 'next/server'

interface AirtableRecord {
  fields: {
    [key: string]: string | string[]
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Validate required environment variables
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableId = process.env.AIRTABLE_TABLE_ID
    const apiKey = process.env.AIRTABLE_API_KEY
    
    console.log('Environment check:', {
      hasBaseId: !!baseId,
      hasTableId: !!tableId,
      hasApiKey: !!apiKey,
      baseId: baseId ? `${baseId.substring(0, 6)}...` : 'missing',
      tableId: tableId ? `${tableId.substring(0, 6)}...` : 'missing'
    })
    
    if (!baseId || !tableId || !apiKey) {
      console.error('Missing Airtable environment variables')
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          message: 'Airtable integration is not properly configured. Please check that AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID, and AIRTABLE_API_KEY are set in your .env.local file.',
          missingVars: {
            AIRTABLE_BASE_ID: !baseId,
            AIRTABLE_TABLE_ID: !tableId,
            AIRTABLE_API_KEY: !apiKey
          }
        },
        { status: 500 }
      )
    }

    // Transform form data to match Airtable field structure
    // Map to your actual Airtable column names
    const airtableRecord: AirtableRecord = {
      fields: {
        'Full Name': formData.fullName || '',
        'Email': formData.email || '',
        'Company Name': formData.companyName || '',
        'Role': formData.role || '',
        'Phone Number': formData.phone || '',
        'Number of Employees': formData.numEmployees || '',
        'Industry': formData.industry || '',
        'AI Status': formData.aiStatus || '',
        'Biggest Operational Challenge': formData.biggestChallenge || '',
        'Interest Triggers': Array.isArray(formData.interestTriggers) ? formData.interestTriggers.join(', ') : '',
        'Timeline for Implementation': formData.implementationTimeline || '',
        'Budget Range': formData.budgetRange || '',
        'Decision-Making Process': formData.decisionProcess || '',
        'Primary Areas of Interest': Array.isArray(formData.specificInterests) ? formData.specificInterests.join(', ') : '',
        'Preferred Meeting Format': formData.meetingFormat || '',
        'Biggest Automation Opportunity': formData.biggestOpportunity || '',
        'Questions for our call': formData.questions || '',
        'Preferred Time': Array.isArray(formData.preferredTimes) ? formData.preferredTimes.join(', ') : '',
        'Time Zone': formData.timeZone || '',
        'Submission Date': new Date().toISOString(),
        // Leave internal fields empty for your team to fill
        'Lead Status': 'New',
        'Notes': '',
        'Follow-up Date': ''
      }
    }

    // Log the record being sent for debugging
    console.log('Sending record to Airtable:', JSON.stringify(airtableRecord, null, 2))
    
    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableId}`
    
    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [airtableRecord]
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Airtable API error:', {
        status: response.status,
        statusText: response.statusText,
        errorData: errorData,
        url: airtableUrl,
        hasApiKey: !!apiKey,
        baseId: baseId,
        tableId: tableId
      })
      return NextResponse.json(
        { 
          error: 'Failed to submit to Airtable',
          details: errorData,
          status: response.status 
        },
        { status: response.status }
      )
    }

    const result = await response.json()
    console.log('Successfully submitted to Airtable:', result.records[0].id)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        recordId: result.records[0].id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
