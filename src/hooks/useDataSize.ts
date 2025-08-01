import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

// I got a little help to make this a custom hook to re-use it

interface UseSizeResult<T> {
  index: number;
  //   visibleCount: number;
  maxIndex: number;
  start: number;
  visibleItems: T[];
  setIndex: Dispatch<SetStateAction<number>>;
}

function useDataSize<T>(
  items: T[],
  initialVisibleCount?: number,
): UseSizeResult<T> {
  const [index, setIndex] = useState(0);

  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return initialVisibleCount || 3;
    if (window.innerWidth >= 768) return initialVisibleCount || 2;
    return initialVisibleCount || 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const maxIndex = Math.max(0, items.length - visibleCount);
  const start = Math.min(index, maxIndex);
  const visibleItems = items.slice(start, start + visibleCount);

  return { index, maxIndex, start, visibleItems, setIndex };
}

export default useDataSize;
