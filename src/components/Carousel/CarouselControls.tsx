import { memo } from 'react';

interface CarouselControlsProps {
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalImages: number;
  onDotClick: (index: number) => void;
}

export const CarouselControls = memo(function CarouselControls({
  onNext,
  onPrev,
  currentIndex,
  totalImages,
  onDotClick,
}: CarouselControlsProps) {
  if (totalImages <= 1) return null;

  return (
    <>
      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
        <button
          onClick={onPrev}
          className="p-2 rounded-full bg-black/40 text-white
                   backdrop-blur-sm pointer-events-auto
                   transition-opacity hover:bg-black/60"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="p-2 rounded-full bg-black/40 text-white
                   backdrop-blur-sm pointer-events-auto
                   transition-opacity hover:bg-black/60"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-4 inset-x-4">
        <div className="flex items-center justify-center gap-1.5">
          {Array.from({ length: totalImages }).map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`
                h-1 rounded-full transition-all duration-200
                ${
                  index === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/60 hover:bg-white/80'
                }
              `}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
});
