"use client";
import { MutableRefObject, useCallback, useEffect } from "react";

const useExternalClick = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  callback: () => void
): void => {
  const onClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [callback, onClick]);
};
export default useExternalClick;
