LAB-01

1. In which file are the `<html>` and `<body>` tags?
app/layout.tsx

2. Which file renders the page at `/`?
app/page.tsx.

3. Which folder is for images and other static files, and how do you reference them?
The public/ folder. Files can be referenced from the root URL

4. What is  `tsconfig.json ` doing in your project?
It configures TypeScript, including compiler options, type checking, and how imports are resolved.

5. What does `@/*` mean in `tsconfig.json`? Write an import that uses it.
It is an alias for the project root, allowing imports without long relative paths. For example:

import MovieList from "@/components/movie-list";

6. What does `app/layout.tsx` import from `next/font/google`, and what does Next.js do with it at build time?
It imports the Geist and Geist Mono fonts. Next.js downloads and self host the font files at build time

7. What’s the difference between `layout.tsx` and `page.tsx`?
layout defines shared UI that wraps pages, page defines the content for a specific route.

8. Where would you put a navbar that appears on every page?
In the root app/layout.tsx, so it is shared 

9. What is `globals.css` for, and where is it imported?
It contains global style, imported in app/layout.tsx

10. What is `AGENTS.md`, and does your app need it to run?
AGENTS.md provides instructions and context for AI coding agents working on the project. The app does not need it to run; it is guidance for development tools.


LAB-02