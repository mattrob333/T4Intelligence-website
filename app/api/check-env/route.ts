import { NextResponse } from 'next/server'

export async function GET() {
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableId = process.env.AIRTABLE_TABLE_ID
  const apiKey = process.env.AIRTABLE_API_KEY
  
  return NextResponse.json({
    hasBaseId: !!baseId,
    hasTableId: !!tableId,
    hasApiKey: !!apiKey,
    baseIdPrefix: baseId ? baseId.substring(0, 6) : 'missing',
    tableIdPrefix: tableId ? tableId.substring(0, 6) : 'missing',
    apiKeyPrefix: apiKey ? 'key***' : 'missing'
  })
}
