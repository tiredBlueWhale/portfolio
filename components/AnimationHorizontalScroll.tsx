import { useEffect, useRef, useState } from "react";
import { useScrollY } from "../utils";
import { AnimationWrapperPropsShared } from "./AnimationWrapper";

export type AnimationHorizontalScrollProps = {
    rightToLeft?: boolean;
    speed?: number;
} & AnimationWrapperPropsShared

export const AnimationHorizontalScroll = ({children, refViewport, rightToLeft, speed}: AnimationHorizontalScrollProps) => {

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

    return (
        <div ref={refAnimation} className="transition-transform	ease-linear duration-150" style={{transform: `translateX(${translateX}px)`}}>
            {children}
        </div>
    );
}