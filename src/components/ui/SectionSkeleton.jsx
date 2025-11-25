/**
 * Section Skeleton Loader
 * Shows while lazy-loaded sections are loading
 */
const SectionSkeleton = () => {
  return (
    <div className="w-full py-20 px-4 animate-pulse">
      <div className="container-custom">
        {/* Section Title Skeleton */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="h-8 w-48 bg-(--color-surface) rounded-lg" />
          <div className="h-4 w-96 max-w-full bg-(--color-surface) rounded-lg" />
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-(--color-surface) rounded-xl p-6 space-y-4"
            >
              {/* Image placeholder */}
              <div className="h-40 bg-(--color-background) rounded-lg" />

              {/* Title placeholder */}
              <div className="h-6 bg-(--color-background) rounded-lg w-3/4" />

              {/* Description placeholders */}
              <div className="space-y-2">
                <div className="h-4 bg-(--color-background) rounded-lg" />
                <div className="h-4 bg-(--color-background) rounded-lg w-5/6" />
              </div>

              {/* Tags placeholder */}
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-(--color-background) rounded-full" />
                <div className="h-6 w-20 bg-(--color-background) rounded-full" />
                <div className="h-6 w-14 bg-(--color-background) rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSkeleton;
