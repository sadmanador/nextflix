"use client"
import { MutableRefObject, useEffect } from 'react';

export default function useExternalClick<T extends HTMLElement>(ref: MutableRefObject<T | null>, callback: () => void): void {
  const onClick = (event: MouseEvent) => {
    // Check if the clicked element is outside the ref's current element
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener('click', onClick);
    
    // Cleanup function to remove the event listener on unmount
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [callback]); // Include callback in dependency array to ensure it's the latest version
}
