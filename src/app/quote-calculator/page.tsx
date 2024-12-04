import { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Koat Painters',
  description: 'Request a free quote for your painting project. Professional painting services in Toronto and the Greater Toronto Area.',
};

export default function QuotePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Get a Free Quote
            </h1>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you with a detailed quote
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <ContactForm />
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">What's Included</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Detailed project assessment</li>
                <li>• Material cost breakdown</li>
                <li>• Labor estimates</li>
                <li>• Timeline projection</li>
                <li>• Written guarantee</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Licensed and insured professionals</li>
                <li>• Premium quality materials</li>
                <li>• 2-year warranty on all work</li>
                <li>• Competitive pricing</li>
                <li>• Flexible scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 