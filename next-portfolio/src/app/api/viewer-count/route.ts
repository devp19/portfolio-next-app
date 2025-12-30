import { NextResponse } from 'next/server';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    // Fetch from komarev - try without abbreviated first to get full number
    const response = await fetch('https://komarev.com/ghpvc/?username=devp19', {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'User-Agent': 'Mozilla/5.0',
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch viewer count');
    }
    
    const text = await response.text();
    
    // The response is usually SVG or HTML with the count
    // Look for all numbers and find the largest one (which should be the view count)
    const allNumbers = text.match(/\d{1,3}(?:,\d{3})*|\d{4,}/g);
    
    if (allNumbers && allNumbers.length > 0) {
      // Convert to numbers, filter out small ones, and get the largest
      const numbers = allNumbers
        .map(n => {
          const num = parseInt(n.replace(/,/g, ''));
          return { original: n, numeric: num };
        })
        .filter(n => n.numeric >= 100) // Filter out small numbers (likely not view count)
        .sort((a, b) => b.numeric - a.numeric);
      
      if (numbers.length > 0) {
        // Return the largest number found
        return NextResponse.json({ count: numbers[0].original });
      }
    }
    
    // Fallback: try to find patterns with "view" text
    const viewPattern = /(\d{1,3}(?:,\d{3})*)\s*views?/i;
    const viewMatch = text.match(viewPattern);
    if (viewMatch) {
      return NextResponse.json({ count: viewMatch[1] });
    }
    
    return NextResponse.json({ count: null });
  } catch (error) {
    console.error('Error fetching viewer count:', error);
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
