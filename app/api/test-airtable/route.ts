import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test environment variables
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableId = process.env.AIRTABLE_TABLE_ID
    const apiKey = process.env.AIRTABLE_API_KEY
    
    console.log('Test endpoint - Environment check:', {
      hasBaseId: !!baseId,
      hasTableId: !!tableId,
      hasApiKey: !!apiKey,
      baseId: baseId ? `${baseId.substring(0, 8)}...` : 'missing',
      tableId: tableId ? `${tableId.substring(0, 8)}...` : 'missing'
    })
    
    if (!baseId || !tableId || !apiKey) {
      return NextResponse.json(
        { 
          error: 'Missing environment variables',
          hasBaseId: !!baseId,
          hasTableId: !!tableId,
          hasApiKey: !!apiKey
        },
        { status: 500 }
      )
    }

    // Test simple Airtable API call (just list records)
    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableId}?maxRecords=1`
    
    const response = await fetch(airtableUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Airtable API test error:', {
        status: response.status,
        statusText: response.statusText,
        errorData: errorData,
        url: airtableUrl
      })
      
      return NextResponse.json(
        { 
          error: 'Airtable API test failed',
          status: response.status,
          details: errorData
        },
        { status: response.status }
      )
    }

    const result = await response.json()
    
    return NextResponse.json({
      success: true,
      message: 'Airtable connection successful!',
      recordCount: result.records?.length || 0
    })

  } catch (error) {
    console.error('Test endpoint error:', error)
    return NextResponse.json(
      { error: 'Test endpoint failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
