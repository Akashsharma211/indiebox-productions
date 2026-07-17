import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const inquiry = await prisma.bookingInquiry.create({
      data: {
        name: data.name,
        email: data.email,
        inquiryType: data.inquiryType || 'General',
        message: data.message,
      }
    });

    return NextResponse.json({ success: true, inquiry }, { status: 201 });
  } catch (error) {
    console.error('Error creating booking inquiry:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
