import Link from "next/link";
import Navbar from "../components/Navbar";

const movies = [
  { id: 1, title: "Сансрын аялал", emoji: "🚀", time: "14:00" },
  { id: 2, title: "Ойн нууц", emoji: "🌲", time: "16:30" },
  { id: 3, title: "Далайн баатар", emoji: "🌊", time: "18:00" },
  { id: 4, title: "Луу бид хоёр", emoji: "🐉", time: "20:15" },
];

export default function MoviesPage() {
  return (
    <div>
      <Navbar />
      <main className="p-8 space-y-6">
        <h1 className="text-2xl font-bold">Movies List</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movies/${movie.id}`}
              className="block rounded-lg border border-gray-200 p-4 hover:border-blue-500"
            >
              <p className="text-2xl">{movie.emoji}</p>
              <h2 className="mt-2 font-semibold text-lg">{movie.title}</h2>
              <p className="text-sm text-gray-500">Time: {movie.time}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
