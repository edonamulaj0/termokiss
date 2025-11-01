# TERMOKISS - Community Center Website

A Next.js 14+ website for Termokiss, a community-run center in Prishtina, Kosovo, featuring a Bauhaus-inspired black and white design aesthetic.

## About Termokiss

Termokiss is a community-driven, non-profit center focused on urban and civil exchange, reflection and changemaking. Born from the collective effort of 45 volunteers who revitalized an abandoned TermoKos heating plant building in 2016, it has grown into a thriving community hub.

## Design Principles

- **Bauhaus Aesthetic**: Geometric shapes, clean lines, and functional design
- **Black & White Palette**: Strict monochromatic color scheme (#000000, #FFFFFF)
- **Bold Typography**: All uppercase text with wide letter-spacing and heavy font weights (700-900)
- **Grid-Based Layouts**: Structured, geometric arrangement of elements
- **4px Borders**: Consistent thick black borders on all elements
- **Numbered Hierarchy**: Organizational system using 01, 02, 03... throughout
- **Grayscale Images**: All photos filtered to maintain aesthetic consistency

## Technical Stack

- **Next.js 14+** with App Router
- **Tailwind CSS** for styling
- **No TypeScript or ESLint** (as specified)
- **Inter Font Family** for typography
- **next/image** for optimized images with grayscale filters
- **Mobile-first responsive design**

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with header/footer
│   ├── globals.css        # Global styles and Bauhaus design system
│   ├── page.js           # Homepage
│   ├── about/page.js     # About page
│   ├── activities/page.js # Activities page
│   ├── events/page.js    # Events page (with tabs)
│   ├── blog/page.js      # Blog page
│   └── contact/page.js   # Contact page (with form)
└── components/
    ├── Header.js         # Navigation with mobile menu
    └── Footer.js         # Footer with links and social media
```

## Pages Overview

1. **Homepage (/)**: Hero section, mission, featured activities, upcoming events
2. **About (/about)**: Story, values, team, volunteer CTA
3. **Activities (/activities)**: 6 activity categories with detailed descriptions
4. **Events (/events)**: Tabbed interface for upcoming/past events
5. **Blog (/blog)**: Featured stories, category filters, newsletter signup
6. **Contact (/contact)**: Contact info, map, form, FAQ section

## Key Features

- **Mobile-responsive navigation** with hamburger menu
- **Interactive tabs** on events page
- **Contact form** with validation
- **Geometric decorative elements** that hide on mobile
- **Hover effects** with scale transforms
- **Consistent numbered badges** throughout
- **Black/white section alternation** for visual rhythm

## Design System Classes

```css
.btn-primary          /* Black background, white text, hover scale */
.btn-secondary        /* White background, black text, color inversion on hover */
.bauhaus-heading      /* Font-black, uppercase, tight tracking */
.geometric-shape      /* Absolute positioned decorative elements */
.section-padding      /* Consistent py-20 spacing */
.card-border          /* 4px black borders */
.numbered-badge       /* Black squares with white numbers */
.grayscale-image      /* Grayscale filter on all images */
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Content Guidelines

All content follows Termokiss values:
- **Community-driven**: Activities determined by community needs and volunteer skills
- **Inclusive**: Space for all voices and perspectives
- **Educational**: Focus on learning and skill sharing
- **Social Change**: Promoting reflection and changemaking through urban and civil exchange
- **Mutual Aid**: Cooperation and support within the community

## Browser Support

Optimized for modern browsers with CSS Grid and Flexbox support. Mobile-first responsive design ensures compatibility across devices.

## Contributing

This website reflects the community-driven nature of Termokiss. Contributions should maintain the Bauhaus design principles and black/white aesthetic while serving the community's needs.