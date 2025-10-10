# Steem.com

This is a project using Next.js and Tailwind CSS for [https://steem.com](https://steem.com)

## Features

- 🚀 Built with Next.js 15 and React 19
- 🎨 Styled with Tailwind CSS 4
- 📱 Fully responsive design
- ⚡ Fast loading and optimized images
- 🔍 SEO optimized
- 📄 TypeScript support

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Roboto (Google Fonts)
- **Image Optimization**: Next.js Image component

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── brand/
│   │   └── page.tsx
│   ├── buying-steem-tokens/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── developers/
│   │   └── page.tsx
│   ├── entrepreneurs/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── social-users/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Carousel.tsx
    ├── ContactSection.tsx
    ├── Footer.tsx
    ├── Header.tsx
    ├── Icon.tsx
    ├── ResourcesSection.tsx
    ├── StatCounter.tsx
    ├── TopSection.tsx
    └── TransactionComparison.tsx
```

## Styling System

The project uses a custom Steem brand color system:

- `steem-blue`: #161fc8
- `steem-lightblue`: #11a7f1
- `steem-purple`: #5f00de
- `steem-grey`: #707070
- `steem-offwhite`: #f5f5f5
- `steem-offblack`: #343a40

## Responsive Design

- Mobile-first design approach
- Support for tablet and desktop
- Uses Tailwind CSS responsive utility classes

## Deployment

The project is configured for static export and can be deployed to any static hosting service:

1. Build the project: `pnpm build`
2. The static files will be generated in the `out/` directory
3. Deploy the contents of the `out/` directory to your hosting service

## GitHub Actions

The project includes automated CI/CD with GitHub Actions:

- **Trigger**: Pushes to `master` branch
- **Build**: Node.js 20 environment with pnpm
- **Output**: Static files exported to `out/` directory
- **Release**: Automatic release creation with ZIP attachment

## License

MIT License