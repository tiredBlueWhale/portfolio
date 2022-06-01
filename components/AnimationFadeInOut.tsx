import { useState, useRef, useEffect } from "react";
import { Children, RefViewport } from "../types"
import { useIsMobile, useScrollY, useWindowSize } from "../utils";

export type AnimationOpacityProps = {
    useViewportOffset?: boolean;
} & RefViewport & Children;

type Constants = {
    translate: number,
    animationDistance: number,
    animationTopStart: number,
    animationTopEnd: number,
    animationBottomStart: number,
    animationBottomEnd: number
}
export const AnimationFadeInOut = ({ children, refViewport }: AnimationOpacityProps) => {

    const isMobile = useIsMobile();
    

    const scrollY = useScrollY();
    const windowSize = useWindowSize();
    const [animation, setAnimation] = useState({ opacity: 1, translateY: 0 });
    const [constants, setConstants] = useState<Constants>();
    const refAnimation = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refViewport.current || !refAnimation.current) return;

        const { offsetTop: offsetTopAnimation, clientHeight: heightAnimation, } = refAnimation.current;
        const { offsetTop: offsetTopWrapper, clientHeight: heigthWrapper } = refViewport.current;
        const translate = windowSize.height * .25;
        const animationDistance = windowSize.height * .25;
        const animationTopStart = offsetTopAnimation + offsetTopWrapper - windowSize.height * .8 + heightAnimation * .5;
        const animationTopEnd = animationTopStart + animationDistance;
        const animationBottomEnd = offsetTopAnimation + offsetTopWrapper - windowSize.height * .8 + heightAnimation * .5 + heigthWrapper;
        const animationBottomStart = animationBottomEnd - animationDistance;

        setConstants({
            translate,
            animationDistance,
            animationTopStart,
            animationTopEnd,
            animationBottomEnd,
            animationBottomStart,
        })
    }, [refViewport.current, refAnimation.current, windowSize.height]);

    useEffect(() => {
        if (constants === undefined) return;

        const { translate, animationDistance, animationTopStart, animationTopEnd, animationBottomEnd, animationBottomStart } = constants;
        // console.log(scrollY, animationTopStart, animationTopEnd, animationBottomEnd, animationBottomStart)
        if (scrollY < animationTopStart) setAnimation({ opacity: 0, translateY: translate });
        else if (animationTopStart <= scrollY && scrollY <= animationTopEnd) {
            const progress = (scrollY - animationTopStart) / animationDistance;
            setAnimation({ opacity: progress, translateY: translate * (1 - progress) });
        }
        else if (animationBottomStart <= scrollY && scrollY <= animationBottomEnd) {
            const progress = (scrollY - animationBottomStart) / animationDistance;
            setAnimation({ opacity: 1 - progress, translateY: -translate * progress });
        } else if (animationBottomEnd < scrollY) setAnimation({ opacity: 0, translateY: -translate });
        else setAnimation({ opacity: 1, translateY: 0 });
    }, [scrollY, constants]);

    if (isMobile) return <>{children}</>;

    return (
        <div ref={refAnimation} className="transition-all duration-1000ms" style={{ opacity: animation.opacity, transform: `translateY(${animation.translateY}px)` }}>
            {children}
        </div>
    )
}