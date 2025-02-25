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
      initial={{
        x: 100 * direction,
        opacity: 0,
        scale: 0.95
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      exit={{
        x: -100 * direction,
        opacity: 0,
        scale: 0.95
        
      }}
      transition={{
        x: {
          type: "spring",
          stiffness: 200,
          damping: 25
        },
        opacity: {
          duration: 0.4,
          ease: "easeOut"
        },
        scale: {
          duration: 0.4,
          ease: "easeOut"
        }
      }}
      className="absolute inset-0 w-full h-full"
    >
      <LazyImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl"
        priority={true}
      />
    </motion.div>
  );
});
