import { useEffect, useRef, useState } from "react";
import { Children, RefViewport, Speed, Translate } from "../types";
import { useIsMobile, useScrollY, useWindowSize } from "../utils";


export type AnimationParallaxScrollProps = RefViewport & Children & Speed;
export const AnimationParallaxScroll = ({ children, refViewport, speed}: AnimationParallaxScrollProps) => {

    const isMobile = useIsMobile();
    const windowSize = useWindowSize();
    const scrollY = useScrollY();
    const [animation, setAnimation] = useState({ opacity: 1, translateY: 0 });
    const refAnimation = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!refViewport.current || !refAnimation.current) return;
        const { offsetTop: offsetTopAnimation, clientHeight: heightAnimation, } = refAnimation.current;
        const { offsetTop: offsetTopWrapper, clientHeight: heigthWrapper } = refViewport.current;
        const center = offsetTopAnimation - windowSize.height / 2 + heightAnimation / 2;
        // console.log(scrollY, offsetTopWrapper, offsetTopAnimation, center);
        const position = center - scrollY

        const translateY = position * speed;
        console.log( translateY);
        setAnimation({opacity: 1, translateY})
    }, [scrollY, windowSize.height, refAnimation.current?.offsetTop, refAnimation.current?.clientHeight])

    if (isMobile) return <>{children}</>;

    return (
        <div ref={refAnimation} className="relative z-20" style={{transform: `translateY(${animation.translateY}px)`}}>
            {children}
        </div>
    )
}