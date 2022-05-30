import { useCallback, useEffect, useState } from "react";

export const useIsMobile = () => {

    const [isMobile, setIsMobile] = useState(true);
    // tailwind default sm: size 640px
    const windowResize = useCallback(() => {
        setIsMobile(window.innerWidth < 640)
    }, [])

    useEffect(() => {
        windowResize();
        window.addEventListener('resize', windowResize);
        () => window.removeEventListener('resize', windowResize);
    }, [windowResize])
  
    return isMobile;
  }