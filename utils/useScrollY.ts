import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = useCallback(() => setScrollY(window.scrollY), []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll])
  
    return scrollY;
  }