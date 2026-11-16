
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Not Found</h1>
      <p className="mt-2">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-block underline">
        Back home
      </Link>
    </main>
  );
}
