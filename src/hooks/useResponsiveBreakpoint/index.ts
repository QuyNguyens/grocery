import { useEffect, useState } from 'react';

export type ResponsiveBreakpoint = 'sm' | 'md' | 'lg';

function getBreakpoint(width: number): ResponsiveBreakpoint {
  if (width < 430) return 'sm';
  if (width < 750) return 'md';
  return 'lg';
}

export function useResponsiveBreakpoint(): ResponsiveBreakpoint {
  const [breakpoint, setBreakpoint] = useState<ResponsiveBreakpoint>(() => {
    if (typeof window === 'undefined') return 'lg';
    return getBreakpoint(window.innerWidth);
  });

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = getBreakpoint(window.innerWidth);
      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return breakpoint;
}
