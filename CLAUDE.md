# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, interactive portfolio website for Christophe Mostefaoui, showcasing web development skills and projects. The site features a cyberpunk-inspired design with advanced animations and responsive layout.

**Technology Stack:**
- **Framework**: Astro v5 with React integration
- **Frontend**: HTML5, CSS3, TypeScript
- **Interactive Components**: React components with TypeScript
- **Animations**: GSAP (GreenSock) with ScrollTrigger, AOS (Animate On Scroll)  
- **External APIs**: YouTube Embed API, Chatbase chatbot
- **Icons**: Font Awesome
- **Build System**: Vite (integrated with Astro)
- **Hosting**: Static build compatible with any hosting provider

## Architecture and File Structure

### Core Files:
- `src/pages/index.astro` - Main portfolio page entry point
- `src/layouts/Layout.astro` - Global layout with SEO and scripts
- `src/styles/style.css` - Complete styling with cyberpunk theme and responsive design
- `src/data/projects.ts` - TypeScript data for projects management

### Component Structure:
- `src/components/Navigation.astro` - Navigation bar with mobile menu
- `src/components/Hero.astro` - Hero section with radial presentation
- `src/components/Projects.astro` - Projects section wrapper
- `src/components/ProjectCard.astro` - Individual project cards
- `src/components/AudioPlayer.tsx` - React audio player component

### Assets Organization:
- `public/images/` - Portfolio images, project screenshots, logos
- `public/docs/` - PDF documents (CV, project documentation, diploma)
- `public/video/` - Video content for hero section  
- `public/audio/` - Podcast audio files

### Key Sections Architecture:
1. **Hero Section** - Video background, radial presentation cards layout
2. **Timeline** - Professional journey with alternating layout
3. **Skills** - Technology logos grid with hover effects
4. **Projects** - Card grid with dropdown menus and audio players
5. **Articles** - LinkedIn article cards
6. **Contact** - Contact information with futuristic styling

## Development Commands

This project now uses **Astro** with React components for interactivity:

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run astro check
```

## Key Features and Functionality

### Interactive Elements:
- **Radial Presentation Layout** - Central photo with connected information cards
- **Project Dropdowns** - Expandable project details with links and audio players
- **Video Modal** - YouTube integration with privacy-friendly embed
- **Diploma Viewer** - Full-screen image display with smooth animations
- **Custom Audio Player** - Podcast playback with custom controls
- **Star Animation** - Background particle system (optimized for performance)
- **Smooth Scrolling** - GSAP-powered navigation with offset handling

### Responsive Design:
- Mobile-first approach with burger menu
- Breakpoints: 576px, 768px, 992px, 1200px, 1400px
- Adaptive layouts for timeline, radial sections, and project grids
- Optimized touch interactions for mobile devices

### Performance Optimizations:
- Lazy loading for images and videos
- Efficient star animation system (150 elements total)
- Modular JavaScript with IIFE pattern
- YouTube nocookie domain for privacy
- Optimized media queries and CSS grid/flexbox

## Important Code Patterns

### JavaScript Module Structure:
The main.js uses an IIFE (Immediately Invoked Function Expression) pattern with discrete functions:
- `setupNav()` - Navigation and mobile menu
- `createStars()` - Background animation
- `setupScrollBehavior()` - Smooth scrolling with GSAP
- `setupDropdowns()` - Project detail expansion
- `setupAudioPlayers()` - Custom audio controls
- `setupVideoPlayer()` - YouTube modal integration

### CSS Architecture:
- CSS Custom Properties for consistent theming
- Cyberpunk color scheme: `#00ffff` (cyan), `#7f00ff` (purple), `#0a0a2e` (dark blue)
- Modular sections with consistent spacing and responsive patterns
- Advanced animations using keyframes and CSS transforms

### Animation System:
- GSAP for smooth scrolling and element animations
- AOS for scroll-triggered animations (disabled in radial section)
- Custom CSS animations for stars, glows, and hover effects
- Performance-optimized with `will-change` and `transform3d`

## Content Management

### Adding New Projects:
Projects follow a consistent card structure in the HTML. Each project card includes:
- Image container with overlay
- Tech tags array
- Description text
- Dropdown with links (GitHub, live site, documentation, videos)
- Optional audio player integration

### Updating Personal Information:
- Contact details in the contact section
- Professional timeline in the about section
- Tech stack logos in the skills section
- Social media links in the hero section

## External Dependencies

- **GSAP**: Animation library loaded from CDN
- **AOS**: Scroll animations from CDN
- **Font Awesome**: Icons from CDN
- **Chatbase**: Embedded chatbot widget
- **Google Fonts**: Orbitron and Poppins fonts

## Browser Compatibility

The site uses modern CSS features and ES6+ JavaScript. Target browsers:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with modern standards support

## SEO and Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- Meta tags for Open Graph and Twitter Card
- Alt text for all images
- ARIA labels for interactive elements
- Skip navigation link for accessibility
- High contrast ratios (AAA level)
- Keyboard navigation support