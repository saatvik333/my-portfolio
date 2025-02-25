import { useEffect, useCallback } from 'react';

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  isEnabled: boolean;
}

export function useKeyboardNavigation({
  onNext,
  onPrev,
  onClose,
  isEnabled,
}: UseKeyboardNavigationProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    },
    [onNext, onPrev, onClose]
  );

  useEffect(() => {
    if (isEnabled) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isEnabled, handleKeyDown]);
}
