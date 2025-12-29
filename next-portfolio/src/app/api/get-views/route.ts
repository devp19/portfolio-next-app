import { NextResponse } from 'next/server';
import { getViewCount } from '@/lib/view-count';

export const revalidate = 0; // Always fetch fresh

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
