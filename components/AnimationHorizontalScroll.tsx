import { useEffect, useRef, useState } from "react";
import { Children, DirectionType, IsLeftToRight, Offset, RefViewport, RefViewportOptional, Speed } from "../types";
import { useIsMobile, useScrollY, useWindowSize } from "../utils";

export type AnimationHorizontalScrollSelfProps = RefViewportOptional & IsLeftToRight & Speed & Offset & Children;
export const AnimationHorizontalScrollSelf = ({ children, refViewport, isLeftToRight, speed, offset }: AnimationHorizontalScrollSelfProps) => {

    const isMobile = useIsMobile();
    const windowSize = useWindowSize();
    const scrollY = useScrollY();
    const [translateX, setTranslateX] = useState(0);
    const refAnimation = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refAnimation.current) return;

        let offsetTopWrapper = 0;
        if (refViewport && refViewport.current) {
            offsetTopWrapper = refViewport.current.offsetTop;
        }

        const { offsetTop: offsetTopAnimation, clientHeight: heightAnimation, } = refAnimation.current;

        const center = offsetTopAnimation + offsetTopWrapper - windowSize.height * offset + heightAnimation / 2;
        const translateX = isLeftToRight ? scrollY - center : center - scrollY;
        setTranslateX(translateX * (speed));

    }, [scrollY, windowSize.height, refViewport, refAnimation, isLeftToRight, speed, offset])

    if (isMobile) return <>{children}</>;

    return (
        <div ref={refAnimation} className="transition-transform	ease-linear sm:duration-150" style={{ transform: `translateX(${translateX}px)` }}>
            {children}
        </div>
    );
}

export type AnimationHorizontalScrollParentProps = RefViewport & Speed & Offset & DirectionType & Children;
export const AnimationHorizontalScrollParent = ({ children, refViewport, speed, direction, offset }: AnimationHorizontalScrollParentProps) => {

    const isMobile = useIsMobile();
    const windowSize = useWindowSize();
    const scrollY = useScrollY();
    const [translate, setTranslate] = useState(0);
    const [translateDirection, setTranslateDirection] = useState<'translateX' | 'translateY'>('translateX');

    useEffect(() => {
        if (!refViewport || !refViewport.current) return;

        console.log(direction);
        const { offsetTop: offsetTopWrapper, clientHeight: heigthTopWrapper, } = refViewport.current;
        const center = offsetTopWrapper + heigthTopWrapper - windowSize.height * offset;
        const translate = ['left', 'top'].includes(direction) ? scrollY - center : center - scrollY;
        console.log(translate);
        const translateDirection = ['left', 'right'].includes(direction) ? 'translateX' : 'translateY';
        setTranslateDirection(translateDirection);
        setTranslate(translate * speed);

    }, [scrollY, windowSize.height, refViewport, direction, speed, offset])

    if (isMobile) return <>{children}</>;

    return (
        <div className="transition-transform ease-linear sm:duration-150" style={{ transform: `${translateDirection}(${translate}px)` }}>
            {children}
        </div>
    );
}