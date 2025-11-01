import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="geometric-shape top-10 right-10 w-24 h-24 bg-black mobile-hidden"></div>
        <div className="geometric-shape bottom-20 left-20 w-32 h-32 border-8 border-black mobile-hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="section-title">ABOUT TERMOKISS</h1>
              <p className="text-lg font-bold uppercase tracking-wide mb-8">
                REVITALIZING AN ABANDONED TERMOKOS HEATING PLANT INTO A THRIVING COMMUNITY HUB SINCE 2016
              </p>
              <div className="space-y-6">
                <p className="uppercase text-sm tracking-wide leading-relaxed">
                  TERMOKISS WAS BORN FROM THE COLLECTIVE EFFORT OF 45 VOLUNTEERS WHO SAW POTENTIAL IN AN ABANDONED BUILDING. 
                  WHAT STARTED AS A COMMUNITY INITIATIVE HAS GROWN INTO A VIBRANT CENTER FOR URBAN AND CIVIL EXCHANGE.
                </p>
                <p className="uppercase text-sm tracking-wide leading-relaxed">
                  OUR PHILOSOPHY IS SIMPLE: COMMUNITY-DRIVEN, NON-PROFIT, EDUCATIONAL ACTIVITIES DETERMINED BY COMMUNITY 
                  NEEDS AND VOLUNTEER SKILLS. WE BELIEVE IN MUTUAL AID, COOPERATION, AND CREATING AN INCLUSIVE SPACE FOR ALL VOICES.
                </p>
              </div>
            </div>
            <div className="card-border">
              <Image
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
                alt="Termokiss Building"
                width={600}
                height={400}
                className="w-full h-96 object-cover grayscale-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">OUR STORY</h2>
          
          <div className="space-y-16">
            {/* 2016 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="card-border bg-white text-black p-8">
                <div className="numbered-badge mb-6">01</div>
                <h3 className="bauhaus-heading text-2xl mb-4">THE BEGINNING - 2016</h3>
                <p className="uppercase text-sm tracking-wide leading-relaxed">
                  45 VOLUNTEERS CAME TOGETHER WITH A SHARED VISION: TO TRANSFORM AN ABANDONED TERMOKOS HEATING PLANT 
                  INTO A SPACE FOR COMMUNITY ENGAGEMENT, LEARNING, AND SOCIAL CHANGE IN PRISHTINA.
                </p>
              </div>
              <div className="card-border">
                <Image
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop"
                  alt="Building renovation"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover grayscale-image"
                />
              </div>
            </div>

            {/* Growth */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="card-border order-2 lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
                  alt="Community workshop"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover grayscale-image"
                />
              </div>
              <div className="card-border bg-white text-black p-8 order-1 lg:order-2">
                <div className="numbered-badge mb-6">02</div>
                <h3 className="bauhaus-heading text-2xl mb-4">COMMUNITY GROWTH</h3>
                <p className="uppercase text-sm tracking-wide leading-relaxed">
                  WHAT STARTED AS A SMALL INITIATIVE GREW INTO A THRIVING COMMUNITY CENTER HOSTING WORKSHOPS, 
                  DISCUSSIONS, CULTURAL EVENTS, AND EDUCATIONAL PROGRAMS DRIVEN BY VOLUNTEER EXPERTISE.
                </p>
              </div>
            </div>

            {/* Today */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="card-border bg-white text-black p-8">
                <div className="numbered-badge mb-6">03</div>
                <h3 className="bauhaus-heading text-2xl mb-4">TODAY & BEYOND</h3>
                <p className="uppercase text-sm tracking-wide leading-relaxed">
                  TODAY, TERMOKISS CONTINUES TO BE A BEACON OF COMMUNITY-DRIVEN CHANGE, FOSTERING COOPERATION, 
                  MUTUAL AID, AND PROVIDING A PLATFORM FOR ALL VOICES IN PRISHTINA'S CIVIL SOCIETY.
                </p>
              </div>
              <div className="card-border">
                <Image
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop"
                  alt="Community today"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover grayscale-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-border bg-black text-white p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="numbered-badge bg-white text-black mx-auto mb-6">01</div>
              <h3 className="bauhaus-heading text-xl mb-4">INCLUSIVITY</h3>
              <p className="uppercase text-xs tracking-wide leading-relaxed">
                CREATING SPACE FOR ALL VOICES AND PERSPECTIVES IN OUR COMMUNITY
              </p>
            </div>
            
            <div className="card-border bg-black text-white p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="numbered-badge bg-white text-black mx-auto mb-6">02</div>
              <h3 className="bauhaus-heading text-xl mb-4">COOPERATION</h3>
              <p className="uppercase text-xs tracking-wide leading-relaxed">
                WORKING TOGETHER TO BUILD STRONGER COMMUNITIES THROUGH MUTUAL AID
              </p>
            </div>
            
            <div className="card-border bg-black text-white p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="numbered-badge bg-white text-black mx-auto mb-6">03</div>
              <h3 className="bauhaus-heading text-xl mb-4">EDUCATION</h3>
              <p className="uppercase text-xs tracking-wide leading-relaxed">
                LEARNING AND GROWING TOGETHER THROUGH COMMUNITY-DRIVEN PROGRAMS
              </p>
            </div>
            
            <div className="card-border bg-black text-white p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="numbered-badge bg-white text-black mx-auto mb-6">04</div>
              <h3 className="bauhaus-heading text-xl mb-4">CHANGE</h3>
              <p className="uppercase text-xs tracking-wide leading-relaxed">
                PROMOTING POSITIVE SOCIAL CHANGE THROUGH REFLECTION AND ACTION
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">COMMUNITY COORDINATORS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="card-border bg-white mb-6 w-48 h-48 mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                  alt="Team member"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover grayscale-image"
                />
              </div>
              <h3 className="bauhaus-heading text-xl mb-2">ALBIN KURTI</h3>
              <p className="uppercase text-sm tracking-wide">COMMUNITY COORDINATOR</p>
              <p className="uppercase text-xs tracking-wide mt-2 opacity-80">
                WORKSHOPS & EDUCATION
              </p>
            </div>
            
            <div className="text-center">
              <div className="card-border bg-white mb-6 w-48 h-48 mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop"
                  alt="Team member"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover grayscale-image"
                />
              </div>
              <h3 className="bauhaus-heading text-xl mb-2">DRITA GASHI</h3>
              <p className="uppercase text-sm tracking-wide">EVENTS COORDINATOR</p>
              <p className="uppercase text-xs tracking-wide mt-2 opacity-80">
                CULTURAL PROGRAMS
              </p>
            </div>
            
            <div className="text-center">
              <div className="card-border bg-white mb-6 w-48 h-48 mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
                  alt="Team member"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover grayscale-image"
                />
              </div>
              <h3 className="bauhaus-heading text-xl mb-2">MENTOR SHALA</h3>
              <p className="uppercase text-sm tracking-wide">CIVIC ENGAGEMENT</p>
              <p className="uppercase text-xs tracking-wide mt-2 opacity-80">
                COMMUNITY FORUMS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-8">JOIN OUR COMMUNITY</h2>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12 max-w-3xl mx-auto">
            TERMOKISS IS POWERED BY VOLUNTEERS. YOUR SKILLS, PASSION, AND DEDICATION HELP US BUILD A STRONGER COMMUNITY.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary">
              BECOME A VOLUNTEER
            </Link>
            <Link href="/activities" className="btn-secondary">
              EXPLORE ACTIVITIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}