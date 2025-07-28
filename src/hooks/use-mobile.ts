import { useEffect, useState } from 'react';

// Define the mobile breakpoint in pixels
const MOBILE_BREAKPOINT = 768;

/**
 * Custom hook to determine if the current device is mobile.
 * It uses a media query to check if the viewport width is less than the defined mobile breakpoint.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  // Effect to set the initial state and listen for changes in viewport width
  useEffect(() => {
    // Create a media query listener for the mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Function to update the mobile state based on the current viewport width
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Add the event listener to the media query
    mql.addEventListener('change', onChange);

    // Set the initial state based on the current viewport width
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Cleanup function to remove the event listener
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // Return the current mobile state
  return !!isMobile;
}
