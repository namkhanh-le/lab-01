# Lab 4 — Part 2 (Session 6)

1. Create a table showing each page, its rendering strategy (SSG, ISR, SSR or CSR), and why that strategy is used. Include the actual build output.

| Page | Strategy | Reason |
|---|---|---|
| `/` | SSR with streaming | The homepage retrieves fresh movie and vote data using `cache: "no-store"`. Suspense allows the initial page to stream before the data is ready. |
| `/movies` | ISR | The movie list is cached and regenerated after 10 seconds using `next: { revalidate: 10 }`. |
| `/movies/[id]` | SSG | `generateStaticParams` generates the six movie detail pages at build time. Their data uses `cache: "force-cache"`. |
| `/movies-client` | CSR | The page has a statically generated shell, but its movie data is fetched in the browser using `useEffect` and `fetch`. |

production build

- `ƒ /` 
- `○ /movies` 
- `● /movies/1` through `● /movies/6` 
- `○ /movies-client` 

final build:

```text
Route (app)
┌ ƒ /
├ ○ /_not-found
├ ○ /about
├ ○ /movies
├ ○ /movies-client
└   /movies/[id]
  ├ ● /movies/1
  ├ ● /movies/2
  ├ ● /movies/3
  └ ● [+3 more paths]


2. After clearing .next/cache, which eight API calls are made during the production build?

- Two requests to GET /api/movies:
  - 1 from generateStaticParams, using cache: "force-cache".
  - 1 from /movies, using next: { revalidate: 10 }.
- Six requests to GET /api/movies/:id for 6 movies
The two list requests use different caching options, so they are treated as separate fetch requests. The individual movie requests are shared between generateMetadata and the page component because their URLs and fetch options are identical.

3. The homepage took approximately 2.5 seconds without Suspense, 2.5 seconds with Suspense, and 1.5 seconds after using Promise.all. What improved in each case, and why?

Suspense allows Next.js to send the initial HTML immediately. The slower TopMovies component continues rendering separately. -> first byte time increase only

using Promise.all, both requests run concurrently instead of sequentially. That coupled with Suspense gets 1.5 for homepage and 0.1 for first byte time