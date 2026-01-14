import { NextResponse } from 'next/server';
import { getBasicInfo } from '@/app/lib/database';

export async function GET() {
  try {
    const basicInfo = await getBasicInfo();
    
    if (!basicInfo) {
      return NextResponse.json(
        { error: 'Basic info not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(basicInfo);
  } catch (error) {
    console.error('Error fetching basic info:', error);
    return NextResponse.json(
      { error: 'Failed to fetch basic info' },
      { status: 500 }
    );
  }
}

