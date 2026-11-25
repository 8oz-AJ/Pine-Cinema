import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function MovieTicketPage() {
  return (
    <div>
      <Navbar />
      <main className="p-8 space-y-3">
        <h1 className="text-2xl font-bold">🎟️ Order tickets</h1>
        <p>Ticket Price: 15,000₮</p>
        <p className="text-gray-600">
          Check seat number and be at the cinema 15 min before the movie starts
        </p>
        <div className="pt-4">
          <Link href="/movies" className="text-blue-600 hover:underline">
            ← Back to home page
          </Link>
        </div>
      </main>
    </div>
  );
}
