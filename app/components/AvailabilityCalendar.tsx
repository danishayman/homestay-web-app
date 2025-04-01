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
    return events.some(event => {
      const isRelevantEvent = event.summary.toUpperCase().includes('BOOKED') || 
                              event.summary.toUpperCase().includes('TEMPAHAN');
      
      // Check if it's an all-day event (no time portion in the dates)
      const isAllDayEvent = event.start.toString().includes('00:00:00') && 
                            event.end.toString().includes('00:00:00');
      
      if (isRelevantEvent) {
        if (isAllDayEvent) {
          // For all-day events, end date is exclusive (don't include it)
          const eventEndDate = new Date(event.end);
          eventEndDate.setDate(eventEndDate.getDate() - 1);
          return isSameDay(date, event.start) || 
                (date >= event.start && date <= eventEndDate);
        } else {
          // For events with specific times, use normal range check
          return isSameDay(date, event.start) || 
                (date >= event.start && date <= event.end);
        }
      }
      
      return false;
    });
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
    <section id="availability" className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F5EEDC]/90">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#183B4E] mb-4 animate-fadeIn">Kekosongan</h2>
          <p className="text-[#183B4E] font-montserrat max-w-2xl mx-auto font-bold">
            Semak tarikh kekosongan Tuah Cemerlang Homestay untuk perancangan percutian anda.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
          {/* Calendar Header */}
          <div className="bg-gradient-to-r from-[#183B4E] to-[#27548A] text-white p-5 flex justify-between items-center">
            <button 
              onClick={prevMonth} 
              className="p-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h3 className="font-montserrat font-semibold text-lg tracking-wide">
              {format(currentDate, 'MMMM yyyy')}
            </h3>
            <button 
              onClick={nextMonth} 
              className="p-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Calendar Grid */}
          <div className="p-5">
            {loading ? (
              <div className="flex justify-center items-center py-24">
                <div className="relative">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 border-[#27548A]"></div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn">
                {/* Week Days */}
                <div className="grid grid-cols-7 gap-2 mb-3">
                  {weekDays.map(day => (
                    <div key={day} className="text-center font-montserrat font-semibold text-[#183B4E]/80 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {days.map(day => {
                    const isBooked = isDateBooked(day);
                    const isCurrentMonth = isSameMonth(day, currentDate);
                    const isToday = isSameDay(day, new Date());
                    
                    return (
                      <div 
                        key={day.toString()} 
                        className={`
                          relative p-2 sm:p-3 text-center rounded-lg font-montserrat
                          transition-all duration-200 transform
                          ${!isCurrentMonth ? 'text-gray-300 hover:bg-gray-50' : ''}
                          ${isBooked && isCurrentMonth ? 'bg-red-100 text-red-800 hover:bg-red-200' : ''}
                          ${!isBooked && isCurrentMonth ? 'bg-green-100 text-green-800 hover:bg-green-200' : ''}
                          ${isToday ? 'ring-2 ring-blue-400' : ''}
                          hover:scale-105
                        `}
                      >
                        <span className="inline-block w-full text-sm sm:text-base">
                          {format(day, 'd')}
                        </span>
                        {isToday && (
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* Legend */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-100 rounded-md border border-green-300 mr-2"></div>
                <span className="text-sm text-[#183B4E] font-montserrat">Tersedia</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-100 rounded-md border border-red-300 mr-2"></div>
                <span className="text-sm text-[#183B4E] font-montserrat">Telah Ditempah</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-blue-400 rounded-md mr-2"></div>
                <span className="text-sm text-[#183B4E] font-montserrat">Hari Ini</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[#183B4E]/80 font-montserrat text-sm bg-white rounded-lg p-4 shadow-md inline-block">
            Untuk menempah tarikh yang tersedia, sila hubungi kami melalui WhatsApp. 
            <a 
              href="https://wa.me/60174156105?text=Tuah%20Cemerlang%20Homestay%20-%20Saya%20berminat%20untuk%20tempah%20homestay." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center ml-1 text-[#27548A] hover:text-[#183B4E] font-medium hover:underline transition-colors duration-200"
            >
              <span>+60 17-415 6105</span>
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 