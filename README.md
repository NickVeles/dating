# Dating Simplified

[Portfolio Project]

A modern, accessible, and honest guide blog and dating profile built with [Next.js](https://nextjs.org/). This project showcases a personal dating profile, practical online dating tips, and in-depth relationship advice for modern singles. It features a unique, interactive UI, accessibility features, and a blog system powered by MDX.

---

## Features

- **Personal Dating Profile**: Interactive sections for interests, goals, personality, and more.
- **Guide Blog**: Easily extensible blog system using MDX for dating and relationship articles.
- **Accessibility**: Dyslexic-friendly font toggle, responsive design, and keyboard navigation.
- **Custom UI Components**: Built with shadcn/ui and Tailwind CSS for a consistent look.
- **Spotify Integration**: Displays currently playing or recently played tracks.
- **Image Gallery**: Responsive, zoomable gallery for profile images.
- **Contact & Social Links**: Quick access to Discord, Instagram, Twitter, LinkedIn, GitHub, and more.
- **Dark/Light Theme**: Theme toggle with system preference support.

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Server Components)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [MDX](https://mdxjs.com/) (blog content)
- [next-themes](https://github.com/pacocoursey/next-themes) (theme switching)
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

- `app/` - Next.js app directory (pages, layouts, blog, profile, etc.)
- `assets/` - assets used within the app (mostly images and icons)
- `components/` - Reusable UI and utility components
- `constants/` - Static data (e.g., chips for profile)
- `lib/` - Utility functions and hooks
- `posts/` - Blog posts in MDX format
- `public/` - Static assets (fonts, images)
- `types/` - Common TypeScript types

---

## Blog System

Blog posts are written in MDX and stored in the posts directory. Each post requires frontmatter with `title` and `date` fields.

Example:
```mdx
---

title: "Your post's title" (required)

createdAt: "yyyy-MM-dd HH:mm:ss" (date - leave empty)

updatedAt: "yyyy-MM-dd HH:mm:ss" (date - leave empty)

authorsIds: [1, 2, 3] (authors' Ids - leave empty)

editorsIds: [1, 2, 3] (editors' Ids - leave empty)

thumbnail: "http://example.com/photo.jpg" (post thumbnail - optional)

---

# H1 tag

## H2 tag

### H3 tag

#### H4 tag

Paragraph text

Still the same paragraph

New paragraph

> Block quote

> Still the same block quote

> New block quote

- Unorganized list item #1

- Unorganized list item #2

- Unorganized list item #3

1. Organized list item #1

2. Organized list item #2

3. Organized list item #3

\`inline code - I don't know why you'd use it, but it's there!\`

\`\`\`

code block - also not sure why you'd use it

\`\`\`

*italic text*

**bold text**

***italic bold text***

[link text](https://example.com)

![image alternative text](https://example.com/photo.jpg)
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

- [GitHub](https:/www/github.com/NickVeles/)
- [LinkedIn](https://www.linkedin.com/in/nickveles/)

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [OpenDyslexic](https://opendyslexic.org/)
- [Unsplash](https://unsplash.com/) (images)
- [Spotify](https://spotify.com/) (music integration)

