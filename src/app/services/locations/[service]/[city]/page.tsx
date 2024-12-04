import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle, MapPin, Clock } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import services from '@/data/services.json';
import cities from '@/data/cities.json';
import { ContactForm } from '@/components/forms/contact-form';
import { FAQSection } from '@/components/seo/faq-section';
import { ServiceSchema, LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/seo-schema';
import { getServiceFAQs } from '@/data/faqs';

interface Props {
  params: {
    service: string;
    city: string;
  };
}

interface ServiceImages {
  main: string;
  gallery: string[];
}

function getServiceImages(serviceSlug: string): ServiceImages {
  switch (serviceSlug) {
    case 'interior-painting':
      return {
        main: IMAGES.services.interior.livingRoom,
        gallery: [
          IMAGES.services.interior.livingRoom,
          IMAGES.services.interior.bedroom,
          IMAGES.services.interior.kitchen,
        ],
      };
    case 'exterior-painting':
      return {
        main: IMAGES.services.exterior.house1,
        gallery: [
          IMAGES.services.exterior.house1,
          IMAGES.services.exterior.house2,
          IMAGES.services.exterior.house3,
        ],
      };
    case 'cabinet-painting':
      return {
        main: IMAGES.services.cabinet.kitchen1,
        gallery: [
          IMAGES.services.cabinet.kitchen1,
          IMAGES.services.cabinet.kitchen2,
          IMAGES.services.cabinet.kitchen3,
        ],
      };
    case 'deck-staining':
    case 'fence-staining':
      return {
        main: IMAGES.services.deck.deck1,
        gallery: [
          IMAGES.services.deck.deck1,
          IMAGES.services.deck.deck2,
          IMAGES.services.deck.fence,
        ],
      };
    case 'brick-painting':
      return {
        main: IMAGES.services.brick.brick1,
        gallery: [
          IMAGES.services.brick.brick1,
          IMAGES.services.brick.brick2,
          IMAGES.services.brick.brick3,
        ],
      };
    case 'limewash':
      return {
        main: IMAGES.services.limewash.exterior1,
        gallery: [
          IMAGES.services.limewash.exterior1,
          IMAGES.services.limewash.exterior2,
          IMAGES.services.limewash.interior1,
        ],
      };
    case 'interior-limewash':
      return {
        main: IMAGES.services.limewash.interior1,
        gallery: [
          IMAGES.services.limewash.interior1,
          IMAGES.services.limewash.interior2,
          IMAGES.services.limewash.exterior1,
        ],
      };
    case 'exterior-limewash':
      return {
        main: IMAGES.services.limewash.exterior1,
        gallery: [
          IMAGES.services.limewash.exterior1,
          IMAGES.services.limewash.exterior2,
          IMAGES.services.limewash.interior1,
        ],
      };
    case 'power-washing':
    case 'pressure-washing':
      return {
        main: IMAGES.services.exterior.house1,
        gallery: [
          IMAGES.services.exterior.house1,
          IMAGES.services.exterior.house2,
          IMAGES.services.exterior.house3,
        ],
      };
    case 'drywall-repair':
    case 'drywall-patch':
    case 'popcorn-ceiling-removal':
    case 'texture-ceiling':
      return {
        main: IMAGES.services.interior.livingRoom,
        gallery: [
          IMAGES.services.interior.livingRoom,
          IMAGES.services.interior.bedroom,
          IMAGES.services.interior.kitchen,
        ],
      };
    case 'stucco-repair':
      return {
        main: IMAGES.services.brick.brick1,
        gallery: [
          IMAGES.services.brick.brick1,
          IMAGES.services.brick.brick2,
          IMAGES.services.exterior.house1,
        ],
      };
    case 'wallpaper':
    case 'condo-painting':
    case 'plaster-finish':
      return {
        main: IMAGES.services.interior.livingRoom,
        gallery: [
          IMAGES.services.interior.livingRoom,
          IMAGES.services.interior.bedroom,
          IMAGES.services.interior.kitchen,
        ],
      };
    default:
      // For all other services, use interior painting images as default
      return {
        main: IMAGES.services.interior.livingRoom,
        gallery: [
          IMAGES.services.interior.livingRoom,
          IMAGES.services.interior.bedroom,
          IMAGES.services.interior.kitchen,
        ],
      };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find(s => s.slug === params.service);
  const city = cities.find(c => c.slug === params.city);

  if (!service || !city) {
    return {
      title: 'Service Not Found | Koat Painters',
      description: 'The requested service or location could not be found.',
    };
  }

  return {
    title: `Professional ${service.name} in ${city.name} | Koat Painters`,
    description: `Expert ${service.name.toLowerCase()} services in ${city.name}. Licensed and insured painters, premium materials, and satisfaction guaranteed. Get your free quote today!`,
    keywords: `${service.name.toLowerCase()}, ${city.name} painters, professional painting, house painting, ${city.name}, painting services, painting contractor`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/locations/${service.slug}/${city.slug}`,
    },
    openGraph: {
      title: `Professional ${service.name} in ${city.name} | Koat Painters`,
      description: `Expert ${service.name.toLowerCase()} services in ${city.name}. Get your free quote today!`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/locations/${service.slug}/${city.slug}`,
      siteName: 'Koat Painters',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${getServiceImages(service.slug).main}`,
          width: 1200,
          height: 630,
          alt: `${service.name} in ${city.name}`,
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = services.find(s => s.slug === params.service);
  const city = cities.find(c => c.slug === params.city);

  if (!service || !city) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The requested service or location could not be found.</p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const images = getServiceImages(service.slug);
  const faqs = getServiceFAQs(service.name, city.name);

  // Schema markup data
  const serviceSchemaData = {
    name: `${service.name} in ${city.name}`,
    description: service.description,
    provider: {
      name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Koat Painters',
      address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '',
      telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '',
      email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || '',
    },
    areaServed: city.name,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}${images.main}`,
  };

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` },
    { name: city.name, url: `/services/locations/${service.slug}/${city.slug}` },
  ];

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <ServiceSchema service={serviceSchemaData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <Image
          src={images.main}
          alt={`${service.name} in ${city.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {service.name} in {city.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional {service.name.toLowerCase()} services with premium quality materials 
              and expert craftsmanship in {city.name} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#quote"
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

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service Information */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">
                  Professional {service.name} in {city.name}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Looking for reliable {service.name.toLowerCase()} services in {city.name}? 
                  Koat Painters delivers exceptional results through our commitment to quality, 
                  attention to detail, and customer satisfaction. Our experienced team uses premium 
                  materials and proven techniques to transform your space.
                </p>

                {/* Key Benefits */}
                <div className="bg-gray-50 rounded-xl p-8 mb-12">
                  <h3 className="text-2xl font-semibold mb-6">
                    Why Choose Us for {service.name} in {city.name}?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold mb-2">Licensed & Insured</h4>
                        <p className="text-gray-600">Fully licensed and insured professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold mb-2">Premium Materials</h4>
                        <p className="text-gray-600">High-quality paints and materials</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold mb-2">Satisfaction Guaranteed</h4>
                        <p className="text-gray-600">100% satisfaction guarantee on all work</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold mb-2">Competitive Pricing</h4>
                        <p className="text-gray-600">Fair and transparent pricing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Process */}
                <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-2">Free Consultation</h4>
                      <p className="text-gray-600">Detailed assessment of your project needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-2">Project Planning</h4>
                      <p className="text-gray-600">Color and material selection assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-2">Surface Preparation</h4>
                      <p className="text-gray-600">Thorough preparation and repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      4
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-2">Expert Application</h4>
                      <p className="text-gray-600">Professional application with attention to detail</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      5
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold mb-2">Final Inspection</h4>
                      <p className="text-gray-600">Thorough cleanup and quality check</p>
                    </div>
                  </div>
                </div>

                {/* Service Area Info */}
                <div className="bg-gray-50 rounded-xl p-8 mb-12">
                  <h3 className="text-2xl font-semibold mb-6">Service Area Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold mb-2">Coverage Area</h4>
                        <p className="text-gray-600">{city.name} and surrounding areas</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold mb-2">Business Hours</h4>
                        <p className="text-gray-600">Mon-Fri: 8am-6pm<br />Sat: 9am-4pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Projects */}
                <h3 className="text-2xl font-semibold mb-6">Recent Projects in {city.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {images.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${service.name} project ${index + 1} in ${city.name}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="not-prose">
                  <Link
                    href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now for a Free Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div id="quote" className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
                <ContactForm service={service} city={city} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add FAQ Section before the closing div */}
      <FAQSection
        faqs={faqs}
        title={`Frequently Asked Questions About ${service.name} in ${city.name}`}
      />
    </div>
  );
} 