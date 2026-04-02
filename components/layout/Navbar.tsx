"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/#research" },
  { label: "Products", href: "/products" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* NAVBAR */}
      <nav className="mx-3 mt-3 flex items-center justify-between rounded-2xl border border-gray-200 bg-white/70 px-4 py-2 backdrop-blur-xl shadow-lg md:mx-6 md:px-8">
        <Logo />

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`relative transition ${
                  pathname === link.href
                    ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-full p-[1.5px] bg-linear-to-r from-blue-600 to-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.35)] transition"
          >
            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 hover:text-blue-600">
              Contact Us
            </span>
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-800 hover:bg-gray-100"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl rounded-l-3xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <span className="text-lg font-bold">ARIGEN</span>
              <button
                onClick={closeMenu}
                className="p-2 rounded-full bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col px-6 py-6 space-y-5 text-base font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block ${
                      pathname === link.href
                        ? "text-blue-600 font-semibold"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="px-6">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full text-center rounded-full bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white">
        <Image src="/image.png" alt="logo" fill className="object-contain" />
      </div>
      <span className="font-bold text-gray-900">ARIGEN</span>
    </Link>
  );
}
