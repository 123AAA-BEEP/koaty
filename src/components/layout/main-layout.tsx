'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { MobileNav } from './mobile-nav';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Koat Painters
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>
            <Link href="/locations" className="text-gray-600 hover:text-blue-600">
              Locations
            </Link>
            <Link href="/brands" className="text-gray-600 hover:text-blue-600">
              Brands
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Koat Painters</h3>
              <p className="text-gray-400 mb-4">
                Professional painting services in Toronto and the Greater Toronto Area.
              </p>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="text-blue-400 hover:text-blue-300"
              >
                {process.env.NEXT_PUBLIC_COMPANY_PHONE}
              </a>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/interior-painting" className="text-gray-400 hover:text-blue-400">
                    Interior Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/exterior-painting" className="text-gray-400 hover:text-blue-400">
                    Exterior Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/cabinet-painting" className="text-gray-400 hover:text-blue-400">
                    Cabinet Painting
                  </Link>
                </li>
                <li>
                  <Link href="/services/deck-staining" className="text-gray-400 hover:text-blue-400">
                    Deck Staining
                  </Link>
                </li>
                <li>
                  <Link href="/services/interior-limewash" className="text-gray-400 hover:text-blue-400">
                    Interior Limewash
                  </Link>
                </li>
                <li>
                  <Link href="/services/exterior-limewash" className="text-gray-400 hover:text-blue-400">
                    Exterior Limewash
                  </Link>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-xl font-bold mb-4">Service Areas</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/locations/toronto" className="text-gray-400 hover:text-blue-400">
                    Toronto
                  </Link>
                </li>
                <li>
                  <Link href="/locations/mississauga" className="text-gray-400 hover:text-blue-400">
                    Mississauga
                  </Link>
                </li>
                <li>
                  <Link href="/locations/brampton" className="text-gray-400 hover:text-blue-400">
                    Brampton
                  </Link>
                </li>
                <li>
                  <Link href="/locations/vaughan" className="text-gray-400 hover:text-blue-400">
                    Vaughan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-blue-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/quote-calculator" className="text-gray-400 hover:text-blue-400">
                    Quote Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/brands" className="text-gray-400 hover:text-blue-400">
                    Paint Brands
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Koat Painters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 