import { NextResponse } from 'next/server';
import { getNavigationWithCategories } from '@/lib/sanity/navigation';

export async function GET() {
  try {
    const navigation = await getNavigationWithCategories();
    return NextResponse.json(navigation);
  } catch (error) {
    console.error('Error fetching navigation:', error);
    return NextResponse.json(
      { error: 'Failed to fetch navigation' },
      { status: 500 }
    );
  }
} 