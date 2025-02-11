// cookies.tsx
import { cookies } from 'next/headers';

type Theme = 'light' | 'dark';
type ColorScheme = 'no-preference' | 'light' | 'dark';
type ViewMode = 'desktop' | 'mobile';

// Helper function to detect system color scheme preference
function getSystemColorScheme(): ColorScheme {
  if (typeof window !== 'undefined') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  }
  return 'no-preference';
}

// Helper function to detect screen size
function getScreenSize(): ViewMode {
  if (typeof window !== 'undefined') {
    return window.innerWidth <= 768 ? 'mobile' : 'desktop';
  }
  return 'desktop'; // Default to desktop for SSR
}

export async function getTheme(): Promise<Theme> {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');

  // If theme is already set in cookies, return it
  if (theme?.value) {
    return theme.value as Theme;
  }

  // Otherwise check system preference
  const systemPreference = getSystemColorScheme();
  if (systemPreference !== 'no-preference') {
    return systemPreference as Theme;
  }

  // Default to dark if no preference detected
  return 'dark';
}

export async function getViewMode(): Promise<ViewMode> {
  const cookieStore = await cookies();
  const viewMode = cookieStore.get('viewMode');

  // If viewMode is already set in cookies, return it
  if (viewMode?.value) {
    return viewMode.value as ViewMode;
  }

  // Otherwise detect screen size
  return getScreenSize();
}

export async function setTheme(theme: Theme): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('theme', theme, {
    httpOnly: true, // Prevents JavaScript access to the cookie
    secure: process.env.NODE_ENV === 'production', // Only sends over HTTPS in production
    sameSite: 'strict', // Protects against CSRF
    maxAge: 31536000, // Cookie expires in 1 year
    path: '/' // Ensure cookie is available across all pages
  });
}

export async function setViewMode(viewMode: ViewMode): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('viewMode', viewMode, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 31536000,
    path: '/'
  });
}
