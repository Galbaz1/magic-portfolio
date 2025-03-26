# Magic Portfolio - Customization Guide

This guide provides detailed instructions for customizing the Magic Portfolio template. It covers theming, content management, layout adjustments, and component modifications.

## Theming

### Basic Theme Configuration

The main theme configuration is in `src/app/resources/config.js`. This file controls the basic visual aspects of the template:

```js
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "emerald", // blue, indigo, violet, etc.
  accent: "orange", // blue, indigo, violet, etc.
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};
```

To change the theme:

1. Edit the `style` object in `config.js`
2. Save the file and see the changes in real-time during development

### Advanced Theming

For more advanced theming, you can modify the design tokens in the Once UI system:

1. Navigate to `/src/once-ui/tokens/`
2. Edit the appropriate token files:
   - `colors.scss`: Color definitions
   - `typography.scss`: Font styles and sizes
   - `spacing.scss`: Spacing values
   - `borders.scss`: Border styles and radii

Example of modifying typography:

```scss
// src/once-ui/tokens/typography.scss
--heading-display-strong-l-font-size: 3.5rem; // Increase heading size
--heading-display-strong-l-font-weight: 800; // Make headings bolder
```

### Effects Configuration

You can customize visual effects in `config.js`:

```js
const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    // other properties...
  },
  // other effects...
};
```

## Content Management

### Personal Information

Edit your personal information in `src/app/resources/content.js`:

```js
const person = {
  firstName: "Your",
  lastName: "Name",
  role: "Your Role",
  avatar: "/images/your-avatar.jpg",
  location: "Your/Location", // IANA time zone format
  languages: ["Language1", "Language2"],
};
```

### Homepage Content

Modify the homepage content in `content.js`:

```js
const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Custom description here`,
  headline: <>Your custom headline</>,
  subline: <>Your custom subline with <InlineCode>formatting</InlineCode> if needed</>,
};
```

### About/CV Page

Configure your about page with sections for work experience, studies, and skills:

```js
const about = {
  // Basic info
  label: "About",
  title: "About me",
  description: `Custom description`,
  
  // Sections configuration
  tableOfContent: {
    display: true, // Show/hide table of contents
    subItems: false,
  },
  
  // Work experience section
  work: {
    display: true, // Show/hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Company Name",
        timeframe: "Year - Year",
        role: "Your Role",
        achievements: [
          <>Achievement description</>,
          // Add more achievements...
        ],
        images: [
          {
            src: "/path/to/image.jpg",
            alt: "Alt text",
            width: 16,
            height: 9,
          },
          // Add more images or leave empty...
        ],
      },
      // Add more work experiences...
    ],
  },
  
  // Similar structure for studies and technical skills...
};
```

### Adding Blog Posts

1. Create a new MDX file in `src/app/blog/posts/`
2. Use the following frontmatter format:

```mdx
---
title: "Your Blog Post Title"
date: "2023-12-31"
excerpt: "A brief description of your post"
coverImage: "/images/blog/your-cover-image.jpg"
---

# Your Blog Post Content

Write your content here using Markdown/MDX syntax.
```

### Adding Work Projects

1. Create a new MDX file in `src/app/work/projects/`
2. Use the following frontmatter format:

```mdx
---
title: "Project Title"
date: "2023-12-31"
status: "completed" # or "in-progress"
client: "Client Name" # optional
role: "Your Role"
excerpt: "Brief project description"
coverImage: "/images/projects/your-project/cover.jpg"
---

# Project Content

Write your project details here.
```

## Layout Customization

### Page Layouts

To customize a page layout:

1. Locate the page file (e.g., `src/app/page.tsx` for the homepage)
2. Modify the structure using Once UI components:

```tsx
export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      {/* Add, remove, or rearrange sections */}
      <YourCustomSection />
      
      {/* Conditionally show sections */}
      {shouldShowSection && <OptionalSection />}
    </Column>
  );
}
```

### Header and Footer

Customize the global navigation:

1. Edit `src/components/Header.tsx` for navigation structure
2. Edit `src/components/Footer.tsx` for footer content and links
3. Update their respective SCSS modules for styling

### Route Configuration

Control which pages are accessible in `config.js`:

```js
const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true, // Set to false to disable this page
};
```

## Component Customization

### Modifying Existing Components

Example: Customizing the ProjectCard component:

1. Open `src/components/ProjectCard.tsx`
2. Modify the component structure or styling
3. If needed, create or update `ProjectCard.module.scss`

```tsx
// src/components/ProjectCard.tsx
export function ProjectCard({ project, variant = "default" }) {
  return (
    <div className={styles.card}>
      {/* Your customized card layout */}
      <div className={styles.imageWrapper}>
        <SmartImage src={project.coverImage} alt={project.title} />
      </div>
      <div className={styles.contentWrapper}>
        {/* Add or modify content elements */}
      </div>
    </div>
  );
}
```

### Creating New Components

1. Create a new component file in the appropriate directory
2. Create a matching SCSS module if needed
3. Export the component from an index.ts file if applicable
4. Import and use the component in your pages

Example:

```tsx
// src/components/custom/FeatureHighlight.tsx
import React from "react";
import styles from "./FeatureHighlight.module.scss";
import { Flex, Heading, Text, Icon } from "@/once-ui/components";

interface FeatureHighlightProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureHighlight({ title, description, icon }: FeatureHighlightProps) {
  return (
    <Flex className={styles.feature} gap="m" direction="column">
      <Icon name={icon} size="l" />
      <Heading variant="heading-strong-s">{title}</Heading>
      <Text variant="body-default-m">{description}</Text>
    </Flex>
  );
}
```

## Advanced Customization

### MDX Components

Customize how MDX content is rendered by modifying `src/components/mdx.tsx`:

```tsx
// src/components/mdx.tsx
export const mdxComponents = {
  h1: (props) => <Heading as="h1" variant="display-strong-m" {...props} />,
  h2: (props) => <Heading as="h2" variant="display-strong-s" {...props} />,
  // Add or modify MDX component mappings
  MyCustomComponent: (props) => <MyCustomComponent {...props} />,
};
```

### SEO and Metadata

Customize SEO settings for individual pages by modifying their `generateMetadata` function:

```tsx
export async function generateMetadata() {
  const title = "Custom Page Title";
  const description = "Custom page description";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      // Customize OpenGraph metadata
    },
    twitter: {
      // Customize Twitter metadata
    },
  };
}
```

### Password Protection

Enable password protection for specific routes in `config.js`:

```js
const protectedRoutes = {
  "/work/project-name": true,
  "/blog/private-post": true,
};
```

Don't forget to set the password in your `.env` file as described in `.env.example`.

## Performance Tips

1. **Image Optimization**: Use Next.js Image component or Once UI's SmartImage for automatic optimization
2. **Code Splitting**: Create separate components for large sections
3. **Memoization**: Use React.memo for components that don't need frequent re-renders
4. **Dynamic Imports**: Use dynamic imports for heavy components loaded conditionally

## Deployment

1. Build your customized portfolio with `npm run build`
2. Deploy to Vercel, or any platform that supports Next.js
3. Set up required environment variables on your hosting platform 