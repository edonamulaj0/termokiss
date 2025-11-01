import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white border-4 border-white flex items-center justify-center">
                <span className="text-black font-black text-xl">T</span>
              </div>
              <span className="bauhaus-heading text-2xl">TERMOKISS</span>
            </div>
            <p className="uppercase text-sm tracking-wide leading-relaxed">
              URBAN AND CIVIL EXCHANGE, REFLECTION AND CHANGEMAKING IN PRISHTINA, KOSOVO. 
              A COMMUNITY-DRIVEN, NON-PROFIT SPACE FOR EDUCATION, COOPERATION, AND MUTUAL AID.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-12 h-12 border-4 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
                <span className="font-black text-lg">F</span>
              </a>
              <a href="#" className="w-12 h-12 border-4 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
                <span className="font-black text-lg">@</span>
              </a>
              <a href="#" className="w-12 h-12 border-4 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200">
                <span className="font-black text-sm">IN</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="bauhaus-heading text-xl mb-6">QUICK LINKS</h3>
            <nav className="space-y-4">
              <Link href="/about" className="block uppercase text-sm tracking-wide hover:underline">
                ABOUT US
              </Link>
              <Link href="/activities" className="block uppercase text-sm tracking-wide hover:underline">
                ACTIVITIES
              </Link>
              <Link href="/events" className="block uppercase text-sm tracking-wide hover:underline">
                EVENTS
              </Link>
              <Link href="/blog" className="block uppercase text-sm tracking-wide hover:underline">
                BLOG
              </Link>
              <Link href="/contact" className="block uppercase text-sm tracking-wide hover:underline">
                CONTACT
              </Link>
            </nav>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="bauhaus-heading text-xl mb-6">GET INVOLVED</h3>
            <nav className="space-y-4">
              <Link href="/contact" className="block uppercase text-sm tracking-wide hover:underline">
                VOLUNTEER
              </Link>
              <Link href="/contact" className="block uppercase text-sm tracking-wide hover:underline">
                PARTNER WITH US
              </Link>
              <Link href="/contact" className="block uppercase text-sm tracking-wide hover:underline">
                DONATE
              </Link>
              <Link href="/blog" className="block uppercase text-sm tracking-wide hover:underline">
                NEWSLETTER
              </Link>
              <Link href="/activities" className="block uppercase text-sm tracking-wide hover:underline">
                WORKSHOPS
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-4 border-white pt-8">
          <p className="uppercase text-sm tracking-wide text-center">
            © 2025 TERMOKISS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}