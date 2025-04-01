"use client";

import { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

type CalendarEvent = {
  start: Date;
  end: Date;
  summary: string;
};

// Define the event type from Google Calendar API
interface GoogleCalendarEvent {
  summary: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
}

export default function AvailabilityCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Month navigation
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  
  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        
        // Get start and end of current month for API request
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(currentDate);
        
        // Format dates for API
        const timeMin = monthStart.toISOString();
        const timeMax = monthEnd.toISOString();
        
        // Fetch from our API endpoint that we'll create later
        const response = await fetch(`/api/calendar-events?timeMin=${timeMin}&timeMax=${timeMax}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch calendar events');
        }
        
        const data = await response.json();
        setEvents(data.events.map((event: GoogleCalendarEvent) => ({
          start: new Date(event.start.dateTime || event.start.date || ''),
          end: new Date(event.end.dateTime || event.end.date || ''),
          summary: event.summary
        })));
      } catch (err) {
        console.error('Error fetching calendar events:', err);
        setError('Unable to load availability calendar. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchEvents();
  }, [currentDate]);
  
  // Generate calendar days for current month view
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Check if a date is booked
  const isDateBooked = (date: Date) => {
    return events.some(event => 
      (event.summary.toUpperCase().includes('BOOKED') || event.summary.toUpperCase().includes('TEMPAHAN')) && 
      (isSameDay(date, event.start) || 
        (date >= event.start && date <= event.end))
    );
  };
  
  // Get day status class
  const getDayStatusClass = (date: Date) => {
    if (!isSameMonth(date, currentDate)) return 'text-gray-300';
    if (isDateBooked(date)) return 'bg-red-100 text-red-800';
    return 'bg-green-100 text-green-800';
  };
  
  // Week day headers
  const weekDays = ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'];
  
  return (
    <section id="availability" className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F5EEDC]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#183B4E] mb-4">Kekosongan</h2>
          <p className="text-[#27548A] font-montserrat max-w-2xl mx-auto">
            Semak tarikh kekosongan Tuah Cemerlang Homestay untuk perancangan percutian anda.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Calendar Header */}
          <div className="bg-[#183B4E] text-white p-4 flex justify-between items-center">
            <button 
              onClick={prevMonth} 
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              aria-label="Previous month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h3 className="font-montserrat font-semibold text-lg">
              {format(currentDate, 'MMMM yyyy')}
            </h3>
            <button 
              onClick={nextMonth} 
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              aria-label="Next month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Calendar Grid */}
          <div className="p-4">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#27548A]"></div>
              </div>
            ) : (
              <>
                {/* Week Days */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map(day => (
                    <div key={day} className="text-center font-montserrat font-semibold text-[#183B4E]">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {days.map(day => (
                    <div 
                      key={day.toString()} 
                      className={`
                        p-2 text-center rounded-md font-montserrat
                        ${getDayStatusClass(day)}
                        hover:opacity-90 transition-opacity duration-200
                      `}
                    >
                      <span className="inline-block w-full text-sm sm:text-base">
                        {format(day, 'd')}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Legend */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-100 rounded-full mr-2"></div>
                <span className="text-sm text-[#183B4E] font-montserrat">Tersedia</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-100 rounded-full mr-2"></div>
                <span className="text-sm text-[#183B4E] font-montserrat">Telah Ditempah</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-[#183B4E]/80 font-montserrat text-sm">
            Untuk menempah tarikh yang tersedia, sila hubungi kami melalui WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
} 