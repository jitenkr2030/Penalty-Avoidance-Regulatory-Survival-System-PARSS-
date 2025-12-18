import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, organization, phone, message } = body;
    
    // Validate required fields
    if (!name || !email || !organization || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Here you would integrate with the Viksit-Bharat-Compliance-Suite backend
    // For now, we'll simulate the integration
    console.log('Demo request received:', {
      name,
      email,
      organization,
      phone,
      message: message || 'No message provided',
      timestamp: new Date().toISOString()
    });
    
    // Simulate API call to Viksit-Bharat-Compliance-Suite backend
    // In a real implementation, you would make an API call to the compliance suite
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return NextResponse.json({
      message: 'Demo request submitted successfully',
      data: {
        name,
        email,
        organization,
        requestDate: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}