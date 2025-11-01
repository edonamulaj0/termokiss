'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'volunteer'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // For static hosting, you can use:
    // 1. Netlify Forms (add data-netlify="true" to form)
    // 2. Formspree (action="https://formspree.io/f/YOUR_FORM_ID")
    // 3. EmailJS (client-side email sending)
    
    // Example with EmailJS (install emailjs-com):
    // import emailjs from 'emailjs-com'
    // emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
    
    console.log('Form submitted:', formData)
    alert('THANK YOU FOR YOUR MESSAGE! WE WILL GET BACK TO YOU SOON.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      interest: 'volunteer'
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const faqItems = [
    {
      question: 'HOW CAN I BECOME A VOLUNTEER?',
      answer: 'VISIT US AT OUR CENTER, FILL OUT THE CONTACT FORM, OR JOIN ONE OF OUR COMMUNITY MEETINGS. WE WELCOME VOLUNTEERS WITH ALL SKILL LEVELS AND INTERESTS.'
    },
    {
      question: 'DO I NEED TO PAY TO PARTICIPATE IN ACTIVITIES?',
      answer: 'ALL OUR ACTIVITIES ARE FREE OF CHARGE. TERMOKISS IS A NON-PROFIT COMMUNITY CENTER FUNDED BY DONATIONS AND VOLUNTEER CONTRIBUTIONS.'
    },
    {
      question: 'CAN I ORGANIZE MY OWN EVENT AT TERMOKISS?',
      answer: 'YES! WE ENCOURAGE COMMUNITY MEMBERS TO ORGANIZE WORKSHOPS, DISCUSSIONS, OR CULTURAL EVENTS. CONTACT US WITH YOUR PROPOSAL AND WE\'LL HELP MAKE IT HAPPEN.'
    },
    {
      question: 'WHAT LANGUAGES ARE SPOKEN AT TERMOKISS?',
      answer: 'OUR ACTIVITIES ARE CONDUCTED IN ALBANIAN, SERBIAN, AND ENGLISH. WE STRIVE TO BE INCLUSIVE AND PROVIDE TRANSLATION WHEN NEEDED.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="geometric-shape top-20 right-20 w-36 h-36 bg-black mobile-hidden"></div>
        <div className="geometric-shape bottom-20 left-20 w-28 h-28 border-8 border-black transform rotate-45 mobile-hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title mb-8">GET IN TOUCH</h1>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12 max-w-4xl mx-auto">
            JOIN OUR COMMUNITY, ASK QUESTIONS, OR PROPOSE AN ACTIVITY. WE'RE HERE TO LISTEN AND COLLABORATE.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">FIND US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-6">
                <span className="font-black text-2xl">01</span>
              </div>
              <h3 className="bauhaus-heading text-xl mb-4">LOCATION</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                FORMER TERMOKOS BUILDING<br/>
                PRISHTINA, KOSOVO<br/>
                NEAR CITY CENTER
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-6">
                <span className="font-black text-2xl">02</span>
              </div>
              <h3 className="bauhaus-heading text-xl mb-4">HOURS</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                MONDAY - FRIDAY: 16:00 - 22:00<br/>
                SATURDAY: 10:00 - 22:00<br/>
                SUNDAY: 14:00 - 20:00
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-6">
                <span className="font-black text-2xl">03</span>
              </div>
              <h3 className="bauhaus-heading text-xl mb-4">CONTACT</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                INFO@TERMOKISS.ORG<br/>
                +383 49 123 456<br/>
                @TERMOKISS_PRISHTINA
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-6">
                <span className="font-black text-2xl">04</span>
              </div>
              <h3 className="bauhaus-heading text-xl mb-4">TRANSPORT</h3>
              <p className="uppercase text-sm tracking-wide leading-relaxed">
                BUS LINES: 1, 4, 8<br/>
                WALKING DISTANCE FROM<br/>
                MAIN SQUARE (15 MIN)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-border bg-gray-200 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-black mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-black text-3xl">T</span>
              </div>
              <p className="bauhaus-heading text-2xl text-black">INTERACTIVE MAP</p>
              <p className="uppercase text-sm tracking-wide text-black mt-2">
                MAP INTEGRATION PLACEHOLDER
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">SEND US A MESSAGE</h2>
          
          <form onSubmit={handleSubmit} className="space-y-8" data-netlify="true" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block uppercase text-sm font-bold tracking-wide mb-3">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-4 border-black font-bold uppercase text-sm tracking-wide placeholder:text-gray-600 placeholder:uppercase"
                  placeholder="ENTER YOUR FULL NAME"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block uppercase text-sm font-bold tracking-wide mb-3">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-4 border-black font-bold uppercase text-sm tracking-wide placeholder:text-gray-600 placeholder:uppercase"
                  placeholder="YOUR.EMAIL@EXAMPLE.COM"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="interest" className="block uppercase text-sm font-bold tracking-wide mb-3">
                I'M INTERESTED IN *
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-6 py-4 border-4 border-black font-bold uppercase text-sm tracking-wide"
              >
                <option value="volunteer">VOLUNTEERING</option>
                <option value="workshop">ATTENDING WORKSHOPS</option>
                <option value="organize">ORGANIZING AN EVENT</option>
                <option value="partnership">PARTNERSHIP</option>
                <option value="general">GENERAL INQUIRY</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="subject" className="block uppercase text-sm font-bold tracking-wide mb-3">
                SUBJECT *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 border-4 border-black font-bold uppercase text-sm tracking-wide placeholder:text-gray-600 placeholder:uppercase"
                placeholder="WHAT IS THIS ABOUT?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block uppercase text-sm font-bold tracking-wide mb-3">
                YOUR MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 border-4 border-black font-bold uppercase text-sm tracking-wide placeholder:text-gray-600 placeholder:uppercase resize-none"
                placeholder="TELL US MORE ABOUT YOUR INQUIRY..."
              />
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn-primary">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">WAYS TO GET INVOLVED</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="card-border bg-white text-black p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="numbered-badge mx-auto mb-6">01</div>
              <h3 className="bauhaus-heading text-xl mb-4">VOLUNTEER</h3>
              <p className="uppercase text-xs tracking-wide leading-relaxed mb-6">
                SHARE YOUR SKILLS AND TIME TO HELP ORGANIZE WORKSHOPS, EVENTS, AND COMMUNITY ACTIVITIES
              </p>
              <Link href="#" className="btn-primary text-xs">
                APPLY NOW
              </Link>
            </div>
            
            <div className="card-border bg-white text-black p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="numbered-badge mx-auto mb-6">02</div>
              <h3 className="bauhaus-heading text-xl mb-4">TEACH</h3>
              <p className="uppercase text-xs tracking-wide leading-relaxed mb-6">
                LEAD WORKSHOPS OR CLASSES IN YOUR AREA OF EXPERTISE TO SHARE KNOWLEDGE WITH THE COMMUNITY
              </p>
              <Link href="#" className="btn-primary text-xs">
                APPLY NOW
              </Link>
            </div>
            
            <div className="card-border bg-white text-black p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="numbered-badge mx-auto mb-6">03</div>
              <h3 className="bauhaus-heading text-xl mb-4">PARTNER</h3>
              <p className="uppercase text-xs tracking-wide leading-relaxed mb-6">
                COLLABORATE WITH US ON PROJECTS, EVENTS, OR INITIATIVES THAT BENEFIT THE COMMUNITY
              </p>
              <Link href="#" className="btn-primary text-xs">
                CONTACT US
              </Link>
            </div>
            
            <div className="card-border bg-white text-black p-8 text-center hover:scale-105 transition-transform duration-200">
              <div className="numbered-badge mx-auto mb-6">04</div>
              <h3 className="bauhaus-heading text-xl mb-4">SUPPORT</h3>
              <p className="uppercase text-xs tracking-wide leading-relaxed mb-6">
                HELP US MAINTAIN AND IMPROVE OUR SPACE THROUGH DONATIONS OR RESOURCE SHARING
              </p>
              <Link href="#" className="btn-primary text-xs">
                SUPPORT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="card-border bg-white text-black p-8">
                <h3 className="bauhaus-heading text-lg mb-4">{item.question}</h3>
                <p className="uppercase text-sm tracking-wide leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="uppercase text-sm tracking-wide mb-8">
              DON'T SEE YOUR QUESTION? WE'RE HERE TO HELP.
            </p>
            <Link href="#" className="btn-secondary bg-white text-black hover:bg-black hover:text-white">
              ASK A QUESTION
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}