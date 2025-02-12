// Utility functions to handle responsive design and screen size detection

// Breakpoint constants (in pixels)
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

// Type for different screen sizes
export type ScreenSize = 'mobile' | 'tablet' | 'desktop';

// Check if code is running in browser environment
const isBrowser = () => typeof window !== 'undefined';

// Get current screen width safely
const getScreenWidth = () => (isBrowser() ? window.innerWidth : 0);

// Main function to get current screen size
export const getScreenSize = (): ScreenSize => {
  const width = getScreenWidth();

  if (width < BREAKPOINTS.MOBILE) return 'mobile';
  if (width < BREAKPOINTS.TABLET) return 'tablet';
  return 'desktop';
};

// Specific screen size check functions
export const isMobile = (): boolean => {
  return getScreenWidth() < BREAKPOINTS.MOBILE;
};

export const isTablet = (): boolean => {
  const width = getScreenWidth();
  return width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET;
};

export const isDesktop = (): boolean => {
  return getScreenWidth() >= BREAKPOINTS.TABLET;
};

// Hook-friendly screen size check with debounced resize handler
export const createScreenSizeListener = (
  callback: (size: ScreenSize) => void
) => {
  if (!isBrowser()) return () => {};

  let timeoutId: NodeJS.Timeout;

  const handleResize = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(getScreenSize());
    }, 150); // Debounce resize events
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
};
