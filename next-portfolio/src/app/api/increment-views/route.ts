import { NextResponse } from 'next/server';
import { incrementViewCount, getViewCount } from '@/lib/view-count';

export async function POST() {
  try {
    const newCount = await incrementViewCount();
    
    return NextResponse.json({ 
      count: newCount,
      success: true 
    });
  } catch (error) {
    console.error('Error incrementing view count:', error);
    const currentCount = await getViewCount();
    return NextResponse.json({ 
      count: currentCount,
      success: false 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const count = await getViewCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error getting view count:', error);
    const startingCount = parseInt(process.env.VIEW_COUNT_START || '0', 10);
    return NextResponse.json({ count: startingCount });
  }
}
