interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    name: string;
    address: string;
    telephone: string;
    email: string;
  };
  areaServed: string;
  image?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

interface LocalBusinessSchema {
  name: string;
  description: string;
  address: string;
  telephone: string;
  email: string;
  image?: string;
  priceRange?: string;
  areaServed?: string[];
}

export function ServiceSchema({ service }: { service: ServiceSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": service.provider.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": service.provider.address
      },
      "telephone": service.provider.telephone,
      "email": service.provider.email
    },
    "areaServed": service.areaServed,
    ...(service.image && { "image": service.image }),
    ...(service.aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": service.aggregateRating.ratingValue,
        "reviewCount": service.aggregateRating.reviewCount
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({ business }: { business: LocalBusinessSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "description": business.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address
    },
    "telephone": business.telephone,
    "email": business.email,
    ...(business.image && { "image": business.image }),
    ...(business.priceRange && { "priceRange": business.priceRange }),
    ...(business.areaServed && { "areaServed": business.areaServed })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string; }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 