import Image from 'next/image'
import Link from 'next/link'

export default function Activities() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="geometric-shape top-16 right-16 w-40 h-40 bg-black transform rotate-12 mobile-hidden"></div>
        <div className="geometric-shape bottom-16 left-16 w-24 h-24 border-8 border-black mobile-hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title mb-8">ACTIVITIES & PROGRAMS</h1>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12 max-w-4xl mx-auto">
            COMMUNITY-DRIVEN EDUCATIONAL ACTIVITIES DETERMINED BY COMMUNITY NEEDS AND VOLUNTEER SKILLS
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Creative Workshops */}
            <div className="card-border bg-white text-black p-8 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="flex items-start space-x-6 card-content">
                <div className="numbered-badge">01</div>
                <div className="flex-1">
                  <h3 className="bauhaus-heading text-2xl mb-4">CREATIVE WORKSHOPS</h3>
                  <div className="mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop"
                      alt="Creative Workshop"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover grayscale-image card-border"
                    />
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="uppercase text-sm tracking-wide">• ART & PAINTING SESSIONS</li>
                    <li className="uppercase text-sm tracking-wide">• MUSIC PRODUCTION WORKSHOPS</li>
                    <li className="uppercase text-sm tracking-wide">• CREATIVE WRITING CIRCLES</li>
                    <li className="uppercase text-sm tracking-wide">• PHOTOGRAPHY TECHNIQUES</li>
                    <li className="uppercase text-sm tracking-wide">• DIGITAL DESIGN COURSES</li>
                  </ul>
                  <div className="card-button">
                   <Link href="/contact" className="btn-primary text-xs mt-4">
                   JOIN WORKSHOP
                   </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Discussions */}
            <div className="card-border bg-white text-black p-8 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="flex items-start space-x-6 card-content">
                <div className="numbered-badge">02</div>
                <div className="flex-1">
                  <h3 className="bauhaus-heading text-2xl mb-4">COMMUNITY DISCUSSIONS</h3>
                  <div className="mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=300&fit=crop"
                      alt="Community Discussion"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover grayscale-image card-border"
                    />
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="uppercase text-sm tracking-wide">• CIVIC ENGAGEMENT FORUMS</li>
                    <li className="uppercase text-sm tracking-wide">• URBAN DEVELOPMENT TALKS</li>
                    <li className="uppercase text-sm tracking-wide">• SOCIAL JUSTICE DEBATES</li>
                    <li className="uppercase text-sm tracking-wide">• COMMUNITY PROBLEM SOLVING</li>
                    <li className="uppercase text-sm tracking-wide">• POLICY DISCUSSION GROUPS</li>
                  </ul>
                  <div className="card-button">
                    <Link href="/contact" className="btn-primary text-xs mt-4">
                      JOIN DISCUSSION
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Events */}
            <div className="card-border bg-white text-black p-8 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="flex items-start space-x-6 card-content">
                <div className="numbered-badge">03</div>
                <div className="flex-1">
                  <h3 className="bauhaus-heading text-2xl mb-4">CULTURAL EVENTS</h3>
                  <div className="mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop"
                      alt="Cultural Event"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover grayscale-image card-border"
                    />
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="uppercase text-sm tracking-wide">• LIVE MUSIC PERFORMANCES</li>
                    <li className="uppercase text-sm tracking-wide">• FILM SCREENINGS & DISCUSSIONS</li>
                    <li className="uppercase text-sm tracking-wide">• POETRY & LITERATURE NIGHTS</li>
                    <li className="uppercase text-sm tracking-wide">• COMMUNITY FESTIVALS</li>
                    <li className="uppercase text-sm tracking-wide">• CULTURAL EXCHANGE EVENTS</li>
                  </ul>
                  <div className="card-button">
                    <Link href="/events" className="btn-primary text-xs mt-4">
                      VIEW EVENTS
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Programs */}
            <div className="card-border bg-white text-black p-8 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="flex items-start space-x-6 card-content">
                <div className="numbered-badge">04</div>
                <div className="flex-1">
                  <h3 className="bauhaus-heading text-2xl mb-4">EDUCATIONAL PROGRAMS</h3>
                  <div className="mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
                      alt="Educational Program"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover grayscale-image card-border"
                    />
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="uppercase text-sm tracking-wide">• LANGUAGE LEARNING CIRCLES</li>
                    <li className="uppercase text-sm tracking-wide">• DIGITAL LITERACY WORKSHOPS</li>
                    <li className="uppercase text-sm tracking-wide">• YOUTH EMPOWERMENT PROGRAMS</li>
                    <li className="uppercase text-sm tracking-wide">• PROFESSIONAL SKILL BUILDING</li>
                    <li className="uppercase text-sm tracking-wide">• COMMUNITY EDUCATION INITIATIVES</li>
                  </ul>
                  <div className="card-button">
                    <Link href="/contact" className="btn-primary text-xs mt-4">
                      ENROLL NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Action */}
            <div className="card-border bg-white text-black p-8 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="flex items-start space-x-6 card-content">
                <div className="numbered-badge">05</div>
                <div className="flex-1">
                  <h3 className="bauhaus-heading text-2xl mb-4">ENVIRONMENTAL ACTION</h3>
                  <div className="mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop"
                      alt="Environmental Action"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover grayscale-image card-border"
                    />
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="uppercase text-sm tracking-wide">• URBAN GARDENING PROJECTS</li>
                    <li className="uppercase text-sm tracking-wide">• SUSTAINABILITY WORKSHOPS</li>
                    <li className="uppercase text-sm tracking-wide">• COMMUNITY CLEAN-UP DAYS</li>
                    <li className="uppercase text-sm tracking-wide">• ENVIRONMENTAL AWARENESS CAMPAIGNS</li>
                    <li className="uppercase text-sm tracking-wide">• GREEN TECHNOLOGY DISCUSSIONS</li>
                  </ul>
                  <div className="card-button">
                    <Link href="/contact" className="btn-primary text-xs mt-4">
                      GET INVOLVED
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sports & Wellness */}
            <div className="card-border bg-white text-black p-8 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="flex items-start space-x-6 card-content">
                <div className="numbered-badge">06</div>
                <div className="flex-1">
                  <h3 className="bauhaus-heading text-2xl mb-4">SPORTS & WELLNESS</h3>
                  <div className="mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"
                      alt="Sports & Wellness"
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover grayscale-image card-border"
                    />
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="uppercase text-sm tracking-wide">• COMMUNITY YOGA SESSIONS</li>
                    <li className="uppercase text-sm tracking-wide">• GROUP FITNESS ACTIVITIES</li>
                    <li className="uppercase text-sm tracking-wide">• MENTAL HEALTH WORKSHOPS</li>
                    <li className="uppercase text-sm tracking-wide">• MEDITATION & MINDFULNESS</li>
                    <li className="uppercase text-sm tracking-wide">• SPORTS TOURNAMENTS</li>
                  </ul>
                  <div className="card-button">
                    <Link href="/contact" className="btn-primary text-xs mt-4">
                      JOIN ACTIVITIES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">HOW TO GET INVOLVED</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full border-8 border-black flex items-center justify-center mx-auto mb-8">
                <span className="font-black text-4xl">01</span>
              </div>
              <h3 className="bauhaus-heading text-2xl mb-4">VISIT US</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                COME TO OUR CENTER IN PRISHTINA TO MEET THE COMMUNITY AND LEARN ABOUT ONGOING ACTIVITIES
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full border-8 border-black flex items-center justify-center mx-auto mb-8">
                <span className="font-black text-4xl">02</span>
              </div>
              <h3 className="bauhaus-heading text-2xl mb-4">VOLUNTEER</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                SHARE YOUR SKILLS AND PASSION BY LEADING WORKSHOPS, ORGANIZING EVENTS, OR SUPPORTING ACTIVITIES
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 rounded-full border-8 border-black flex items-center justify-center mx-auto mb-8">
                <span className="font-black text-4xl">03</span>
              </div>
              <h3 className="bauhaus-heading text-2xl mb-4">PARTICIPATE</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                JOIN WORKSHOPS, DISCUSSIONS, AND EVENTS THAT INTEREST YOU AND HELP BUILD OUR COMMUNITY
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/contact" className="btn-primary">
              CONTACT US TO GET STARTED
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}