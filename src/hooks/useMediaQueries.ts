import { useState, useEffect } from 'react';

export const mediaQueries = {
  mobile: '(max-width:639px)',
  tablet: '(min-width:640px) and (max-width:1279px)',
  laptop: '(min-width:1280px) and (max-width:1535px)',
  desktop: '(min-width:1536px)',
};

const useMediaQuery = (query: (typeof mediaQueries)[keyof typeof mediaQueries]): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(query);

      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      mediaQuery.addEventListener('change', handleChange);

      // Initial call
      setMatches(mediaQuery.matches);

      // Cleanup
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
