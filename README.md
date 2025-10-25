# Joey Pedicini - Personal Website

A modern, elegant personal website built with Next.js 16, TypeScript, TailwindCSS, and Framer Motion.

## 🎨 Design Philosophy

This site embodies the concept of "spiritual software" - technology that serves human growth and connection. It features:

- **Minimalist aesthetic** with editorial-inspired design
- **Smooth animations** powered by Framer Motion
- **Responsive design** that works beautifully on all devices
- **Dark/light mode** for optimal viewing experience
- **Ikigai framework** to communicate purpose and values

## 🚀 Features

- **Hero Section**: Elegant introduction with animated tagline
- **Ikigai Visualization**: Interactive representation of purpose, passion, profession, and mission
- **Experience Highlights**: Showcase of meaningful projects and achievements
- **Philosophy**: Personal manifesto on human-driven development
- **Connect**: Beautiful grid of social links and platforms
- **Theme Toggle**: Smooth dark/light mode switching

## 🛠 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx            # Main page with all sections
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── Hero.tsx            # Landing section
│   ├── Ikigai.tsx          # Purpose framework visualization
│   ├── Experience.tsx      # Project highlights
│   ├── Philosophy.tsx      # Personal manifesto
│   ├── Connect.tsx         # Social links and platforms
│   └── ThemeToggle.tsx     # Dark/light mode toggle
├── public/                 # Static assets
└── ...config files
```

## 🎯 Sections

### Hero
- Large headline with gradient text effect
- Animated tagline with breathing animation
- Smooth scroll to next section
- Floating particle background

### Ikigai
- Four overlapping circles representing:
  - What I Love
  - What I'm Good At
  - What The World Needs
  - What I Can Be Paid For
- Central intersection showing "IKIGAI"
- Smooth motion transitions

### Experience
- Amazon/One Medical: Frontend leadership
- CleverApply: SaaS platform development
- CodeCompass: Developer coaching
- Human Driven Development: Framework creation

### Philosophy
- Core beliefs about technology and humanity
- Animated typography with breathing effects
- Three principle pillars: Human-Centered, Faith-Informed, Growth-Oriented

### Connect
- Social media links (LinkedIn, Instagram, YouTube, Spotify)
- Platform links (MentorCruise, CodeCompass, HDD, Bonjournl)
- Discord community CTA
- Hover animations and transitions

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
The theme uses a custom color palette defined in `tailwind.config.ts`:
- **Primary**: Neutral grays for text and backgrounds
- **Accent**: Purple/pink gradients for highlights
- **Custom gradients**: Defined in CSS for text effects

### Fonts
- **Body**: Inter (Google Fonts)
- **Headings**: Playfair Display (Google Fonts)

### Animations
All animations are built with Framer Motion and include:
- Page entry animations
- Scroll-triggered animations
- Hover effects
- Theme transitions

## 🌐 Deployment

This project is optimized for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## 📧 Contact

- **Email**: joey@example.com
- **LinkedIn**: [linkedin.com/in/joeypedicini](https://linkedin.com/in/joeypedicini)
- **Website**: [CodeCompass.org](https://codecompass.org)

---

Built with ❤️ and a commitment to human-driven development.