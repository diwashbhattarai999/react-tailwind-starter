import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

/**
 * NetworkStatus component to monitor and display network connectivity status.
 *
 * This component listens for online and offline events and displays a message
 * when the user goes offline or comes back online.
 */
export const NetworkStatus = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<'success' | 'error' | 'info' | null>(null);
  const [wasOffline, setWasOffline] = useState(navigator.onLine === false);

  // Effect to handle online and offline events
  useEffect(() => {
    // Handler for when the user comes back online
    const handleOnline = () => {
      if (wasOffline) {
        setMessage('You are back online!');
        setType('success');
        setWasOffline(false);

        setTimeout(() => {
          setMessage(null);
          setType(null);
        }, 3000); // Success message for 3 seconds
      }
    };

    // Handler for when the user goes offline
    const handleOffline = () => {
      setMessage('You are offline. Please check your internet connection and try again.');
      setType('error');
      setWasOffline(true); // So we can detect when they come back online
    };

    // Add event listeners for online and offline events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial state check
    if (!navigator.onLine) {
      handleOffline();
    }

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [wasOffline]);

  // If no message or type, do not render anything
  if (!message || !type) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-1/2 z-50 w-full -translate-x-1/2 transform px-4 py-1 text-center text-sm transition-opacity duration-300',
        type === 'success' && 'border border-green-200 bg-green-100 text-green-500',
        type === 'error' && 'border border-red-200 bg-red-100 text-red-500',
        type === 'info' && 'border border-blue-200 bg-blue-100 text-blue-500'
      )}
    >
      {message}
    </div>
  );
};
