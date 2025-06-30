# Dating Made Simple by Nick

[Portfolio Project]

A modern, accessible, and honest guide blog and dating profile built with [Next.js](https://nextjs.org/). This project showcases a personal dating profile, practical online dating tips, and in-depth relationship advice for modern singles. It features a unique, interactive UI, accessibility features, and a blog system powered by MDX.

---

## Features

- **Personal Dating Profile**: Interactive sections for interests, goals, personality, and more.
- **Guide Blog**: Easily extensible blog system using MDX for dating and relationship articles.
- **Accessibility**: Dyslexic-friendly font toggle, responsive design, and keyboard navigation.
- **Custom UI Components**: Built with Radix UI primitives and Tailwind CSS for a consistent look.
- **Spotify Integration**: Displays currently playing or recently played tracks.
- **Image Gallery**: Responsive, zoomable gallery for profile images.
- **Contact & Social Links**: Quick access to Discord, Instagram, Twitter, LinkedIn, GitHub, and more.
- **Dark/Light Theme**: Theme toggle with system preference support.

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Server Components)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [MDX](https://mdxjs.com/) (blog content)
- [next-themes](https://github.com/pacocoursey/next-themes) (theme switching)
- [Sonner](https://sonner.emilkowal.ski/) (toasts)
- [Embla Carousel](https://www.embla-carousel.com/) (carousel)
- [OpenDyslexic Font](https://opendyslexic.org/) (dyslexia-friendly)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/NickVeles/dating.git
   cd dating
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

- app — Next.js app directory (pages, layouts, blog, profile, etc.)
- components — Reusable UI and utility components
- constants — Static data (e.g., chips for profile)
- lib — Utility functions and hooks
- posts — Blog posts in MDX format
- public — Static assets (fonts, images)
- `styles/` — Global and component styles

---

## Blog System

Blog posts are written in MDX and stored in the posts directory. Each post requires frontmatter with `title` and `date` fields.

Example:
```mdx
---
title: "My First Post"
date: "2025-06-30"
---

# Hello World

This is my first blog post written in MDX!
```

---

## Accessibility

- **Dyslexic Font Toggle**: Switch to OpenDyslexic font for improved readability.
- **Keyboard Navigation**: All interactive elements are keyboard accessible.
- **Color Contrast**: Carefully chosen color palette for readability in both light and dark modes.

---

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com/) or any Node.js-compatible hosting.

---

## License

This project is licensed under the Apache License 2.0.

OpenDyslexic font is licensed under the SIL Open Font License 1.1.

---

## Contact

For questions, suggestions, or to reach out:

- [LinkedIn](https://www.linkedin.com/in/nickveles/)

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [OpenDyslexic](https://opendyslexic.org/)
- [Unsplash](https://unsplash.com/) (images)
- [Spotify](https://spotify.com/) (music integration)

