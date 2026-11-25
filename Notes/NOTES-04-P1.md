# Lab 4 — Part 1 (Session 5)

1. During the production build, seven API calls are made. Which calls are they? Why is `getMovie` not called twice for each movie when both `generateMetadata` and the page component use it?

The seven API calls:

- 1 request to `GET /api/movies` to retrieve the list of movies.
- 6 requests to `GET /api/movies/:id` for 6 mocies

`getMovie` is used by both `generateMetadata` and the page component, but Next.js reuse. because both request the same URL with the same options, Next.js reuses the response instead of making another request.

2. In breakage exercise 3, where does the API key end up? Who can read it, and where should secrets be used?

When a private environment variable such as `MOVIES_API_KEY` is rendered into a Client Component, value can end up in the server-rendered HTML, even though it is not included in the browser JavaScript 

Anyone who can access the publicly served page can inspect its HTML and retrieve the value and keymmight be exposed.

secrets should only be used in server-side code and never on browswer side code

3. Why does Next.js reject function props passed from a Server Component to a Client Component? Why does it reject importing a server-only module into a Client Component?

the payload transfers serializable data, not executable js functions so a function cannot normally be serialized and transferred. Thats why it will be rejected

A module marked with server-only is restricted to serverside. Importing it into a Client Component would risk secrets. Next.js prevents this during build.