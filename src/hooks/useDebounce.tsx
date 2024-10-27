import { useState, useEffect } from "react";

interface DebounceProps {
  input: string;
  delay: number;
}

const useDebounce = ({ input, delay }: DebounceProps) => {
  const [debounceValue, setDebounceValue] = useState<string>(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(input);
    }, delay);

    return () => clearTimeout(handler);
  }, [delay, input]);

  return debounceValue;
};
export default useDebounce;
