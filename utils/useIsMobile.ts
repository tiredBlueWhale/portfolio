import { useCallback, useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

export const useIsMobile = () => {
    const windowSize = useWindowSize();
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // tailwind default sm: size 640px
        console.log(windowSize.width, window.innerWidth);
        setIsMobile(windowSize.width < 640)
    }, [windowSize.width])

    return isMobile;
}