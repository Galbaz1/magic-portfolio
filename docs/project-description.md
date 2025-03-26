# Magic Portfolio - Project Description

## Overview

Magic Portfolio is a modern, modular, and customizable portfolio template built with Next.js and Once UI design system. It provides a foundation for designers and developers to showcase their work, blog posts, and personal information in an elegant and accessible way.

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: Once UI design system
- **Styling**: SCSS Modules + Tailwind CSS
- **Language**: TypeScript
- **Content**: MDX with front matter (for blog posts and work projects)
- **Deployment**: Ready for Vercel deployment

## Project Structure

### Core Directories

- `/src/app`: Next.js App Router pages and layouts
- `/src/components`: Reusable React components
- `/src/once-ui`: Once UI design system components and utilities
- `/src/lib`: Utility functions and helpers
- `/public`: Static assets (images, fonts, etc.)

### Key Modules

#### Configuration and Content

- `/src/app/resources/config.js`: Site-wide configuration (themes, routes, effects)
- `/src/app/resources/content.js`: Content configuration (personal info, sections, experiences)

#### Pages

- `/src/app/page.tsx`: Homepage
- `/src/app/about/`: About/CV page
- `/src/app/work/`: Projects showcase
- `/src/app/blog/`: Blog posts
- `/src/app/gallery/`: Image gallery

#### Components

1. **Layout Components**
   - `Header.tsx`: Site navigation and theme controls
   - `Footer.tsx`: Site footer with social links

2. **Content Components**
   - `ProjectCard.tsx`: Displays project previews
   - `mdx.tsx`: MDX rendering components for blog and work pages

3. **UI Components**
   - Multiple Once UI components for layout, interaction, and display 

## Modular Structure

The codebase is designed with modularity in mind:

### Themeable Design System

The Once UI design system allows for comprehensive theming through:
- Token-based design
- Data attributes for styling variations
- SCSS modules for component-specific styling

### Content Configuration

All content is organized in a modular way:
- `content.js` for site-wide content
- MDX files for blog posts and project pages
- Conditional rendering of sections based on configuration

### Component Composition

Components follow a modular pattern:
- Props-based configuration
- Composition over inheritance
- Clear separation of concerns

## Customization Points

Frontend developers can modify the template in several ways:

1. **Theme Customization**
   - Edit `config.js` to change colors, borders, styles
   - Modify the Once UI tokens in `/src/once-ui/tokens/`

2. **Content Updates**
   - Update personal info and sections in `content.js`
   - Add/edit MDX files for blog posts and projects

3. **Layout Changes**
   - Modify page layouts in the respective page components
   - Adjust components in `/src/components/`

4. **Component Extensions**
   - Extend existing components or create new ones
   - Follow the established patterns for consistency

## SEO and Performance

The template includes:
- Automatic OpenGraph image generation
- Schema.org structured data
- SEO-friendly metadata
- Optimized performance with Next.js

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Edit configuration and content files
5. Add blog posts and projects by creating new MDX files

## Deployment

Optimized for Vercel deployment, but can be deployed to any platform that supports Next.js.

## License

Distributed under the CC BY-NC 4.0 License:
- Commercial usage is not allowed
- Attribution is required 