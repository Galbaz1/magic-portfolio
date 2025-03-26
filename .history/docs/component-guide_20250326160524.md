# Magic Portfolio - Component Guide

This guide provides technical details about the components used in the Magic Portfolio template. It's designed to help frontend developers understand, modify, and extend the existing components.

## Once UI Components

The Magic Portfolio uses the Once UI design system, which provides a set of foundational components. These components can be found in `/src/once-ui/components/`.

### Layout Components

#### `Column` and `Row`

Simple layout components that render a div with flexbox properties.

```tsx
import { Column, Row } from "@/once-ui/components";

// Column example
<Column gap="m" maxWidth="l" horizontal="center">
  {children}
</Column>

// Row example
<Row gap="m" vertical="center">
  {children}
</Row>
```

#### `Flex` and `Grid`

More advanced layout components with additional configuration options.

```tsx
import { Flex, Grid } from "@/once-ui/components";

// Flex example
<Flex gap="24" mobileDirection="column">
  {children}
</Flex>

// Grid example
<Grid columns="2" gap="xl">
  {children}
</Grid>
```

### Text Components

#### `Heading` and `Text`

Components for displaying text with consistent styling.

```tsx
import { Heading, Text } from "@/once-ui/components";

<Heading variant="display-strong-l" wrap="balance">
  Portfolio Headline
</Heading>

<Text variant="heading-default-xl" onBackground="neutral-weak">
  Subheading text
</Text>
```

### Interactive Components

#### `Button`

Button component with various styles and states.

```tsx
import { Button } from "@/once-ui/components";

<Button 
  variant="primary" 
  size="m"
  arrowIcon 
  href="/about"
  data-border="rounded"
>
  Learn More
</Button>
```

#### `RevealFx`

Animation component for revealing content with a transition effect.

```tsx
import { RevealFx } from "@/once-ui/components";

<RevealFx translateY="4" delay={0.2} horizontal="start">
  {children}
</RevealFx>
```

## Application Components

Custom components specific to the Magic Portfolio template, located in `/src/components/`.

### Layout Components

#### `Header`

Site navigation component, located in `/src/components/Header.tsx`.

- **Props**: None, uses configuration from `resources/content.js`
- **Customization**: Edit the styling in `Header.module.scss` and structure in `Header.tsx`
- **Usage**: Automatically included in the root layout

#### `Footer`

Site footer component, located in `/src/components/Footer.tsx`.

- **Props**: None, displays social links from `resources/content.js`
- **Customization**: Edit the styling in `Footer.module.scss`
- **Usage**: Automatically included in the root layout

### Content Components

#### `ProjectCard`

Displays a preview of a project, located in `/src/components/ProjectCard.tsx`.

- **Props**:
  - `project`: Project data object
  - `variant`: 'default' | 'featured'
- **Customization**: Modify the card layout in `ProjectCard.tsx`
- **Usage**:

```tsx
import { ProjectCard } from "@/components";

<ProjectCard project={projectData} variant="featured" />
```

#### `Projects` (Collection Component)

Displays a collection of projects, located in `/src/components/work/Projects.tsx`.

- **Props**:
  - `range`: Array with start and end indices for filtering projects
  - `columns`: Number of columns for the grid (default: 1)
- **Usage**:

```tsx
import { Projects } from "@/components/work/Projects";

<Projects range={[1, 3]} columns="2" />
```

#### `Posts` (Collection Component)

Displays a collection of blog posts, located in `/src/components/blog/Posts.tsx`.

- **Props**:
  - `range`: Array with start and end indices for filtering posts
  - `columns`: Number of columns for the grid (default: 1)
- **Usage**:

```tsx
import { Posts } from "@/components/blog/Posts";

<Posts range={[1, 2]} columns="2" />
```

### Utility Components

#### `Mailchimp`

Newsletter subscription component, located in `/src/components/Mailchimp.tsx`.

- **Props**:
  - `newsletter`: Newsletter configuration from `resources/content.js`
- **Customization**: Edit the form and styling in `Mailchimp.tsx`
- **Usage**:

```tsx
import { Mailchimp } from "@/components";
import { newsletter } from "@/app/resources/content";

<Mailchimp newsletter={newsletter} />
```

#### `mdx`

MDX rendering components, located in `/src/components/mdx.tsx`.

- **Usage**: These components are used internally for rendering MDX content in blog posts and project pages.

## Extending the Component Library

### Creating a New Component

1. Create a new TSX file in the appropriate directory
2. Optionally create a matching SCSS module for styling
3. Follow the existing component patterns
4. Export the component in the relevant index.ts file

Example of a new component:

```tsx
// src/components/MyNewComponent.tsx
import React from "react";
import styles from "./MyNewComponent.module.scss";
import { Flex, Text } from "@/once-ui/components";

interface MyNewComponentProps {
  title: string;
  description?: string;
}

export function MyNewComponent({ title, description }: MyNewComponentProps) {
  return (
    <Flex className={styles.container} gap="m" direction="column">
      <Text variant="heading-strong-m">{title}</Text>
      {description && <Text variant="body-default-m">{description}</Text>}
    </Flex>
  );
}
```

### Modifying Existing Components

When modifying existing components:

1. Keep the same props interface for backward compatibility
2. Follow the established patterns in the codebase
3. Maintain the component's general purpose and behavior
4. Use the existing SCSS modules for styling changes

## Styling Approach

Magic Portfolio uses a combination of:

1. **Once UI Tokens**: Design tokens that control colors, spacing, typography, etc.
2. **SCSS Modules**: Component-specific styles with local scope
3. **Data Attributes**: For theme variations (`data-theme`, `data-border`, etc.)
4. **Tailwind Utilities**: For additional styling needs

### Styling Examples

Using SCSS Modules:

```scss
// Component.module.scss
.container {
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}
```

Using Once UI tokens with data attributes:

```tsx
<Button 
  data-theme="brand" 
  data-border="playful" 
  data-surface="translucent"
>
  Custom Styled Button
</Button>
```

## Best Practices

1. **Component Props**: Use TypeScript interfaces for component props
2. **Composition**: Prefer composition over inheritance
3. **Style Isolation**: Use SCSS modules to prevent style leaking
4. **Responsive Design**: Use the provided responsive utilities
5. **Accessibility**: Maintain ARIA attributes and keyboard navigation
6. **Performance**: Use React.memo and useMemo when appropriate 