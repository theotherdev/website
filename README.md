# The Other Dev - Creative Software Agency

A modern, multilingual portfolio website for The Other Dev creative software agency, built with Astro.js and featuring smooth animations, responsive design, and comprehensive project showcases.

## ✨ Features

- **🌍 Multilingual Support**: Available in English, German, and Urdu
- **🎨 Smooth Animations**: GSAP-powered animations and scroll effects
- **📱 Fully Responsive**: Optimized for all screen sizes
- **⚡ Performance Optimized**: Built with Astro for lightning-fast loading
- **🎯 SEO Friendly**: Comprehensive meta tags, structured data, and sitemaps
- **📧 Newsletter Integration**: Email subscription with Nodemailer
- **🖼️ Dynamic Galleries**: Interactive carousels and image showcases
- **🔧 Component Library**: Reusable UI components with Tailwind CSS
- **📊 Analytics Ready**: Google Analytics and Facebook Pixel integration

## 🛠️ Tech Stack

- **Frontend**: [Astro.js](https://astro.build/) with React components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **Animations**: [GSAP](https://greensock.com/gsap/) with ScrollTrigger
- **Language**: TypeScript
- **Deployment**: [Vercel](https://vercel.com/)
- **Email**: Nodemailer for newsletter functionality
- **Icons**: Lucide React

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Bun (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-new
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure the following variables:
   ```env
   STORAGE_CLIENT=your_storage_client_url
   KABEERCLOUD_BUCKET=your_bucket_name
   SMTP_HOST=your_smtp_host
   SMTP_USERNAME=your_smtp_username
   SMTP_PASSWORD=your_smtp_password
   NOTIFICATION_EMAIL=your_notification_email
   ```

4. **Start development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Available Scripts

```bash
# Start development server with Bun
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run Astro CLI commands
bun run astro
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Carousel.astro  # Image carousel component
│   ├── Navigation.astro # Site navigation
│   └── Footer.astro    # Site footer
├── data/               # Content data (multilingual)
│   ├── en/            # English content
│   ├── de/            # German content
│   └── ur/            # Urdu content
├── i18n/              # Internationalization utilities
├── layouts/           # Page layouts
├── pages/             # File-based routing
│   ├── [locale]/      # Localized pages
│   ├── api/           # API endpoints
│   └── work/          # Project showcase pages
├── styles/            # Global styles
└── lib/               # Utility functions
```

## 🌐 Internationalization

The website supports three languages:

- **English** (`en`) - Default language
- **German** (`de`) - `/de/`
- **Urdu** (`ur`) - `/ur/`

### Adding New Languages

1. Create new data files in `src/data/[locale]/`
2. Add language to `astro.config.mjs`
3. Update `src/i18n/ui.ts` with translations
4. Create corresponding page files

### Content Management

All content is managed through JSON files in the `src/data/` directory:

- `projects.json` - Portfolio projects
- `services.json` - Service offerings  
- `seo.json` - SEO metadata

## 🎨 Styling & Design

- **Design System**: Custom CSS variables and Tailwind utilities
- **Typography**: Custom fonts (QueensCompressed, TWKLausanne)
- **Colors**: Stone palette with custom brand colors
- **Animations**: GSAP with ScrollSmoother and custom triggers
- **Responsive**: Mobile-first approach with lg+ breakpoints

### Key Design Components

- Dynamic underline effects
- Custom cursor states
- Smooth scroll effects
- Parallax scrolling
- Interactive shape animations

## 📧 Newsletter Integration

The newsletter subscription uses:

- **Frontend**: React component with GSAP animations
- **Backend**: API route (`/api/subscribe`) with Nodemailer
- **Storage**: Custom cloud storage client
- **Validation**: Email format validation

## 🔧 Configuration

### Astro Configuration

Key configuration in `astro.config.mjs`:

- **Output**: Static site generation
- **Integrations**: React, Sitemap, Robots.txt
- **i18n**: Multi-language routing
- **Adapter**: Vercel deployment

### Tailwind Configuration

Custom configuration extends default Tailwind with:

- Design system spacing
- Typography scale
- Custom utilities

## 🚀 Deployment

The project is configured for Vercel deployment:

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push to main

### Build Configuration

- **Framework**: Astro
- **Output Directory**: `dist/`
- **Install Command**: `bun install`
- **Build Command**: `bun run build`

## 📊 Analytics & Tracking

Integrated analytics:

- **Google Analytics**: GA4 tracking
- **Facebook Pixel**: Conversion tracking
- **Performance**: Web Vitals monitoring

## 🎬 Animation Implementation

### GSAP Integration

The site uses GSAP for sophisticated animations:

```javascript
// ScrollSmoother for smooth scrolling
ScrollSmoother.create({
  smooth: 2,
  speed: 2,
  effects: true,
  smoothTouch: 0.1,
});

// ScrollTrigger for scroll-based animations
ScrollTrigger.create({
  trigger: ".element",
  start: "top 80%",
  end: "bottom 20%",
  scrub: true,
  animation: gsap.to(".element", { x: 100 })
});
```

### Animation Features

- **Smooth Scrolling**: Custom ScrollSmoother implementation
- **Parallax Effects**: Data-speed attributes for parallax scrolling
- **Page Transitions**: Curtain-style transitions between pages
- **Hover Effects**: Dynamic underlines and shape interactions
- **Loading States**: Animated preloader with custom SVG
- **Mobile Optimizations**: Touch-friendly animations

### Custom Animations

- **Shape Cycling**: Rotating SVG shapes on homepage
- **Carousel Navigation**: Custom carousel with arrow cursors
- **Text Reveals**: Staggered text animations
- **Image Slideshows**: Scroll-triggered image galleries
- **Navigation States**: Animated mobile menu

## 📦 Component Documentation

### Core Components

#### `<Carousel />`
Interactive image carousel with custom navigation:

```astro
<Carousel 
  carouselId="unique-id"
  images={imageArray}
  imageClasses="custom-classes"
/>
```

**Props:**
- `carouselId`: Unique identifier for the carousel
- `images`: Array of image URLs
- `imageClasses`: CSS classes for styling images

#### `<Navigation />`
Responsive navigation with mobile menu:

- **Desktop**: Horizontal navigation with dynamic underlines
- **Mobile**: Full-screen overlay menu with animations
- **Features**: Language switching, live clock, blend modes

#### `<SEO />`
Dynamic SEO component for meta tags:

```astro
<SEO pageName="about" />
```

Automatically generates:
- Page-specific meta tags
- Open Graph tags
- Twitter Card data
- Structured data (JSON-LD)

#### `<Shapes />`
Interactive SVG shape animation system:

- **Cycling Animation**: Automatic shape rotation
- **Click Interactions**: Manual navigation
- **Link Integration**: Shapes link to projects
- **Mobile Responsive**: Scaled appropriately

### UI Components

#### `<Accordion />`
Collapsible content sections:

```astro
<Accordion 
  id="unique-id"
  items={accordionItems}
/>
```

#### `<Clock />`
Real-time clock component:

- **Timezone**: Asia/Karachi
- **Format**: 12-hour with AM/PM
- **Updates**: Every second
- **Styling**: Tabular numbers

### Layout Components

#### `<Layout />`
Main layout wrapper with:

- **Noise Background**: SVG noise filter
- **Scroll Container**: ScrollSmoother integration
- **Meta Tags**: Comprehensive SEO
- **Analytics**: GA4 and Facebook Pixel

#### `<Footer />`
Newsletter subscription and contact info:

- **Newsletter Form**: Email validation and submission
- **Contact Details**: Phone, email, locations
- **Social Links**: LinkedIn, Instagram
- **Animations**: GSAP-powered reveals

## ⚡ Performance Optimization

### Core Web Vitals

Optimization strategies implemented:

#### Largest Contentful Paint (LCP)
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: Font-display: swap
- **Critical CSS**: Inline critical styles
- **Resource Hints**: Preconnect to external domains

#### First Input Delay (FID)
- **Code Splitting**: Dynamic imports for heavy libraries
- **Service Workers**: Background processing
- **Event Delegation**: Efficient event handling
- **Debounced Inputs**: Optimized form interactions

#### Cumulative Layout Shift (CLS)
- **Image Dimensions**: Explicit width/height attributes
- **Font Metrics**: Consistent font loading
- **Animation Optimization**: Transform-based animations
- **Skeleton Loading**: Placeholder content

### Astro Optimizations

- **Static Generation**: Pre-rendered HTML
- **Partial Hydration**: Islands architecture
- **Component Islands**: Selective React hydration
- **Asset Optimization**: Automatic image optimization

### Custom Optimizations

```javascript
// Lazy loading implementation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Load content
    }
  });
});

// Image compression
const optimizedImages = images.map(img => ({
  src: img.src,
  srcSet: generateSrcSet(img),
  sizes: "(max-width: 768px) 100vw, 50vw"
}));
```

### Bundle Optimization

- **Tree Shaking**: Remove unused code
- **CSS Purging**: Remove unused styles
- **Image Compression**: Optimized WebP/AVIF
- **Script Optimization**: Minification and compression

## 🧪 Testing Strategies

### Manual Testing Checklist

#### Cross-Browser Testing
- [x] Chrome (latest)
- [x] Firefox (latest)
- [x] Safari (latest)
- [x] Edge (latest)
- [x] Mobile Safari (iOS)
- [x] Chrome Mobile (Android)

#### Device Testing
- [x] Desktop (1920x1080+)
- [x] Laptop (1366x768)
- [x] Tablet (768x1024)
- [x] Mobile (375x667)
- [x] Large Mobile (414x896)

#### Functionality Testing
- [x] Navigation (all languages)
- [x] Newsletter subscription
- [x] Contact forms
- [x] Image carousels
- [x] Animation performance
- [x] Language switching

### Performance Testing

#### Lighthouse Scores
Target scores:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

#### Core Web Vitals Testing
```bash
# Install testing tools
npm install -g @web/test-runner lighthouse

# Run performance audit
lighthouse https://otherdev.com --output=json

# Test Core Web Vitals
web-test-runner --config web-test-runner.config.js
```

### Accessibility Testing

#### WCAG Compliance
- **Level AA**: Target compliance level
- **Screen Readers**: NVDA, JAWS, VoiceOver testing
- **Keyboard Navigation**: Tab order and focus management
- **Color Contrast**: 4.5:1 minimum ratio

#### Testing Tools
- **axe-core**: Automated accessibility testing
- **Lighthouse**: Accessibility audit
- **WAVE**: Web accessibility evaluation
- **Color Oracle**: Color blindness simulation

### SEO Testing

#### Technical SEO
- **Structured Data**: Schema.org validation
- **Meta Tags**: Complete and unique
- **XML Sitemaps**: Multi-language sitemaps
- **Robots.txt**: Proper crawling directives

#### Tools Used
- **Google Search Console**: Performance monitoring
- **SEMrush**: SEO analysis
- **Screaming Frog**: Technical SEO audit
- **Rich Results Test**: Structured data validation

## 🚨 Error Handling

### Error Boundaries

```typescript
// Global error handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Send to analytics
});

// Promise rejection handling
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
```

### Form Validation

```typescript
// Email validation
const validateEmail = (email: string): boolean => {
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
};

// Newsletter subscription error handling
try {
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email })
  });
  
  if (!response.ok) {
    throw new Error(await response.text());
  }
} catch (error) {
  showErrorMessage(error.message);
}
```

### 404 Handling

Custom 404 pages for each language:
- `/404.astro` (English)
- `/de/404.astro` (German)  
- `/ur/404.astro` (Urdu)

## 🔧 Advanced Configuration

### Environment Variables

```env
# Storage Configuration
STORAGE_CLIENT=https://your-storage-api.com
KABEERCLOUD_BUCKET=your-bucket-name

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
NOTIFICATION_EMAIL=notifications@otherdev.com

# Analytics
GA_TRACKING_ID=G-XXXXXXXXXX
FB_PIXEL_ID=1234567890123456
```

### Astro Configuration Deep Dive

```javascript
// astro.config.mjs
export default defineConfig({
  site: "https://www.otherdev.com",
  compressHTML: true,
  output: 'static',
  
  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap'],
            'react': ['react', 'react-dom']
          }
        }
      }
    }
  },

  // Internationalization
  i18n: {
    locales: ["en", "de", "ur"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Integrations
  integrations: [
    react({
      experimentalReactChildren: true
    }),
    robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          de: "de-DE",
          ur: "ur-PK",
        },
      },
    }),
  ],
});
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Custom spacing system
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem'
      },
      
      // Typography scale
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem'
      },
      
      // Custom colors
      colors: {
        'stone-400-inverted': '#575d61',
      },
      
      // Animation utilities
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'rotate': 'rotate 1s linear infinite',
      },
      
      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
```

## 🗂️ File Organization

### Naming Conventions

#### Components
- **PascalCase**: `ComponentName.astro`
- **Descriptive**: Clear, purposeful names
- **Organized**: Grouped by functionality

#### Files and Folders
- **kebab-case**: `file-name.astro`
- **Logical grouping**: Related files together
- **Clear hierarchy**: Nested appropriately

#### CSS Classes
- **BEM methodology**: `.block__element--modifier`
- **Utility-first**: Tailwind CSS approach
- **Semantic naming**: Meaningful class names

### Import Organization

```typescript
// External libraries (top)
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// Internal utilities
import { getLangFromUrl } from "@/i18n/utils";

// Components (alphabetical)
import Footer from "@/components/Footer.astro";
import Navigation from "@/components/Navigation.astro";
import SEO from "@/components/SEO.astro";

// Data imports (last)
import projects from "@/data/en/projects.json";
```

## 🔐 Security Considerations

### Input Validation

```typescript
// Email validation
const validateEmail = (email: string): boolean => {
  if (!email || email.length > 254) return false;
  return /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
};

// XSS Prevention
const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};
```

### Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;
               connect-src 'self' https://www.google-analytics.com;">
```

### Environment Security

- **Sensitive Data**: Environment variables only
- **API Keys**: Server-side only
- **HTTPS**: Enforced in production
- **CORS**: Properly configured

## 📈 Monitoring & Analytics

### Performance Monitoring

```javascript
// Core Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Error Tracking

```javascript
// Error reporting
window.addEventListener('error', (event) => {
  gtag('event', 'exception', {
    description: event.error?.message || 'Unknown error',
    fatal: false
  });
});
```

### Analytics Events

```javascript
// Custom event tracking
const trackNewsletterSignup = (email: string) => {
  gtag('event', 'sign_up', {
    method: 'newsletter',
    email_hash: btoa(email)
  });
};

const trackProjectView = (projectName: string) => {
  gtag('event', 'page_view', {
    page_title: projectName,
    page_location: window.location.href
  });
};
```

## 🚀 Deployment & DevOps

### Vercel Configuration

```json
{
  "framework": "astro",
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "installCommand": "bun install",
  "devCommand": "bun run dev",
  "env": {
    "NODE_VERSION": "18"
  }
}
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      
      - name: Install dependencies
        run: bun install
        
      - name: Run tests
        run: bun run test
        
      - name: Build project
        run: bun run build
        
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### Performance Budget

```json
{
  "budget": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kb",
      "maximumError": "4kb"
    }
  ]
}
```

## 🔍 Debugging & Development Tools

### Debug Configuration

```javascript
// Debug mode detection
const DEBUG = import.meta.env.DEV;

// Console styling
const log = {
  info: (msg) => DEBUG && console.log(`%c${msg}`, 'color: blue'),
  warn: (msg) => DEBUG && console.warn(`%c${msg}`, 'color: orange'),
  error: (msg) => console.error(`%c${msg}`, 'color: red')
};

// Performance timing
const timer = {
  start: (label) => DEBUG && console.time(label),
  end: (label) => DEBUG && console.timeEnd(label)
};
```

### Development Utilities

```javascript
// Grid overlay toggle
const toggleGrid = () => {
  const grid = document.querySelector('.grid-overlay');
  grid.style.display = grid.style.display === 'none' ? 'block' : 'none';
};

// Animation debugging
const debugAnimations = () => {
  gsap.globalTimeline.timeScale(0.1); // Slow motion
};

// Responsive testing
const testBreakpoints = () => {
  const breakpoints = [375, 768, 1024, 1440];
  breakpoints.forEach(width => {
    setTimeout(() => {
      window.resizeTo(width, 800);
    }, 1000);
  });
};
```

## 📚 Additional Resources

### Learning Resources
- [Astro Documentation](https://docs.astro.build/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

### Design Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)
- [CSS Design Awards](https://www.cssdesignawards.com/)

### Performance Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Core Web Vitals](https://web.dev/vitals/)

### Development Tools
- [Astro DevTools](https://docs.astro.build/en/guides/dev-toolbar/)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [GSAP DevTools](https://greensock.com/docs/v3/Plugins/GSDevTools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Prettier for code formatting
- Write semantic HTML
- Ensure accessibility compliance
- Test across different browsers
- Optimize images and assets

## 📄 License

This project is proprietary software owned by The Other Dev.

## 📞 Contact

**The Other Dev**
- Website: [otherdev.com](https://otherdev.com)
- Email: hello@otherdev.com
- Phone: +92 315 6893331

---

Built with ❤️ by The Other Dev team in Karachi, Pakistan.
