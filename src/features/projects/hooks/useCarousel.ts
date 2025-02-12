import { useState, useCallback } from 'react';

export function useCarousel(totalImages: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  const handleNext = useCallback(() => {
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const handlePrev = useCallback(() => {
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const handleDotClick = useCallback((index: number) => {
    setSlideDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  return {
    currentIndex,
    slideDirection,
    handleNext,
    handlePrev,
    handleDotClick,
  };
}
