import { TopMovies } from "@/components/top-movies";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Movie Night</h1>
      <p className="mt-2">
        Pick the movie
      </p>

      <nav className="mt-6 flex gap-4 underline">
      </nav>
      <Suspense
        fallback={
          <p className="mt-3" role="status">
            Counting the votes...
          </p>
        }
      >
        <TopMovies />
      </Suspense>
    </main>
  );
}
