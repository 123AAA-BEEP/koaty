import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import services from '@/data/services.json';
import cities from '@/data/cities.json';
import { ContactForm } from '@/components/forms/contact-form';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find(c => c.slug === params.slug);

  if (!city) {
    return {
      title: 'Location Not Found | Koat Painters',
    };
  }

  return {
    title: `Professional Painters in ${city.name} | Koat Painters`,
    description: `Expert painting services in ${city.name}. Interior and exterior painting, cabinet refinishing, deck staining, and more. Quality workmanship guaranteed.`,
    openGraph: {
      title: `Professional Painters in ${city.name} | Koat Painters`,
      description: `Expert painting services in ${city.name}. Interior and exterior painting, cabinet refinishing, deck staining, and more. Quality workmanship guaranteed.`,
      images: [IMAGES.services.interior.livingRoom],
    },
  };
}

export default function LocationPage({ params }: Props) {
  const city = cities.find(c => c.slug === params.slug);
  const nearbyCities = cities
    .filter(c => c.id !== city?.id)
    .slice(0, 6);

  if (!city) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <p className="text-gray-600 mb-8">The requested location could not be found.</p>
          <Link
            href="/locations"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  const serviceImages = {
    'interior-painting': IMAGES.services.interior.livingRoom,
    'exterior-painting': IMAGES.services.exterior.house1,
    'cabinet-painting': IMAGES.services.cabinet.kitchen1,
    'deck-staining': IMAGES.services.deck.deck1,
    'brick-painting': IMAGES.services.brick.brick1,
    'interior-limewash': IMAGES.services.limewash.interior1,
    'exterior-limewash': IMAGES.services.limewash.exterior1,
  } as const;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={IMAGES.locations[city.slug as keyof typeof IMAGES.locations] || IMAGES.services.exterior.house1}
          alt={`Professional painters in ${city.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Painters in {city.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transform your space with our expert painting services.
              Quality workmanship guaranteed.
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

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={serviceImages[service.slug as keyof typeof serviceImages] || IMAGES.services.interior.livingRoom}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/services/locations/${service.slug}/${city.slug}`}
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

      {/* Quote Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
              <ContactForm city={city} />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            We Also Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nearbyCities.map((nearbyCity) => (
              <Link
                key={nearbyCity.id}
                href={`/locations/${nearbyCity.slug}`}
                className="group flex items-center text-gray-600 hover:text-blue-600"
              >
                <span className="flex-grow">{nearbyCity.name}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 