import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 border-b border-gray-200 px-6 py-4">
      <Link href="/" className="font-bold text-lg">
        🎬 PineCinema
      </Link>
      <Link href="/movies" className="hover:underline">
        Movies
      </Link>
      <Link href="/about" className="hover:underline">
        About us
      </Link>
    </nav>
  );
}
