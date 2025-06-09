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

## 🛠️ Tech Stack

- **Frontend**: [Astro.js](https://astro.build/) with React components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **Animations**: [GSAP](https://greensock.com/gsap/) with ScrollTrigger
- **Language**: TypeScript
- **Deployment**: [Vercel](https://vercel.com/)
- **Email**: Nodemailer for newsletter functionality

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
bun run dev      # Start development server
bun run build    # Build for production
bun run preview  # Preview production build
bun run astro    # Run Astro CLI commands
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Carousel.astro  # Image carousel
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

Content is managed through JSON files in `src/data/[locale]/`:
- `projects.json` - Portfolio projects
- `services.json` - Service offerings  
- `seo.json` - SEO metadata

## 🎨 Key Components

### `<Carousel />`
Interactive image carousel with custom navigation:
```astro
<Carousel 
  carouselId="unique-id"
  images={imageArray}
  imageClasses="custom-classes"
/>
```

### `<SEO />`
Dynamic SEO component for meta tags:
```astro
<SEO pageName="about" />
```

### `<Navigation />`
Responsive navigation with mobile menu and language switching

## 🎬 Animations

The site uses GSAP for sophisticated animations:

- **Smooth Scrolling**: ScrollSmoother implementation
- **Parallax Effects**: Data-speed attributes
- **Page Transitions**: Curtain-style transitions
- **Interactive Elements**: Hover effects and shape animations
- **Mobile Optimized**: Touch-friendly animations

## 📧 Newsletter Integration

Newsletter subscription system:
- Frontend: React component with validation
- Backend: API route (`/api/subscribe`) with Nodemailer
- Storage: Custom cloud storage client
- Analytics: Subscription tracking

## 🚀 Deployment

The project is configured for Vercel:

1. Connect repository to Vercel
2. Set environment variables in dashboard
3. Deploy automatically on push to main

**Build Configuration:**
- Framework: Astro
- Output Directory: `dist/`
- Install Command: `bun install`
- Build Command: `bun run build`

## 📊 Performance

Optimization features:
- **Static Generation**: Pre-rendered HTML
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Dynamic imports
- **Font Loading**: Optimized with font-display: swap
- **Bundle Size**: Minimal JavaScript footprint

Target Lighthouse scores: Performance 95+, Accessibility 95+, SEO 100

## 🧪 Testing

### Browser Support
- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Accessibility
- WCAG 2.1 AA compliance
- Screen reader compatible
- Keyboard navigation
- Color contrast 4.5:1+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Prettier for code formatting
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
- Location: Karachi, Pakistan

---

Built with ❤️ by The Other Dev team
