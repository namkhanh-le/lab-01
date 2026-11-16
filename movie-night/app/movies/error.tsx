
"use client";

export default function MoviesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded border px-4 py-2"
      >
        Try again
      </button>
    </main>
  );
}
