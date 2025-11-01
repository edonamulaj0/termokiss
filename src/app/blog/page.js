'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blogData from '../../data/blog-posts.json'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Calculate category counts from JSON data
  const categories = [
    { id: 'all', name: 'ALL STORIES', count: blogData.posts.length + 1 },
    { id: 'workshops', name: 'WORKSHOPS', count: blogData.posts.filter(p => p.category === 'workshops').length },
    { id: 'community', name: 'COMMUNITY', count: blogData.posts.filter(p => p.category === 'community').length },
    { id: 'culture', name: 'CULTURE', count: blogData.posts.filter(p => p.category === 'culture').length },
    { id: 'environment', name: 'ENVIRONMENT', count: blogData.posts.filter(p => p.category === 'environment').length }
  ]

  const featuredStory = blogData.featured
  const allPosts = blogData.posts

  const filteredPosts = selectedCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="geometric-shape top-16 right-16 w-32 h-32 bg-black transform rotate-45 mobile-hidden"></div>
        <div className="geometric-shape bottom-16 left-16 w-24 h-24 border-8 border-black mobile-hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title mb-8">COMMUNITY STORIES</h1>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12 max-w-4xl mx-auto">
            SHARING EXPERIENCES, INSIGHTS, AND UPDATES FROM OUR COMMUNITY-DRIVEN INITIATIVES
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">FEATURED STORY</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="card-border">
              <Image
                src={featuredStory.image}
                alt={featuredStory.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover grayscale-image"
              />
            </div>
            <div>
              <div className="numbered-badge mb-6">01</div>
              <h3 className="bauhaus-heading text-3xl mb-4">{featuredStory.title}</h3>
              <div className="flex items-center space-x-4 mb-6 text-sm uppercase tracking-wide">
                <span>{featuredStory.author}</span>
                <span>•</span>
                <span>{featuredStory.date}</span>
                <span>•</span>
                <span>{featuredStory.readTime}</span>
              </div>
              <p className="uppercase text-sm tracking-wide leading-relaxed mb-8">
                {featuredStory.excerpt}
              </p>
              <Link href={`/blog/${featuredStory.id}`} className="btn-secondary bg-white text-black hover:bg-black hover:text-white">
                READ FULL STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 border-4 border-black font-black uppercase text-sm tracking-wide transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-black hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="card-border bg-white hover:scale-105 transition-transform duration-200">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover grayscale-image"
                  />
                  <div className="numbered-badge absolute top-4 left-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="bauhaus-heading text-lg mb-3">{post.title}</h3>
                  <div className="flex items-center space-x-2 mb-4 text-xs uppercase tracking-wide opacity-80">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="uppercase text-xs tracking-wide leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="btn-primary text-xs">
                    READ MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-8">STAY UPDATED</h2>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12">
            SUBSCRIBE TO OUR NEWSLETTER FOR WEEKLY UPDATES ON COMMUNITY ACTIVITIES AND STORIES
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" data-netlify="true" name="newsletter">
            <input type="hidden" name="form-name" value="newsletter" />
            <input
              type="email"
              placeholder="YOUR.EMAIL@EXAMPLE.COM"
              className="flex-1 px-6 py-4 border-4 border-white bg-black text-white font-bold uppercase text-sm tracking-wide placeholder:text-gray-400 placeholder:uppercase"
              required
            />
            <button type="submit" className="btn-secondary bg-white text-black hover:bg-black hover:text-white border-white">
              SUBSCRIBE
            </button>
          </form>
          
          <p className="uppercase text-xs tracking-wide mt-8 opacity-80">
            NO SPAM, UNSUBSCRIBE ANYTIME. YOUR EMAIL STAYS PRIVATE.
          </p>
        </div>
      </section>
    </div>
  )
}