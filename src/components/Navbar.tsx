import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 mb-12 border-b border-gray-200">
      <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900">
        Shashwata Mandal
      </Link>
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="/publications" className="hover:text-blue-600 transition-colors">Publications</Link>
        <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
        <Link href="/cv" className="hover:text-blue-600 transition-colors">CV</Link>
      </div>
    </nav>
  );
}