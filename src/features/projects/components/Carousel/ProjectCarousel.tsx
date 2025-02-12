import { memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CarouselImage } from './CarouselImage';
import { CarouselControls } from './CarouselControls';
import { useCarousel } from '../../hooks/useCarousel';

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export const ProjectCarousel = memo(function ProjectCarousel({
  images,
  title,
}: ProjectCarouselProps) {
  const {
    currentIndex,
    slideDirection,
    handleNext,
    handlePrev,
    handleDotClick,
  } = useCarousel(images.length);

  return (
    <div className="relative w-full aspect-video mb-6">
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <CarouselImage
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            direction={slideDirection}
          />
        </AnimatePresence>

        <CarouselControls
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={currentIndex}
          totalImages={images.length}
          onDotClick={handleDotClick}
        />
      </div>
    </div>
  );
});
