import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Star, Shield, Paintbrush, Clock } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import services from '@/data/services.json';
import cities from '@/data/cities.json';
import { FAQSection } from '@/components/seo/faq-section';
import { LocalBusinessSchema } from '@/components/seo/seo-schema';
import { generalFAQs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Koat Painters | Professional Painting Services in Toronto & GTA',
  description: 'Premier painting services in Toronto and the GTA. Interior, exterior, residential and commercial painting. Licensed and insured professionals, premium materials, satisfaction guaranteed.',
  keywords: 'painting services, Toronto painters, GTA painters, interior painting, exterior painting, house painters, commercial painting, residential painting',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    title: 'Koat Painters | Professional Painting Services in Toronto & GTA',
    description: 'Transform your space with our professional painting services. Get your free quote today!',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Koat Painters',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}${IMAGES.hero.main}`,
        width: 1200,
        height: 630,
        alt: 'Professional Painting Services',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
};

export default function HomePage() {
  const mainServices = services.slice(0, 6);
  const mainCities = cities.filter(city => city.isMainCity);

  // Schema markup data
  const businessSchemaData = {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Koat Painters',
    description: 'Premier painting services in Toronto and the GTA. Professional painters delivering quality results for residential and commercial properties.',
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '',
    telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '',
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || '',
    image: `${process.env.NEXT_PUBLIC_SITE_URL}${IMAGES.hero.main}`,
    priceRange: '$$',
    areaServed: ['Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Richmond Hill', 'Markham'],
  };

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <LocalBusinessSchema business={businessSchemaData} />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <Image
          src={IMAGES.hero.main}
          alt="Professional painting services in Toronto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Space with Professional Painters
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert painting services for residential and commercial properties in Toronto and the GTA
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start">
              <Star className="w-8 h-8 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Top-grade materials and expert craftsmanship</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="w-8 h-8 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2-Year Warranty</h3>
                <p className="text-gray-600">Full coverage on all our work</p>
              </div>
            </div>
            <div className="flex items-start">
              <Paintbrush className="w-8 h-8 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Licensed and insured professionals</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-8 h-8 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">On-Time Service</h3>
                <p className="text-gray-600">Projects completed on schedule</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive painting solutions for every part of your property
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Service Areas</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professional painting services throughout the Greater Toronto Area
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mainCities.map((city) => (
              <Link
                key={city.id}
                href={`/locations/${city.slug}`}
                className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold">{city.name}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={generalFAQs}
        title="Frequently Asked Questions"
      />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch for a free consultation and quote for your painting project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/quote-calculator"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Calculate Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 