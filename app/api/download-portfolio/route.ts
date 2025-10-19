import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'edge'
export async function GET(request: NextRequest) {
  try {
    const externalUrl = 'https://media.artchanted.net/Suyun%20Chen%20Portfolio.pdf'
    
    // Fetch the PDF from external server without caching
    const response = await fetch(externalUrl, {
      cache: 'no-store', // Disable Next.js caching for large files
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.status}`)
    }
    
    // Get the PDF data
    const pdfBuffer = await response.arrayBuffer()
    
    // Return the PDF with proper headers (no caching for large files)
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Suyun_Chen_Portfolio.pdf"',
        'Content-Length': pdfBuffer.byteLength.toString(),
        'Cache-Control': 'no-cache', // No caching for large files
      },
    })
  } catch (error) {
    console.error('Error downloading portfolio:', error)
    return NextResponse.json(
      { error: 'Failed to download portfolio' },
      { status: 500 }
    )
  }
}
