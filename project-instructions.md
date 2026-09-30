# Project Instructions - Ιατρική Αποκατάστασης Website

## Overview

We are building a modern, professional medical website for Dr. Stavros N. Dimitrakopoulos, a rehabilitation physician in Ilioupoli, Greece. The site will be an upgrade from the existing https://www.iatriki-apokatastasi.gr/, using modern technologies and improved user experience.

## Technology Stack

- Next.js 15 with App Router
- TypeScript with strict mode
- Tailwind CSS v4
- shadcn/ui components
- Framer Motion for animations
- React Markdown for blog posts

## Design Requirements

- **Primary Color**: Cyan (#06b6d4)
- **Language**: Greek only
- **Style**: Professional, clean, modern, and user-friendly
- **Components**: Use shadcn/ui components (Button, Card, Sheet)
- **Typography**: Roboto font with Greek subset

## Site Structure

### 1. Homepage (/) ✅ IMPLEMENTED

The homepage includes the following sections:

#### Header ✅

- Modern responsive navigation bar
- Desktop navigation with smooth scrolling to sections
- Mobile navigation using shadcn Sheet component
- Navigation links: Αρχική, Βιογραφικό, Υπηρεσίες, Επιστημονικά Άρθρα, Gallery, FAQs, Επικοινωνία
- CTA button: "Κλείστε Ραντεβού" that scrolls to contact form

#### Hero Section ✅

- Professional image path: /images/hero-image.webp
- Animated stat cards displaying:
  - Years of Experience (dynamically calculated from START_YEAR)
  - 10,000+ Satisfied Clients
  - ΕΟΠΥΥ Partnership checkmark
- "Κλείστε Ραντεβού" button scrolls to contact form
- "Δείτε τις Υπηρεσίες μας" links to services

#### About Section ✅

- Brief introduction to Dr. Dimitrakopoulos
- Professional photo at /images/doctor-portrait.jpg
- Key qualifications with CircleIcon components
- Bullet points for specializations
- Link to full CV/Resume page

#### Services Section ✅

- Grid layout of 6 main services
- ServiceCard components with CircleIcon
- Hover effects and animations
- "Δείτε όλες τις υπηρεσίες" button

#### Blog Section (Επιστημονικά Άρθρα) ✅

- Shows latest 3 blog posts in card format
- BlogCard components with date, reading time, excerpt
- "Δείτε όλα τα άρθρα" link to /blogs

#### Testimonials Section ✅

- Grid of patient testimonials
- TestimonialCard components with star ratings
- Static testimonials from general.ts

#### Contact Section ✅

- Appointment booking form with fields:
  - Name, Phone, Email, Service selection, Date, Message
- Contact information sidebar with:
  - Address with Google Maps link
  - Phone numbers (primary and secondary)
  - Email
  - Working hours
- Google Maps embed
- Form submission simulation

#### Footer ✅

- Multi-column layout with:
  - About section with social media links
  - Quick links navigation
  - Services list (first 5)
  - Contact information
- Copyright: © Copyright {year} Δρ. Σταύρος Ν. Δημητρακόπουλος
- Credit: Made by Nikos Dimitrakopoulos

### 2. Blog System (/blogs) ✅ IMPLEMENTED

- Blog listing page at /blogs
- Individual blog posts at /blogs/[slug]
- Markdown rendering with react-markdown
- Blog posts stored in lib/blogs/posts/
- Sample posts created:
  - prolotherapia.md
  - chronic-pain-management.md
- Frontmatter support with gray-matter
- Static generation with generateStaticParams

### 3. Resume/CV Page (/resume) 🚧 TODO

- Comprehensive professional background
- Education history
- Credentials and certifications
- Professional experience timeline

### 4. Services Page (/services) 🚧 TODO

- Detailed information for each service
- Individual service pages or sections

### 5. Gallery Page (/gallery) 🚧 TODO

- Grid layout for images and videos
- Categories for different types of media
- Lightbox functionality

### 6. FAQs Page (/faqs) 🚧 TODO

- Common questions about treatments
- Accordion-style layout

### 7. Privacy Policy Page (/privacy) 🚧 TODO

- Patient data protection information
- GDPR compliance

## Data Structure

### General Information (`lib/general.ts`) ✅

Enhanced with:

- START_YEAR constant (1987)
- getYearsOfExperience() function
- Complete services array with IDs and descriptions
- Navigation links
- Contact information
- Working hours
- Stats for hero section
- Testimonials data

### Components Created ✅

1. **Header** - Responsive navigation with mobile Sheet
2. **HeroSection** - Hero with animated stat cards
3. **AboutSection** - Doctor introduction
4. **ServicesSection** - Services grid
5. **ServiceCard** - Individual service card
6. **BlogSection** - Blog posts preview
7. **BlogCard** - Individual blog card
8. **TestimonialsSection** - Testimonials grid
9. **TestimonialCard** - Individual testimonial
10. **ContactSection** - Contact form and info
11. **Footer** - Site footer with all links
12. **CircleIcon** - Reusable icon component

## Smooth Scrolling Implementation ✅

- All homepage sections have IDs
- Header navigation scrolls smoothly to sections
- Appointment buttons scroll to contact form
- Works on both desktop and mobile

## Mobile Responsiveness ✅

- Header uses Sheet component for mobile menu
- All sections responsive with grid breakpoints
- Touch-friendly interactions

## Required Packages Installed ✅

- `framer-motion` - Animations
- `react-markdown` - Markdown rendering
- `gray-matter` - Frontmatter parsing
- `remark-gfm` - GitHub flavored markdown
- `react-icons` - Icon library
- `lucide-react` - Icon components
- shadcn components: Button, Card, Sheet

## Linting and Formatting

- Run `npm run lint` to check for ESLint errors
- Run `npm run typecheck` for TypeScript validation
- Follow existing code style and conventions

## Development Priorities

### Completed ✅

1. Basic layout and navigation
2. Homepage with all sections
3. Blog system with markdown support
4. Contact form
5. Mobile responsiveness
6. Smooth scrolling
7. Footer with correct information

### Remaining Tasks 🚧

1. Create /resume page with full CV
2. Create /services page with detailed information
3. Create /gallery page structure
4. Create /faqs page
5. Create /privacy page
6. Add actual appointment booking functionality
7. SEO optimization (meta tags, structured data)
8. Performance optimization
9. Add more blog posts
10. Implement actual form submission

## Key Features Implemented

- Modern, clean design with cyan color scheme
- Excellent mobile responsiveness
- Smooth scrolling navigation
- Dynamic years of experience calculation
- Markdown-based blog system
- Animated components with Framer Motion
- Professional medical tone throughout
- All content in Greek language
- shadcn/ui components for consistency

## Notes

- Images referenced but need to be added:
  - /images/hero-image.webp
  - /images/doctor-portrait.jpg
  - /images/clinic-exterior.jpg
- Form submission currently simulated (needs backend)
- Google Maps embed uses placeholder location
