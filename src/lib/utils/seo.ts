import { type Service } from '@/types/service';
import { type City } from '@/types/city';

export function generateServiceLocationTitle(service: Service, city: City): string {
  return `${service.name} in ${city.name} | Koat Painters`;
}

export function generateServiceLocationDescription(service: Service, city: City): string {
  return `Professional ${service.name.toLowerCase()} services in ${city.name}. Koat Painters offers expert painting solutions with quality materials and competitive pricing. Get a free quote today!`;
}

export function generateServiceLocationPath(service: Service, city: City): string {
  return `/services/${service.slug}-in-${city.slug}`;
}

export function generateServiceLocationSchema(service: Service, city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.name}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Koat Painters',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressRegion: 'ON',
        addressCountry: 'CA'
      },
      url: `https://koatpainters.com${generateServiceLocationPath(service, city)}`,
      telephone: '+14168717488',
      areaServed: {
        '@type': 'City',
        name: city.name
      }
    },
    areaServed: {
      '@type': 'City',
      name: city.name
    },
    serviceType: service.name
  };
}

interface FAQ {
  question: string;
  answer: string;
}

export function generateServiceLocationFAQs(service: Service, city: City): FAQ[] {
  const faqs: FAQ[] = [
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
      answer: `The cost of ${service.name.toLowerCase()} in ${city.name} varies depending on factors such as project size, surface condition, and specific requirements. We provide free, detailed quotes after assessing your project. Our prices are competitive and transparent, with no hidden fees.`
    },
    {
      question: `How long does ${service.name.toLowerCase()} take in ${city.name}?`,
      answer: `Project duration depends on scope and complexity. A typical ${service.name.toLowerCase()} project in ${city.name} can take 1-5 days. We provide detailed timelines during consultation and work efficiently to minimize disruption while ensuring quality results.`
    },
    {
      question: `Do you offer warranties for ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `Yes, we offer a comprehensive 2-year warranty on all ${service.name.toLowerCase()} projects in ${city.name}. This covers both labor and materials, demonstrating our commitment to quality and customer satisfaction.`
    },
    {
      question: `What areas around ${city.name} do you serve for ${service.name.toLowerCase()}?`,
      answer: `We provide ${service.name.toLowerCase()} services throughout ${city.name} and surrounding areas in ${city.region}. Contact us to confirm service availability in your specific location.`
    },
    {
      question: `What preparation is needed for ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `We handle all necessary preparation for ${service.name.toLowerCase()} projects in ${city.name}, including cleaning, repairs, and surface preparation. We'll provide specific preparation guidelines during consultation based on your project needs.`
    }
  ];

  // Add service-specific FAQs
  switch (service.slug) {
    case 'interior-painting':
      faqs.push({
        question: `What types of paint do you use for interior painting in ${city.name}?`,
        answer: 'We use premium, low-VOC paints from trusted brands like Benjamin Moore and Sherwin-Williams, ensuring excellent coverage, durability, and indoor air quality.'
      });
      break;
    case 'exterior-painting':
      faqs.push({
        question: `What weather conditions are suitable for exterior painting in ${city.name}?`,
        answer: 'We carefully monitor weather conditions and schedule exterior painting when temperatures are between 10-30°C with low humidity and no rain forecast. We plan projects according to local weather patterns to ensure optimal results.'
      });
      break;
    case 'cabinet-painting':
      faqs.push({
        question: `Can you change cabinet colors completely in ${city.name}?`,
        answer: "Yes, we can transform your cabinets to any color you desire. We use specialized cabinet paint and techniques to ensure a factory-like finish that is durable and beautiful."
      });
      break;
  }

  return faqs;
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
} 