import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import cities from '@/data/cities.json';

export const metadata: Metadata = {
  title: 'Service Areas | Koat Painters',
  description: 'Professional painting services available throughout Toronto and the Greater Toronto Area. Find a painter in your neighborhood.',
};

// Group cities by region
const groupedCities = cities.reduce((acc, city) => {
  if (!acc[city.region]) {
    acc[city.region] = [];
  }
  acc[city.region].push(city);
  return acc;
}, {} as Record<string, typeof cities>);

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src={IMAGES.services.exterior.house2}
          alt="Service areas in Toronto and GTA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Service Areas
            </h1>
            <p className="text-xl text-white/90">
              Professional painting services throughout Toronto and the Greater Toronto Area
            </p>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedCities).map(([region, cities]) => (
              <div key={region} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{region}</h2>
                    <p className="text-gray-600 text-sm">
                      {cities.length} service {cities.length === 1 ? 'area' : 'areas'}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cities.map((city) => (
                    <li key={city.id}>
                      <Link
                        href={`/services/locations/interior-painting/${city.slug}`}
                        className="group flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <span className="flex-grow">{city.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cities.filter(city => city.isMainCity).slice(0, 3).map((city) => (
              <div key={city.id} className="group relative rounded-xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={IMAGES.services.exterior.house1}
                    alt={`Painting services in ${city.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{city.name}</h3>
                    <Link
                      href={`/services/locations/interior-painting/${city.slug}`}
                      className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
                    >
                      View Services <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote in your area.
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