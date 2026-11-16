
export default function MoviesLayout({
  children,
}: LayoutProps<"/movies">) {
  return (
    <div className="mx-auto w-full max-w-2xl p-8">
      <aside className="mb-6 rounded border p-4">
        <label htmlFor="movie-notes" className="font-semibold">
          My movie notes
        </label>
        <input
          id="movie-notes"
          type="text"
          placeholder="Write something..."
          className="mt-2 w-full rounded border p-2"
        />
      </aside>
      {children}
    </div>
  );
}
