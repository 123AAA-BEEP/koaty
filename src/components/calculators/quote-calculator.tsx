'use client';

import { useState } from 'react';
import { Service } from '@/types/service';

export interface QuoteCalculatorProps {
  service: Service;
  onSaveQuote: (quote: { lowEstimate: number; highEstimate: number }) => void;
}

export function QuoteCalculator({ service, onSaveQuote }: QuoteCalculatorProps) {
  const [squareFeet, setSquareFeet] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(0);
  const [coats, setCoats] = useState<number>(2);
  const [wallCondition, setWallCondition] = useState<'good' | 'fair' | 'poor'>('good');

  // Base rates per square foot
  const baseRates = {
    'interior-painting': { min: 2.5, max: 4.0 },
    'exterior-painting': { min: 3.0, max: 4.5 },
    'cabinet-painting': { min: 80, max: 100 }, // per cabinet door/drawer
    'deck-staining': { min: 2.0, max: 3.5 },
    'brick-painting': { min: 3.5, max: 5.0 },
    'interior-limewash': { min: 3.0, max: 4.5 },
    'exterior-limewash': { min: 4.0, max: 5.5 },
  } as const;

  // Condition multipliers
  const conditionMultipliers = {
    good: 1,
    fair: 1.2,
    poor: 1.5,
  };

  // Calculate estimate
  const calculateEstimate = () => {
    const baseRate = baseRates[service.slug as keyof typeof baseRates] || baseRates['interior-painting'];
    const multiplier = conditionMultipliers[wallCondition];
    let area = squareFeet;

    // For cabinet painting, use number of doors/drawers instead of square feet
    if (service.slug === 'cabinet-painting') {
      area = rooms; // rooms represents number of cabinet doors/drawers in this case
    }

    const lowEstimate = Math.round(area * baseRate.min * multiplier * coats);
    const highEstimate = Math.round(area * baseRate.max * multiplier * coats);

    return { lowEstimate, highEstimate };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const estimate = calculateEstimate();
    onSaveQuote(estimate);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {service.slug === 'cabinet-painting' ? (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Cabinet Doors/Drawers
          </label>
          <input
            type="number"
            min="0"
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value) || 0)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
            required
          />
        </div>
      ) : (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Square Feet
          </label>
          <input
            type="number"
            min="0"
            value={squareFeet}
            onChange={(e) => setSquareFeet(parseInt(e.target.value) || 0)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
            required
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Number of Coats
        </label>
        <select
          value={coats}
          onChange={(e) => setCoats(parseInt(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
        >
          <option value={1}>1 Coat</option>
          <option value={2}>2 Coats</option>
          <option value={3}>3 Coats</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Surface Condition
        </label>
        <select
          value={wallCondition}
          onChange={(e) => setWallCondition(e.target.value as 'good' | 'fair' | 'poor')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 sm:text-sm"
        >
          <option value="good">Good - Minor repairs needed</option>
          <option value="fair">Fair - Some repairs needed</option>
          <option value="poor">Poor - Significant repairs needed</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:text-sm"
        >
          Calculate Estimate
        </button>
      </div>

      {/* Estimate Preview */}
      {(squareFeet > 0 || (service.slug === 'cabinet-painting' && rooms > 0)) && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900">Estimated Cost</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Based on your inputs, we estimate the cost to be between:
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              ${calculateEstimate().lowEstimate.toLocaleString()} - ${calculateEstimate().highEstimate.toLocaleString()}
            </p>
            <p className="mt-2 text-xs text-gray-500">
              * This is a rough estimate. Final price may vary based on site inspection and specific requirements.
            </p>
          </div>
        </div>
      )}
    </form>
  );
} 