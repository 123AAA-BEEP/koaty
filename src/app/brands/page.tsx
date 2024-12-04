import { Metadata } from 'next';
import Image from 'next/image';
import { PaintComparison } from '@/components/paint/paint-comparison';
import { ColorVisualizer } from '@/components/paint/color-visualizer';
import brands from '@/data/brands.json';

export const metadata: Metadata = {
  title: 'Paint Brands & Products | Koat Painters',
  description: 'Explore our premium paint brands and products. Compare different paint lines, visualize colors, and find the perfect paint for your project.',
  openGraph: {
    title: 'Paint Brands & Products | Koat Painters',
    description: 'Explore our premium paint brands and products. Compare different paint lines, visualize colors, and find the perfect paint for your project.',
    type: 'website',
  },
};

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Premium Paint Brands & Products
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We partner with the world's leading paint manufacturers to bring you superior quality,
          durability, and stunning finishes for every project.
        </p>
      </section>

      {/* Featured Brands */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Our Premium Paint Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.paintBrands.map((brand) => (
            <div key={brand.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="h-16 relative mb-4">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
              <p className="text-gray-600 mb-4">{brand.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium">Featured Products:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {brand.products.map((product) => (
                    <li key={product.name}>
                      {product.name} - {product.type}
                    </li>
                  ))}
                </ul>
              </div>
              {brand.certifications && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Paint Comparison Tool */}
      <section className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-2">Paint Comparison Tool</h2>
        <p className="text-gray-600 mb-8">
          Compare different paint lines to find the perfect match for your project.
          Select up to three paint lines to see detailed comparisons of their features and specifications.
        </p>
        <PaintComparison />
      </section>

      {/* Color Visualizer */}
      <section className="bg-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-2">Color Visualizer</h2>
        <p className="text-gray-600 mb-8">
          See how different paint colors look in various room settings.
          Choose from our curated collection of popular colors or enter your own custom color.
        </p>
        <ColorVisualizer />
      </section>

      {/* Specialty Products */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Professional Equipment & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.specialtyProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="text-sm text-blue-600 mb-4">{product.category}</div>
              <p className="text-gray-600 flex-grow">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white rounded-xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Painting Project?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our team of experts can help you choose the perfect paint and finish for your space.
          Get in touch for a free consultation and quote.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
} 