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