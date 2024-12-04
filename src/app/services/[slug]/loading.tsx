export default function ServiceLoading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="relative h-[60vh] min-h-[400px] bg-gray-200" />

      {/* Content Skeleton */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-6" />
              <div className="space-y-4 mb-8">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>

              {/* Benefits Skeleton */}
              <div className="bg-gray-100 rounded-xl p-8 mb-12">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-gray-200 mr-3" />
                      <div>
                        <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                        <div className="h-3 bg-gray-200 rounded w-32" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="aspect-video bg-gray-200 rounded-lg" />
                ))}
              </div>
            </div>

            {/* Form Skeleton */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-6" />
                <div className="space-y-4">
                  <div className="h-10 bg-gray-200 rounded" />
                  <div className="h-10 bg-gray-200 rounded" />
                  <div className="h-10 bg-gray-200 rounded" />
                  <div className="h-32 bg-gray-200 rounded" />
                  <div className="h-12 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 