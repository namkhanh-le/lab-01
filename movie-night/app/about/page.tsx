
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Movie Night",
  description: "What Movie Night is",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-2">
        this is description of Movie Night
      </p>
    </main>
  );
}
