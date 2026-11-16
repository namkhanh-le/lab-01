
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMovie, getMovies } from "@/lib/movies";

// Only ids returned by generateStaticParams exist: any other is 404
export const dynamicParams = false;

// Runs at build time: one HTML page per movie
export async function generateStaticParams() {
  const movies = await getMovies();
  return movies.map((movie) => ({ id: String(movie.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const movie = await getMovie(id);
  if (!movie) return {};
  return { title: movie.title };
}

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovie(id);
  if (!movie) notFound();

  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mt-2">
        {movie.year} · {movie.genre} · {movie.minutes} min
      </p>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Rendered at {new Date().toISOString()}
      </p>
      <Link href="/movies" className="mt-6 inline-block underline">
        Back to all movies
      </Link>
    </main>
  );
}
