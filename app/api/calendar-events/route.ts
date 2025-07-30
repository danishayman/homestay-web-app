import { NextResponse } from 'next/server';
import { google } from 'googleapis';

//Google Calendar ID
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

// Initialize the Google Calendar API
const calendar = google.calendar({
  version: 'v3',
  auth: new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/calendar.readonly']
  )
});

export async function GET(request: Request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const timeMin = searchParams.get('timeMin') || new Date().toISOString();
    const timeMax = searchParams.get('timeMax') || '';

    // Validate required parameters
    if (!CALENDAR_ID) {
      return NextResponse.json(
        { error: 'Calendar ID not configured' },
        { status: 500 }
      );
    }

    // Fetch events from Google Calendar
    const response = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin,
      timeMax: timeMax || undefined,
      singleEvents: true,
      orderBy: 'startTime',
    });

    // Return events
    return NextResponse.json({ events: response.data.items || [] });
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch calendar events' },
      { status: 500 }
    );
  }
} 