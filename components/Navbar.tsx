"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "Qui sommes-nous" },
  { href: "/informations-togo", label: "Infos Togo" },
  { href: "/nos-actions", label: "Nos Actions" },
  { href: "/stages-benevoles", label: "Stages & Bénévolat" },
  { href: "/preparation-voyage", label: "Préparation au Voyage" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-black text-green-700">ASB</span>
              <span className="text-2xl font-black text-yellow-500">-</span>
              <span className="text-2xl font-black text-red-700">TOGO</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-green-700 text-white text-sm font-semibold rounded-md hover:bg-green-800 transition-colors"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-2 bg-green-700 text-white text-sm font-semibold rounded-md text-center hover:bg-green-800 transition-colors"
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
