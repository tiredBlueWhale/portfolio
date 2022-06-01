import { useState, useEffect, useCallback } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    const handleResize = useCallback(() => {
        console.log(window.innerWidth);
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);
    
    return windowSize;
}