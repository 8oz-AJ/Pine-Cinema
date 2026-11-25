import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold">PineCinema</h1>
        <p className="text-gray-600">
          Watch the worst movies in the worst condition. by: 8oz
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="/movies"
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            See Movie List
          </Link>
          <Link
            href="/about"
            className="rounded border border-gray-300 px-4 py-2"
          >
            About us
          </Link>
        </div>
      </main>
    </div>
  );
}
