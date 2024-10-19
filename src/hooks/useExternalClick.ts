"use client";
import { MutableRefObject, useEffect } from "react";

export default function useExternalClick<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  callback: () => void
): void {
  const onClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [callback]);
}
