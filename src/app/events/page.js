'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingEvents = [
    {
      id: 1,
      title: 'PHOTOGRAPHY WORKSHOP',
      description: 'DOCUMENTARY PHOTOGRAPHY TECHNIQUES WITH LOCAL PHOTOGRAPHER AGIM KRASNIQI',
      date: '15',
      month: 'NOV',
      time: '18:00',
      location: 'TERMOKISS MAIN HALL',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      category: 'WORKSHOP'
    },
    {
      id: 2,
      title: 'COMMUNITY FORUM',
      description: 'URBAN DEVELOPMENT AND COMMUNITY NEEDS DISCUSSION',
      date: '22',
      month: 'NOV',
      time: '19:00',
      location: 'TERMOKISS DISCUSSION ROOM',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop',
      category: 'DISCUSSION'
    },
    {
      id: 3,
      title: 'MUSIC NIGHT',
      description: 'LOCAL ARTISTS SHOWCASE FEATURING EMERGING MUSICIANS FROM PRISHTINA',
      date: '30',
      month: 'NOV',
      time: '20:00',
      location: 'TERMOKISS PERFORMANCE SPACE',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      category: 'CULTURAL'
    },
    {
      id: 4,
      title: 'DIGITAL LITERACY WORKSHOP',
      description: 'BASIC COMPUTER SKILLS AND INTERNET SAFETY FOR SENIORS',
      date: '05',
      month: 'DEC',
      time: '16:00',
      location: 'TERMOKISS COMPUTER LAB',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      category: 'EDUCATION'
    },
    {
      id: 5,
      title: 'ENVIRONMENTAL ACTION DAY',
      description: 'COMMUNITY CLEAN-UP AND URBAN GARDENING PROJECT',
      date: '12',
      month: 'DEC',
      time: '10:00',
      location: 'TERMOKISS GARDEN AREA',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
      category: 'ENVIRONMENT'
    },
    {
      id: 6,
      title: 'FILM SCREENING',
      description: 'DOCUMENTARY ABOUT KOSOVO YOUTH ACTIVISM WITH DIRECTOR Q&A',
      date: '18',
      month: 'DEC',
      time: '19:30',
      location: 'TERMOKISS CINEMA SPACE',
      image: 'https://images.unsplash.com/photo-1489599363389-1623b8b7b5c5?w=400&h=300&fit=crop',
      category: 'CULTURAL'
    }
  ]

  const pastEvents = [
    {
      id: 7,
      title: 'CREATIVE WRITING WORKSHOP',
      description: 'STORYTELLING AND NARRATIVE TECHNIQUES WITH PUBLISHED AUTHORS',
      date: '25',
      month: 'OCT',
      time: '17:00',
      location: 'TERMOKISS LIBRARY',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
      category: 'WORKSHOP'
    },
    {
      id: 8,
      title: 'YOUTH EMPOWERMENT FORUM',
      description: 'DISCUSSING OPPORTUNITIES AND CHALLENGES FOR YOUNG PEOPLE IN KOSOVO',
      date: '18',
      month: 'OCT',
      time: '18:30',
      location: 'TERMOKISS MAIN HALL',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop',
      category: 'DISCUSSION'
    },
    {
      id: 9,
      title: 'ART EXHIBITION OPENING',
      description: 'LOCAL ARTISTS COLLECTIVE SHOWCASE: REFLECTIONS ON URBAN LIFE',
      date: '10',
      month: 'OCT',
      time: '19:00',
      location: 'TERMOKISS GALLERY SPACE',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      category: 'CULTURAL'
    }
  ]

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="geometric-shape top-20 right-20 w-28 h-28 bg-black mobile-hidden"></div>
        <div className="geometric-shape bottom-20 left-20 w-36 h-36 border-8 border-black transform rotate-45 mobile-hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title mb-8">EVENTS & GATHERINGS</h1>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12 max-w-4xl mx-auto">
            JOIN OUR COMMUNITY EVENTS, WORKSHOPS, AND CULTURAL GATHERINGS FOR LEARNING AND CONNECTION
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex border-4 border-white">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-12 py-4 font-black uppercase tracking-wide text-sm transition-all duration-200 ${
                  activeTab === 'upcoming' 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                UPCOMING EVENTS
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-12 py-4 font-black uppercase tracking-wide text-sm transition-all duration-200 border-l-4 border-white ${
                  activeTab === 'past' 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                PAST EVENTS
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEvents.map((event, index) => (
              <div key={event.id} className="card-border bg-white text-black hover:scale-105 transition-transform duration-200 card-with-bottom-button">
                <div className="relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover grayscale-image"
                  />
                  <div className="numbered-badge absolute top-4 left-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-6 card-content">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-black text-white p-3 text-center min-w-[70px]">
                      <div className="text-xl font-black">{event.date}</div>
                      <div className="text-xs uppercase tracking-wide">{event.month}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="bauhaus-heading text-lg mb-2">{event.title}</h3>
                      <p className="uppercase text-xs tracking-wide mb-2">
                        {event.time} • {event.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="uppercase text-xs tracking-wide leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>
                
                <div className="p-6 pt-0 card-button">
                  {activeTab === 'upcoming' ? (
                    <Link href="/contact" className="btn-primary text-xs">
                      REGISTER NOW
                    </Link>
                  ) : (
                    <Link href="/blog" className="btn-secondary text-xs">
                      READ RECAP
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-8">WANT TO ORGANIZE AN EVENT?</h2>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12 max-w-3xl mx-auto">
            TERMOKISS IS OPEN TO COMMUNITY MEMBERS WHO WANT TO ORGANIZE WORKSHOPS, DISCUSSIONS, OR CULTURAL EVENTS.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-black hover:bg-black hover:text-white">
              PROPOSE AN EVENT
            </Link>
            <Link href="/activities" className="btn-secondary bg-white text-black hover:bg-black hover:text-white">
              EXPLORE ACTIVITIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}