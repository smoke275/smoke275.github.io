"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'About' },
    { href: '/publications', label: 'Publications' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center py-6 mb-12 border-b border-slate-800 gap-4 sm:gap-0">
      <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
        SM.
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-1 py-2 transition-colors ${
              pathname === link.href ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {link.label}
            {pathname === link.href && (
              <motion.div
                layoutId="navbar-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400 rounded-full"
                initial={false}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        ))}
        <a 
          href="/resources/resume/Resume_SMandal_RSE_V4.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-1 py-2 text-slate-400 hover:text-slate-200 transition-colors"
        >
          CV
        </a>
      </div>
    </nav>
  );
}