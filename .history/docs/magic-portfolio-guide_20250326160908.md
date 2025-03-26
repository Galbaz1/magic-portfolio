# Magic Portfolio for Next.js

Creative portfolio boilerplate built with Next.js. SEO-optimized, accessible, responsive. Includes projects, blog and gallery.

## Overview

Magic Portfolio is a Next.js template designed for creating professional portfolios. It provides a clean, responsive design with support for projects, blog posts, and galleries.

## Getting Started

Magic Portfolio was built with Once UI for Next.js. It requires Node.js v18.17+.

### 1. Clone the repository

```bash
git clone [repository-url]
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Edit configuration

Configuration files are located in:
```
src/app/resources/config.js
```

### 5. Edit content

Content files are located in:
```
src/app/resources/content.js
```

### 6. Create blog posts and projects

Add new content by creating `.mdx` files in:
- `src/app/blog/posts` for blog posts
- `src/app/work/projects` for portfolio projects

## Features

### Once UI Integration

- All tokens, components & features of Once UI design system

### SEO Optimization

- Automatic open-graph and social media image generation with next/og
- Automatic schema and metadata generation based on the content file

### Responsive Design

- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Extensive customization options through data attributes

### Content Management

- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about/CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization

- A localized version is available with the next-intl library
- To use localization, switch to the 'i18n' branch

## License

Distributed under the CC BY-NC 4.0 License:
- Commercial usage is not allowed
- Attribution is required

See `LICENSE.txt` for more information. 