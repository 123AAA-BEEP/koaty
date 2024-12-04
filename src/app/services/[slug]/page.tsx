import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle, Clock } from 'lucide-react';
import { IMAGES } from '@/lib/constants/images';
import services from '@/data/services.json';
import cities from '@/data/cities.json';
import { ContactForm } from '@/components/forms/contact-form';
import { FAQSection } from '@/components/seo/faq-section';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/seo-schema';
import { getServiceFAQs } from '@/data/faqs';

interface Props {
  params: {
    slug: string;
  };
}

function getServiceImages(serviceSlug: string) {
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
    // Add other cases similar to the service-location page
    default:
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
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | Koat Painters',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `Professional ${service.name} Services | Koat Painters`,
    description: `Expert ${service.name.toLowerCase()} services in Toronto & GTA. Licensed and insured professionals, premium materials, and satisfaction guaranteed. Get your free quote today!`,
    keywords: `${service.name.toLowerCase()}, Toronto painters, GTA painters, professional painting, painting services, painting contractor`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.slug}`,
    },
    openGraph: {
      title: `Professional ${service.name} Services | Koat Painters`,
      description: `Expert ${service.name.toLowerCase()} services in Toronto & GTA. Get your free quote today!`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${service.slug}`,
      siteName: 'Koat Painters',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${getServiceImages(service.slug).main}`,
          width: 1200,
          height: 630,
          alt: `Professional ${service.name} Services`,
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find(s => s.slug === params.slug);
  const mainCities = cities.filter(city => city.isMainCity).slice(0, 6);

  if (!service) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The requested service could not be found.</p>
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
  const faqs = getServiceFAQs(service.name, 'Toronto');

  // Schema markup data
  const serviceSchemaData = {
    name: service.name,
    description: service.description,
    provider: {
      name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Koat Painters',
      address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '',
      telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '',
      email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || '',
    },
    areaServed: 'Toronto & GTA',
    image: `${process.env.NEXT_PUBLIC_SITE_URL}${images.main}`,
  };

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` },
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
          alt={`Professional ${service.name} services`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional {service.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert {service.name.toLowerCase()} services with premium materials and 
              guaranteed satisfaction throughout Toronto and the GTA
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
                  About Our {service.name} Services
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  {service.description} Our experienced team uses premium materials and proven 
                  techniques to deliver exceptional results that exceed your expectations.
                </p>

                {/* Key Benefits */}
                <div className="bg-gray-50 rounded-xl p-8 mb-12">
                  <h3 className="text-2xl font-semibold mb-6">
                    Why Choose Us for {service.name}?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold mb-2">Expert Team</h4>
                        <p className="text-gray-600">Licensed and insured professionals</p>
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
                        <h4 className="font-semibold mb-2">2-Year Warranty</h4>
                        <p className="text-gray-600">Full coverage on all work</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold mb-2">Free Quotes</h4>
                        <p className="text-gray-600">Detailed, no-obligation estimates</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <h3 className="text-2xl font-semibold mb-6">Service Areas</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {mainCities.map((city) => (
                    <Link
                      key={city.id}
                      href={`/services/locations/${service.slug}/${city.slug}`}
                      className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium">{city.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Recent Projects */}
                <h3 className="text-2xl font-semibold mb-6">Recent Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {images.gallery.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${service.name} project ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                {/* Process Section */}
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
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div id="quote" className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
                <ContactForm service={service} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title={`Frequently Asked Questions About ${service.name}`}
      />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch for a free consultation and quote for your {service.name.toLowerCase()} project.
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