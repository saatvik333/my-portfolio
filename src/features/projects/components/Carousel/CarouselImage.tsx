import { memo } from 'react';
import { motion } from 'framer-motion';
import LazyImage from '@/components/LazyImage';

interface CarouselImageProps {
  src: string;
  alt: string;
  direction: number;
}

export const CarouselImage = memo(function CarouselImage({
  src,
  alt,
  direction,
}: CarouselImageProps) {
  return (
    <motion.div
      initial={{ x: 100 * direction, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100 * direction, opacity: 0 }}
      transition={{
        x: { type: 'tween', duration: 0.15 },
        opacity: { duration: 0.1 },
      }}
      className="absolute inset-0"
    >
      <LazyImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
});
