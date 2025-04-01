import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link href="/" className="text-xl font-bold">📊 Crypto Dashboard</Link>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/favorites" className="hover:underline">Favoritos</Link>
      </div>
    </nav>
  );
}
