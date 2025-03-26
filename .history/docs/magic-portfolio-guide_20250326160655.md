# Magic Portfolio for Next.js

Creative portfolio boilerplate built with Next.js. SEO-optimized, accessible, responsive. Includes projects, blog and gallery.

![Magic Portfolio Preview](https://images.ctfassets.net/e5382hct74si/2a9mwvHroalOMFl3T8NJAT/af9f53fb2bf51ac71c981a145acb3a92/magic-portfolio-vercel.jpg)

## Overview

Magic Portfolio is a Next.js template designed for creating professional portfolios. It provides a clean, responsive design with support for projects, blog posts, and galleries.

## Getting Started

Magic Portfolio was built with [Once UI](https://once-ui.com/) for [Next.js](https://nextjs.org/). It requires Node.js v18.17+.

### 1. Clone the repository

```bash
git clone https://github.com/once-ui-system/magic-portfolio.git
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
src/app/resources/config
```

### 5. Edit content

Content files are located in:
```
src/app/resources/content
```

### 6. Create blog posts and projects

Add new content by creating `.mdx` files in:
- `src/app/blog/posts` for blog posts
- `src/app/work/projects` for portfolio projects

## Features

### Once UI Integration

- All tokens, components & features of [Once UI](https://once-ui.com/)

### SEO Optimization

- Automatic open-graph and X image generation with next/og
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

## Authors

- Lorant Toth: [Threads](https://www.threads.net/@lorant.one), [LinkedIn](https://www.linkedin.com/in/tothlorant/)
- Zsofia Komaromi: [Threads](https://www.threads.net/@zsofia_kom), [LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)
- Localization by [François Hernandez](https://github.com/francoishernandez)

## Community

- Join the [Design Engineers Club on Discord](https://discord.com/invite/5EyAQ4eNdS)
- Report bugs on [GitHub](https://github.com/once-ui-system/magic-portfolio/issues/new?labels=bug&template=bug_report.md)

## License

Distributed under the CC BY-NC 4.0 License:
- Commercial usage is not allowed
- Attribution is required

See `LICENSE.txt` for more information.

## Demo and Deployment

- View the [live demo](https://demo.magic-portfolio.com/)
- Deploy your own with [Vercel](https://vercel.com/new/clone?demo-description=Creative%20portfolio%20boilerplate%20built%20with%20Next.js.%20SEO-optimized%2C%20accessible%2C%20responsive.%20Includes%20projects%2C%20blog%20and%20gallery.&demo-title=Magic%20Portfolio%20for%20Next.js&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio) 