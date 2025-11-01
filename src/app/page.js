import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Geometric Shapes */}
        <div className="geometric-shape top-20 right-20 w-32 h-32 bg-black mobile-hidden"></div>
        <div className="geometric-shape top-40 left-40 w-16 h-16 bg-black transform rotate-45 mobile-hidden"></div>
        <div className="geometric-shape bottom-20 right-40 w-24 h-24 border-8 border-black mobile-hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="hero-title mb-8">
              TERMOKISS
            </h1>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-extra-wide mb-12 max-w-4xl mx-auto">
              URBAN AND CIVIL EXCHANGE, REFLECTION AND CHANGEMAKING IN PRISHTINA, KOSOVO
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/about" className="btn-primary">
                DISCOVER OUR STORY
              </Link>
              <Link href="/activities" className="btn-secondary">
                JOIN ACTIVITIES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">OUR MISSION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-border bg-white text-black p-8 text-center">
              <div className="numbered-badge mx-auto mb-6">01</div>
              <h3 className="bauhaus-heading text-2xl mb-4">COMMUNITY BUILDING</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                CREATING INCLUSIVE SPACES FOR ALL VOICES, FOSTERING COOPERATION AND MUTUAL AID WITHIN OUR COMMUNITY
              </p>
            </div>
            <div className="card-border bg-white text-black p-8 text-center">
              <div className="numbered-badge mx-auto mb-6">02</div>
              <h3 className="bauhaus-heading text-2xl mb-4">EDUCATION & GROWTH</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                PROVIDING EDUCATIONAL ACTIVITIES DETERMINED BY COMMUNITY NEEDS AND VOLUNTEER SKILLS
              </p>
            </div>
            <div className="card-border bg-white text-black p-8 text-center">
              <div className="numbered-badge mx-auto mb-6">03</div>
              <h3 className="bauhaus-heading text-2xl mb-4">SOCIAL CHANGE</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                PROMOTING REFLECTION AND CHANGEMAKING THROUGH URBAN AND CIVIL EXCHANGE INITIATIVES
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-16">FEATURED ACTIVITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-border bg-white hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
                  alt="Creative Workshop"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover grayscale-image"
                />
                <div className="numbered-badge absolute top-4 left-4">01</div>
              </div>
              <div className="p-6 card-content">
                <h3 className="bauhaus-heading text-xl mb-4">CREATIVE WORKSHOPS</h3>
                <p className="uppercase text-sm tracking-wide mb-6">
                  ART, MUSIC, WRITING, AND PHOTOGRAPHY WORKSHOPS LED BY COMMUNITY VOLUNTEERS
                </p>
              </div>
              <div className="p-6 pt-0 card-button">
                <Link href="/activities" className="btn-secondary text-xs">
                  LEARN MORE
                </Link>
              </div>
            </div>
            
            <div className="card-border bg-white hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
                  alt="Community Discussion"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover grayscale-image"
                />
                <div className="numbered-badge absolute top-4 left-4">02</div>
              </div>
              <div className="p-6 card-content">
                <h3 className="bauhaus-heading text-xl mb-4">CIVIC FORUMS</h3>
                <p className="uppercase text-sm tracking-wide mb-6">
                  OPEN DISCUSSIONS ON URBAN DEVELOPMENT, CIVIL RIGHTS, AND COMMUNITY ISSUES
                </p>
              </div>
              <div className="p-6 pt-0 card-button">
                <Link href="/activities" className="btn-secondary text-xs">
                  JOIN DISCUSSION
                </Link>
              </div>
            </div>
            
            <div className="card-border bg-white hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
                  alt="Cultural Event"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover grayscale-image"
                />
                <div className="numbered-badge absolute top-4 left-4">03</div>
              </div>
              <div className="p-6 card-content">
                <h3 className="bauhaus-heading text-xl mb-4">CULTURAL EVENTS</h3>
                <p className="uppercase text-sm tracking-wide mb-6">
                  CONCERTS, FILM SCREENINGS, FESTIVALS, AND COMMUNITY CELEBRATIONS
                </p>
              </div>
              <div className="p-6 pt-0 card-button">
                <Link href="/events" className="btn-secondary text-xs">
                  VIEW EVENTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-16">UPCOMING EVENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-border bg-white text-black p-6 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="card-content">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-black text-white p-4 text-center min-w-[80px]">
                    <div className="text-2xl font-black">15</div>
                    <div className="text-sm uppercase tracking-wide">NOV</div>
                  </div>
                  <div>
                    <h3 className="bauhaus-heading text-lg mb-2">PHOTOGRAPHY WORKSHOP</h3>
                    <p className="uppercase text-xs tracking-wide">DOCUMENTARY PHOTOGRAPHY TECHNIQUES</p>
                  </div>
                </div>
              </div>
              <div className="card-button">
                <Link href="/events" className="btn-primary text-xs">
                  REGISTER NOW
                </Link>
              </div>
            </div>
            
            <div className="card-border bg-white text-black p-6 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="card-content">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-black text-white p-4 text-center min-w-[80px]">
                    <div className="text-2xl font-black">22</div>
                    <div className="text-sm uppercase tracking-wide">NOV</div>
                  </div>
                  <div>
                    <h3 className="bauhaus-heading text-lg mb-2">COMMUNITY FORUM</h3>
                    <p className="uppercase text-xs tracking-wide">URBAN DEVELOPMENT DISCUSSION</p>
                  </div>
                </div>
              </div>
              <div className="card-button">
                <Link href="/events" className="btn-primary text-xs">
                  JOIN FORUM
                </Link>
              </div>
            </div>
            
            <div className="card-border bg-white text-black p-6 hover:scale-105 transition-transform duration-200 card-with-bottom-button">
              <div className="card-content">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-black text-white p-4 text-center min-w-[80px]">
                    <div className="text-2xl font-black">30</div>
                    <div className="text-sm uppercase tracking-wide">NOV</div>
                  </div>
                  <div>
                    <h3 className="bauhaus-heading text-lg mb-2">MUSIC NIGHT</h3>
                    <p className="uppercase text-xs tracking-wide">LOCAL ARTISTS SHOWCASE</p>
                  </div>
                </div>
              </div>
              <div className="card-button">
                <Link href="/events" className="btn-primary text-xs">
                  GET TICKETS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-8">JOIN OUR COMMUNITY</h2>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12 max-w-3xl mx-auto">
            BE PART OF THE CHANGE. VOLUNTEER, PARTICIPATE, AND HELP BUILD A STRONGER COMMUNITY IN PRISHTINA.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-black hover:bg-black hover:text-white">
              BECOME A VOLUNTEER
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