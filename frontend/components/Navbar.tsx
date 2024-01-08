import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center space-x-2">
      <div className="flex space-x-4 bg-slate-300 p-3 rounded-md">
        <Link href={`/`}>Boardgame Finder</Link>
      </div>
      <div className="flex space-x-4">
        <div>Dark mode?</div>
        <div>Lang (EN/FI)?</div>
      </div>
    </nav>
  );
}
