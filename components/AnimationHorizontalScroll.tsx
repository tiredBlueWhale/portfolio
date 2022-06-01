import { useEffect, useRef, useState } from "react";
import { Children, RefViewport } from "../types";
import { useIsMobile, useScrollY } from "../utils";

export type AnimationHorizontalScrollProps = {
    rightToLeft?: boolean;
    speed?: number;
} & RefViewport & Children;

export const AnimationHorizontalScroll = ({ children, refViewport, rightToLeft, speed }: AnimationHorizontalScrollProps) => {

    const isMobile = useIsMobile();

    const scrollY = useScrollY();
    const [translateX, setTranslateX] = useState(0);
    const refAnimation = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refViewport.current || !refAnimation.current) return;
        const { offsetTop: offsetTopWrapper, } = refViewport.current;
        const { offsetTop: offsetTopAnimation, clientHeight: height, } = refAnimation.current;

        const center = offsetTopWrapper + offsetTopAnimation - window.innerHeight / 2 + height / 2;
        const translateX = rightToLeft ? scrollY - center : center - scrollY;
        setTranslateX(translateX * (speed || 1));

    }, [scrollY, refViewport, refAnimation])

    if (isMobile) return <>{children}</>;

    return (
        <div ref={refAnimation} className="transition-transform	ease-linear sm:duration-150" style={{ transform: `translateX(${translateX}px)` }}>
            {children}
        </div>
    );
}