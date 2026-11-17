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
1. In the page source, are the movie titles present for /movies? For /movies-client? Why?

For /movies, the movie titles are present in the page source because the page is a Server Component. It fetches the data on the server and includes the movie titles in the HTML sent to the browser.

For /movies-client, the titles are not present initially. The page source only contains "Loading movies..." because the data is fetched inside useEffect, which runs in the browser after the page has loaded.

2. Without the force-dynamic line of Part E, you run npm run build again tomorrow, then npm start, without changing anything else. What does the "Rendered at" timestamp of /movies show, and why?

The timestamp shows the time when the new production build was generated. Without force-dynamic, Next.js prerenders the page at build time, so the timestamp stays the same for every visitor until another build is generated.

3. Part E made every request to /movies about one second slower. Give one situation where force-dynamic is still the right choice, and explain why.

forcedynamic is useful for a page that displays information that must be up to date on every request. Static rendering could show outdated information, so rendering on every request is more appropriate.

4. A classmate sees [movies] rendered 6 movies in the browser console and says: "So this code runs in the browser." What do you answer, and how can you prove it?

The code still runs on the server because /movies is a Server Component. Next.js may show a debugging copy of the server log in the browser console during development.

I can prove it by checking the terminal, where the log is printed by Node.js. I can also disable JavaScript in the browser and reload /movies: the movie list still appears because the HTML was generated on the server.

5. Which version would you choose for a public movie catalogue that changes once a week, and why?

I would choose SSG because the catalogue does not change frequently. The page can be generated at build time and served quickly to visitors without waiting for a database query on every request. 


LAB-03
1. NavLink uses usePathname, a hook that only works in Client Components. Yet the page source of /movies/2 already contains aria-current="true" on the Movies link. How is this possible?

Next.js can prerender Client Components on the server before sending the HTML to the browser. Therefore, usePathname() can determine the current path during the initial render, and the correct aria-current attribute is already included in the HTML.

2. Why does generateStaticParams return String(movie.id) and not movie.id? And why does /movies/42 give a 404 in Part C without running the code of the page?

URL parameters are strings, so generateStaticParams must return string values instead of numbers.

dynamicParams = false means that only the IDs returned by generateStaticParams are valid. Since ID 42 is not included, Next.js returns a 404 without executing the page.

3. In Part D, why is the note kept between /movies and /movies/2, and lost when you go through /about?

Both /movies and /movies/2 share the same app/movies/layout.tsx. Next.js keeps this layout mounted when navigating between pages in the same section, so the input state is preserved.

When navigating to /about, the movies layout is unmounted. Returning to /movies creates a new layout, so the input is reset.

4. In Part E, step 4, where is the real message of the error, and why does Next.js not send it to the browser?

The real error message is available in the server terminal. Next.js does not expose detailed server errors to the browser in production because they could reveal sensitive internal information about the application.

5. Under npm run dev, "Loading the movies..." appears when you open /movies/2. Under npm start it does not, but it still appears on /movies. Why?

Under npm run dev, pages are rendered on each request, so the simulated one-second delay causes the loading state to appear.

Under npm start, the individual movie pages are prerendered at build time using generateStaticParams, so they do not need to wait for data at request time.

The /movies page is still dynamic because it uses force-dynamic, so its loading state can still appear.