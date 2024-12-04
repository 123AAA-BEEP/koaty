'use client';

import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface PaintLine {
  brand: string;
  line: string;
  price: string;
  coverage: string;
  durability: number;
  washability: number;
  voc: string;
  dryTime: string;
  features: string[];
  bestFor: string[];
}

const paintLines: PaintLine[] = [
  {
    brand: "Benjamin Moore",
    line: "Aura®",
    price: "$$$",
    coverage: "350-400 sq ft/gallon",
    durability: 5,
    washability: 5,
    voc: "Zero VOC",
    dryTime: "1 hour to touch, 4 hours to recoat",
    features: [
      "Color Lock® Technology",
      "Extreme hide",
      "Self-priming",
      "Lifetime warranty"
    ],
    bestFor: [
      "Luxury homes",
      "High-traffic areas",
      "Dark colors",
      "Moisture-prone areas"
    ]
  },
  {
    brand: "Benjamin Moore",
    line: "Regal® Select",
    price: "$$",
    coverage: "400-450 sq ft/gallon",
    durability: 4,
    washability: 4,
    voc: "Low VOC",
    dryTime: "1-2 hours to touch, 4 hours to recoat",
    features: [
      "Excellent hide",
      "Easy application",
      "Mildew resistant",
      "20-year warranty"
    ],
    bestFor: [
      "Residential projects",
      "Living rooms",
      "Bedrooms",
      "Light commercial"
    ]
  },
  {
    brand: "Sherwin-Williams",
    line: "Emerald®",
    price: "$$$",
    coverage: "350-400 sq ft/gallon",
    durability: 5,
    washability: 5,
    voc: "Zero VOC",
    dryTime: "1 hour to touch, 4 hours to recoat",
    features: [
      "Advanced stain blocking",
      "Antimicrobial",
      "Self-priming",
      "Lifetime warranty"
    ],
    bestFor: [
      "Premium residential",
      "Healthcare facilities",
      "Bathrooms",
      "Kitchens"
    ]
  },
  {
    brand: "ROMABIO",
    line: "Classico Limewash",
    price: "$$",
    coverage: "250-300 sq ft/gallon",
    durability: 4,
    washability: 3,
    voc: "Zero VOC",
    dryTime: "24-48 hours for full cure",
    features: [
      "Authentic mineral finish",
      "Breathable coating",
      "UV resistant",
      "20-year warranty"
    ],
    bestFor: [
      "Brick homes",
      "Historic properties",
      "Mediterranean style",
      "Natural aesthetics"
    ]
  }
];

export function PaintComparison() {
  const [selectedPaints, setSelectedPaints] = useState<string[]>([]);
  const [filterBrand, setFilterBrand] = useState<string>('all');

  const brands = Array.from(new Set(paintLines.map(p => p.brand)));

  const togglePaint = (paintLine: string) => {
    setSelectedPaints(prev => 
      prev.includes(paintLine)
        ? prev.filter(p => p !== paintLine)
        : [...prev, paintLine].slice(0, 3)
    );
  };

  const filteredPaints = paintLines.filter(
    paint => filterBrand === 'all' || paint.brand === filterBrand
  );

  const renderRating = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < rating ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Brand
          </label>
          <select
            value={filterBrand}
            onChange={(e) => setFilterBrand(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="all">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <p className="text-sm text-gray-600">
          Select up to 3 paint lines to compare
        </p>
      </div>

      {/* Paint Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPaints.map((paint) => (
          <button
            key={`${paint.brand}-${paint.line}`}
            onClick={() => togglePaint(`${paint.brand} ${paint.line}`)}
            className={`text-left p-4 rounded-lg border-2 transition-all ${
              selectedPaints.includes(`${paint.brand} ${paint.line}`)
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{paint.brand}</p>
                <h3 className="font-semibold">{paint.line}</h3>
              </div>
              {selectedPaints.includes(`${paint.brand} ${paint.line}`) && (
                <CheckCircle className="w-5 h-5 text-blue-600" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      {selectedPaints.length > 0 && (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left">Feature</th>
                {selectedPaints.map(paint => (
                  <th key={paint} className="px-4 py-3 text-left">
                    {paint}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { key: 'price', label: 'Price Range' },
                { key: 'coverage', label: 'Coverage' },
                { key: 'durability', label: 'Durability' },
                { key: 'washability', label: 'Washability' },
                { key: 'voc', label: 'VOC Content' },
                { key: 'dryTime', label: 'Dry Time' },
              ].map(({ key, label }) => (
                <tr key={key} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium">{label}</td>
                  {selectedPaints.map(paintName => {
                    const paint = paintLines.find(
                      p => `${p.brand} ${p.line}` === paintName
                    );
                    const value = paint?.[key as keyof PaintLine];
                    return (
                      <td key={`${paintName}-${key}`} className="px-4 py-4">
                        {typeof value === 'number' ? renderRating(value) : value}
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-4 font-medium">Best For</td>
                {selectedPaints.map(paintName => {
                  const paint = paintLines.find(
                    p => `${p.brand} ${p.line}` === paintName
                  );
                  return (
                    <td key={`${paintName}-bestFor`} className="px-4 py-4">
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {paint?.bestFor.map(use => (
                          <li key={use}>{use}</li>
                        ))}
                      </ul>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 