import Link from "next/link";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="p-8 space-y-3">
        <h1 className="text-2xl font-bold">About us</h1>
        <p>Location: At your mothers house watching your dumbass fail</p>
        <p>Open hours: Everyday from 01:00 am - 01:01am</p>
        <p>Phone: 77576765 (not mine)</p>
        <div className="pt-4">
          <Link
            href="/"
            className="text-blue-600 no-underline hover:text-white"
          >
            ← Back to home page
          </Link>
        </div>
      </main>
    </div>
  );
}
