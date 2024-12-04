'use client';

import Image from 'next/image';
import { Star, CheckCircle } from 'lucide-react';
import { Review } from '@/types/review';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center mb-1">
            <h3 className="font-semibold mr-2">{review.author}</h3>
            {review.verified && (
              <span className="flex items-center text-green-600 text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                Verified Customer
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">
            {review.service} in {review.location}
          </p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h4 className="font-medium mb-2">{review.title}</h4>
        <p className="text-gray-600">{review.content}</p>
      </div>

      {/* Images */}
      {review.images && review.images.length > 0 && (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {review.images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`Review image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Company Response */}
      {review.response && (
        <div className="mt-4 pt-4 border-t">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="font-medium">{review.response.author}</span>
              <span className="text-sm text-gray-600 ml-2">responded</span>
            </div>
            <p className="text-gray-600 text-sm">{review.response.content}</p>
          </div>
        </div>
      )}

      {/* Date */}
      <div className="mt-4 text-sm text-gray-500">
        {new Date(review.date).toLocaleDateString('en-CA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </div>
  );
} 