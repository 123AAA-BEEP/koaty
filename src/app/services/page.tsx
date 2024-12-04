import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import services from '@/data/services.json';
import { FAQSection } from '@/components/seo/faq-section';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/seo-schema';
import { generalFAQs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Professional Painting Services | Koat Painters',
  description: 'Comprehensive painting services including interior, exterior, cabinet painting, and specialty finishes. Quality workmanship and satisfaction guaranteed.',
  keywords: 'painting services, interior painting, exterior painting, cabinet painting, house painters, commercial painting, residential painting',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
  },
  openGraph: {
    title: 'Professional Painting Services | Koat Painters',
    description: 'Quality painting services for residential and commercial properties. Get your free quote today!',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
    siteName: 'Koat Painters',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}${IMAGES.services.interior.livingRoom}`,
        width: 1200,
        height: 630,
        alt: 'Professional Painting Services',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
};

const serviceImages = {
  'interior-painting': IMAGES.services.interior.livingRoom,
  'exterior-painting': IMAGES.services.exterior.house1,
  'cabinet-painting': IMAGES.services.cabinet.kitchen1,
  'deck-staining': IMAGES.services.deck.deck1,
  'brick-painting': IMAGES.services.brick.brick1,
  'fence-staining': IMAGES.services.deck.fence,
  'limewash': IMAGES.services.limewash.exterior1,
  'interior-limewash': IMAGES.services.limewash.interior1,
  'drywall-repair': IMAGES.services.drywall.repair1,
  'drywall-patch': IMAGES.services.drywall.patch1,
  'popcorn-ceiling-removal': IMAGES.services.ceiling.popcorn1,
  'texture-ceiling': IMAGES.services.ceiling.texture1,
  'stucco-repair': IMAGES.services.stucco.repair1,
  'wallpaper': IMAGES.services.wallpaper.install1,
  'power-washing': IMAGES.services.exterior.house2,
  'pressure-washing': IMAGES.services.exterior.house3,
  'condo-painting': IMAGES.services.interior.bedroom,
  'plaster-finish': IMAGES.services.stucco.finish1,
  'carpentry': IMAGES.services.carpentry.work1,
  'caulking': IMAGES.services.misc.caulking1,
  'declutter': IMAGES.services.misc.declutter1,
  'odor-removal': IMAGES.services.misc.odor1,
} as const;

export default function ServicesPage() {
  // Schema markup data
  const businessSchemaData = {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Koat Painters',
    description: 'Professional painting services for residential and commercial properties in Toronto and the GTA.',
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '',
    telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '',
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || '',
    image: `${process.env.NEXT_PUBLIC_SITE_URL}${IMAGES.services.interior.livingRoom}`,
    priceRange: '$$',
    areaServed: ['Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Richmond Hill', 'Markham'],
  };

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ];

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <LocalBusinessSchema business={businessSchemaData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={IMAGES.services.interior.livingRoom}
          alt="Professional painting services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Quality painting services for every part of your home or business
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/quote-calculator"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors"
              >
                Calculate Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={serviceImages[service.slug as keyof typeof serviceImages] || IMAGES.services.interior.livingRoom}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Koat Painters?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">Licensed and insured professionals with years of experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Premium Materials</h3>
              <p className="text-gray-600">We use only the highest quality paints and materials</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">2-Year Warranty</h3>
              <p className="text-gray-600">Full warranty coverage on all our work</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Free Quotes</h3>
              <p className="text-gray-600">Detailed, no-obligation quotes for your project</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={generalFAQs}
        title="Common Questions About Our Services"
      />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on any of our services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
} 