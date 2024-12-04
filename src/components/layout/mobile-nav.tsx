'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-blue-600"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600 hover:text-blue-600"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-6">
              <Link
                href="/services"
                className="block text-xl font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/locations"
                className="block text-xl font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="/brands"
                className="block text-xl font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Brands
              </Link>
              <Link
                href="/contact"
                className="block text-xl font-medium text-gray-900 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>

              <div className="pt-6 border-t">
                <h3 className="text-sm font-semibold text-gray-400 mb-4">Quick Links</h3>
                <div className="space-y-4">
                  <Link
                    href="/quote-calculator"
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Quote Calculator
                  </Link>
                  <Link
                    href="/services/interior-painting"
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Interior Painting
                  </Link>
                  <Link
                    href="/services/exterior-painting"
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Exterior Painting
                  </Link>
                  <Link
                    href="/services/interior-limewash"
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Interior Limewash
                  </Link>
                  <Link
                    href="/services/exterior-limewash"
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Exterior Limewash
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
} 