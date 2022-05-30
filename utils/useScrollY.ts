import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollY = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        
        const viewport = document.getElementById('viewport');
        if (!viewport) return;
        const handleScroll = () => setScrollY(viewport.scrollTop) ;
        viewport.addEventListener('scroll', handleScroll, {passive: true});
        return () => viewport.removeEventListener('scroll', handleScroll);
    }, [])
  
    return scrollY;
  }