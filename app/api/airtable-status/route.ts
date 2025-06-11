import { NextResponse } from 'next/server'

interface StatusResponse {
  configured: boolean
  hasBaseId: boolean
  hasTableId: boolean
  hasApiKey: boolean
  baseIdPrefix: string | null
  tableIdPrefix: string | null
  connectionTest?: {
    success: boolean
    status?: number
    statusText?: string
    error?: string
  }
}

export async function GET() {
  // Check environment variables
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableId = process.env.AIRTABLE_TABLE_ID
  const apiKey = process.env.AIRTABLE_API_KEY
  
  const status: StatusResponse = {
    configured: !!baseId && !!tableId && !!apiKey,
    hasBaseId: !!baseId,
    hasTableId: !!tableId,
    hasApiKey: !!apiKey,
    baseIdPrefix: baseId ? baseId.substring(0, 6) : null,
    tableIdPrefix: tableId ? tableId.substring(0, 6) : null,
  }
  
  if (status.configured && apiKey) {
    // Test the API connection
    try {
      const testUrl = `https://api.airtable.com/v0/${baseId}/${tableId}?maxRecords=1`
      const response = await fetch(testUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })
      
      status.connectionTest = {
        success: response.ok,
        status: response.status,
        statusText: response.statusText
      }
      
      if (!response.ok) {
        const error = await response.text()
        status.connectionTest.error = error
      }
    } catch (error) {
      status.connectionTest = {
        success: false,
        error: (error as Error).message
      }
    }
  }
  
  return NextResponse.json(status)
}
