'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Venue {
  name: string;
  address_1: string;
  city: string;
}

interface FeaturedPhoto {
  photo_link: string;
  id: string;
}

interface MeetupEvent {
  id: string;
  name: string;
  link: string;
  description?: string;
  local_date: string;
  local_time: string;
  yes_rsvp_count: number;
  is_online_event: boolean;
  venue?: Venue;
  featured_photo?: FeaturedPhoto;
}

export default function Events(): JSX.Element {
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch('/api/meetup-events');
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Oops!</h2>
          <p className="mt-2 text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Format the date
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-AU', options);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Join us at these upcoming startup and tech events in Perth
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-600">No upcoming events at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                {event.featured_photo ? (
                  <div className="h-48 relative">
                    <Image
                      src={event.featured_photo.photo_link}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">Perth Startup Community</span>
                  </div>
                )}
                
                <div className="p-6 flex-grow">
                  <p className="text-sm font-medium text-pink-600 mb-1">
                    {formatDate(event.local_date)}
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{event.name}</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.venue ? `${event.venue.name}, ${event.venue.address_1}` : 'Location TBA'}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-3">{event.yes_rsvp_count} attendees</span>
                      {event.is_online_event && (
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">Online</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <a 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full block text-center py-2 px-4 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition"
                  >
                    RSVP on Meetup
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}