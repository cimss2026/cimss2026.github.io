'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Program', href: '/program' },
    { name: 'Keynote', href: '/keynote' },
    { name: 'Call for Papers', href: '/call-for-papers' },
    { name: 'Submissions', href: '/submissions' },
    { name: 'Registration', href: 'https://acns2026.github.io/registration.html', external: true },
    { name: 'Important Dates', href: '/important-dates' },
    { name: 'Organization', href: '/organization' },
    { name: 'Venue', href: '/venue' },
    { name: 'Past Events', href: '/past-events' },
  ];

  return (
    <nav className="bg-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Title */}
          <Link href="/" className="text-2xl font-bold hover:text-primary-200 transition-colors">
            CIMSS 2026
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded hover:bg-primary-700 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded hover:bg-primary-700 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded hover:bg-primary-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 rounded hover:bg-primary-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 rounded hover:bg-primary-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
