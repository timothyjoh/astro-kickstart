# Blog Setup Documentation

This document outlines how the blog system was set up in this Astro project using Content Collections.

## Overview

The blog system uses Astro's Content Collections feature to manage markdown blog posts stored in `src/content/blog/`. The setup includes:

- Content collection configuration with TypeScript schema validation
- Blog index page that lists all posts
- Dynamic blog post pages using server-side rendering
- Proper styling and layout integration

## File Structure

```
src/
├── content/
│   ├── config.ts              # Content collection configuration
│   └── blog/                  # Blog post markdown files
│       ├── mastering-astro-development.md
│       └── creativity-constraints.md
├── pages/
│   └── blog/
│       ├── index.astro        # Blog listing page
│       └── [slug].astro       # Dynamic blog post pages
└── layouts/
    └── BlogLayout.astro       # Layout for individual blog posts
```

## Content Collection Configuration

**File: `src/content/config.ts`**

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    author: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
```

This configuration:
- Defines a `blog` collection for markdown content
- Enforces a TypeScript schema for frontmatter validation
- Requires `title`, `description`, `date`, `tags`, and `author`
- Includes optional `draft` field (defaults to `false`)

## Blog Index Page

**File: `src/pages/blog/index.astro`**

Key features:
- Uses `getCollection('blog')` to fetch all blog posts
- Filters out draft posts with `!data.draft`
- Sorts posts by date (newest first)
- Maps post data for display with calculated read time
- Responsive grid layout with hover effects
- Tag display and author information

The page fetches posts like this:
```javascript
const allPosts = await getCollection('blog', ({ data }) => {
  return !data.draft; // Only show published posts
});
```

## Dynamic Blog Post Pages

**File: `src/pages/blog/[slug].astro`**

Uses server-side rendering (SSR) approach since the project is configured with `output: 'server'`:

```astro
---
import { getEntry } from 'astro:content';
import BlogLayout from '@/layouts/BlogLayout.astro';

const { slug } = Astro.params;

if (!slug) {
  return new Response(null, { status: 404 });
}

const entry = await getEntry('blog', slug);

if (!entry) {
  return new Response(null, { status: 404 });
}

const { Content } = await entry.render();
---

<BlogLayout 
  title={entry.data.title}
  description={entry.data.description}
  date={entry.data.date}
  author={entry.data.author}
  tags={entry.data.tags}
>
  <Content />
</BlogLayout>
```

Key points:
- Uses `getEntry()` instead of `getStaticPaths()` for SSR compatibility
- Handles 404 cases for missing slugs or posts
- Renders markdown content using `await entry.render()`
- Passes frontmatter data to `BlogLayout`

## Blog Post Format

Blog posts should be created as markdown files in `src/content/blog/` with this frontmatter structure:

```markdown
---
title: "Your Post Title"
description: "Brief description of the post content"
date: 2025-01-24
tags: ["tag1", "tag2", "tag3"]
author: "Author Name"
draft: false
---

Your markdown content here...

## Headings work normally

- Lists work
- As expected

Code blocks are supported:

```javascript
console.log('Hello, world!');
```
```

## Styling Integration

The blog uses the existing styling system:
- `BlogLayout.astro` for individual post layout
- Global CSS classes from `src/styles/globals.css`
- Tailwind CSS for responsive design
- Typography styles for markdown content rendering

## URL Structure

- Blog index: `/blog/`
- Individual posts: `/blog/[slug]/`
- Slug is derived from the markdown filename (without `.md` extension)

## Adding New Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add proper frontmatter matching the schema
3. Write content in markdown
4. The post will automatically appear on the blog index
5. Individual post page will be accessible at `/blog/[filename]/`

## Environment Configuration

The blog works with the current Astro configuration:
- `output: 'server'` for SSR
- Vercel adapter for deployment
- Content Collections enabled by default in Astro 5

## Future Enhancements

Potential improvements to consider:
- Add pagination for large numbers of posts
- Implement tag-based filtering
- Add search functionality
- Include reading time calculation
- Add related posts suggestions
- Implement RSS feed generation
- Add social sharing buttons

## Troubleshooting

Common issues and solutions:

1. **404 errors on blog posts**: Ensure `output: 'server'` in `astro.config.mjs` and using `getEntry()` instead of `getStaticPaths()`

2. **Posts not appearing**: Check frontmatter format matches schema and `draft: false`

3. **Styling issues**: Verify `BlogLayout.astro` exists and CSS classes are properly applied

4. **Build errors**: Run `astro check` to validate content collection schema