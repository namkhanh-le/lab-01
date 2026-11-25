import { getMovies, getVotes } from "@/lib/movies";

export async function TopMovies() {
    const [movies, { votes, countedAt }] = await Promise.all([
        getMovies({ cache: "no-store" }),
        getVotes({ cache: "no-store" }),
    ]);
    const topMovies = [...votes]
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);

    const formattedDate = new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Europe/Paris",
    }).format(new Date(countedAt));

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold">Top Movies</h2>
            <p className="mt-1 text-sm text-zinc-500">
                Vote results counted at {formattedDate}
            </p>

            <ol className="mt-4 space-y-3">
                {topMovies.map((vote) => {
                    const movie = movies.find((item) => item.id === vote.movieId);

                    if (!movie) return null;

                    return (
                        <li key={movie.id} className="rounded-lg border p-4">
                            <div className="font-semibold">{movie.title}</div>
                            <div className="text-sm text-zinc-500">
                                {vote.count} votes
                            </div>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}