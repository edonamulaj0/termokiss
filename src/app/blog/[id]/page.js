import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import blogData from '../../../data/blog-posts.json'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const allPosts = [blogData.featured, ...blogData.posts]
  return allPosts.map((post) => ({
    id: post.id,
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const post = getPost(params.id)
  if (!post) {
    return {
      title: 'Post Not Found - Termokiss',
    }
  }
  
  return {
    title: `${post.title} - Termokiss Blog`,
    description: post.excerpt,
  }
}

function getPost(id) {
  if (id === blogData.featured.id) {
    return blogData.featured
  }
  return blogData.posts.find(post => post.id === id)
}

function getRelatedPosts(currentPost) {
  return blogData.posts
    .filter(post => 
      post.id !== currentPost.id && 
      post.category === currentPost.category
    )
    .slice(0, 3)
}

export default function BlogPost({ params }) {
  const post = getPost(params.id)
  
  if (!post) {
    notFound()
  }
  
  const relatedPosts = getRelatedPosts(post)
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="geometric-shape top-20 right-20 w-32 h-32 bg-black mobile-hidden"></div>
        <div className="geometric-shape bottom-20 left-20 w-24 h-24 border-8 border-black transform rotate-45 mobile-hidden"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="uppercase text-sm tracking-wide hover:underline">
              ← BACK TO STORIES
            </Link>
          </nav>
          
          {/* Post Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-black text-white px-4 py-2 uppercase text-xs tracking-wide mb-6">
              {post.category}
            </div>
            <h1 className="bauhaus-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm uppercase tracking-wide">
              <span className="font-bold">BY {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="card-border mb-12">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={600}
              className="w-full h-96 md:h-[500px] object-cover grayscale-image"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="uppercase text-sm tracking-wide leading-relaxed mb-8">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Tags */}
          {post.tags && (
            <div className="mt-12 pt-8 border-t-4 border-white">
              <h3 className="bauhaus-heading text-xl mb-4">TAGS</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-white text-black px-4 py-2 uppercase text-xs tracking-wide font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-16">RELATED STORIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <div key={relatedPost.id} className="card-border bg-white hover:scale-105 transition-transform duration-200">
                  <div className="relative">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover grayscale-image"
                    />
                    <div className="numbered-badge absolute top-4 left-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="bg-black text-white inline-block px-3 py-1 text-xs uppercase tracking-wide mb-4">
                      {relatedPost.category}
                    </div>
                    <h3 className="bauhaus-heading text-lg mb-3">{relatedPost.title}</h3>
                    <div className="flex items-center space-x-2 mb-4 text-xs uppercase tracking-wide opacity-80">
                      <span>{relatedPost.author}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <p className="uppercase text-xs tracking-wide leading-relaxed mb-6">
                      {relatedPost.excerpt}
                    </p>
                    <Link href={`/blog/${relatedPost.id}`} className="btn-primary text-xs">
                      READ STORY
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-8">JOIN THE CONVERSATION</h2>
          <p className="text-xl font-bold uppercase tracking-extra-wide mb-12">
            SHARE YOUR STORY, JOIN OUR ACTIVITIES, OR START A NEW INITIATIVE AT TERMOKISS
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-black hover:bg-black hover:text-white">
              SHARE YOUR STORY
            </Link>
            <Link href="/activities" className="btn-secondary bg-white text-black hover:bg-black hover:text-white">
              JOIN ACTIVITIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}