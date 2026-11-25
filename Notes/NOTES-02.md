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