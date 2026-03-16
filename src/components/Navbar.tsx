import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 mb-12 border-b border-slate-800">
      <Link href="/" className="text-xl font-bold tracking-tight text-white">
        Shashwata Mandal
      </Link>
      <div className="flex gap-6 text-sm font-medium text-slate-400">
        <Link href="/" className="hover:text-blue-400 transition-colors">About</Link>
        <Link href="/publications" className="hover:text-blue-400 transition-colors">Publications</Link>
        <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
        <Link href="/cv" className="hover:text-blue-400 transition-colors">CV</Link>
      </div>
    </nav>
  );
}