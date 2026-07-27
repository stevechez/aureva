"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900"
          onClick={closeMenu}
        >
          Aureva
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link
            href="#vision"
            className="hover:text-gray-900 transition-colors"
          >
            Vision
          </Link>
          <Link
            href="#what-we-do"
            className="hover:text-gray-900 transition-colors"
          >
            What We Do
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-gray-900 transition-colors"
          >
            Portfolio
          </Link>
          <Link href="#about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-slate-50 border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible pointer-events-auto pb-4"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 pt-4 space-y-4 text-base font-medium text-gray-600">
          <Link
            href="#vision"
            onClick={closeMenu}
            className="block hover:text-gray-900"
          >
            Vision
          </Link>
          <Link
            href="#what-we-do"
            onClick={closeMenu}
            className="block hover:text-gray-900"
          >
            What We Do
          </Link>
          <Link
            href="#portfolio"
            onClick={closeMenu}
            className="block hover:text-gray-900"
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            onClick={closeMenu}
            className="block hover:text-gray-900"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
