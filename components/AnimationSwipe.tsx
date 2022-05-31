import { useState, useRef, useEffect } from "react";
import { useScrollY } from "../utils";
import { AnimationWrapperPropsShared } from "./AnimationWrapper";


export type AnimationSwipeProps = {
    isRight?: boolean;
    // If delay then autoplay
    delay?: number;

} & AnimationWrapperPropsShared

export const AnimationSwipe = ({ children, refViewport, isRight, delay }: AnimationSwipeProps) => {

    const scrollY = useScrollY();
    const [progress, setProgress] = useState(0);
    // const [left]
    // const [opacity, setOpacity] = useState(0);
    // const [translateY, setTranslateY] = useState(-20);
    const refAnimation = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refViewport.current || !refAnimation.current) return;

        const { offsetTop: offsetTopWrapper, } = refViewport.current;
        const { offsetTop: offsetTopAnimation, clientHeight: height, } = refAnimation.current;
        console.log(scrollY, offsetTopAnimation, offsetTopWrapper);

        const animationPointStart = offsetTopAnimation + offsetTopWrapper - window.innerHeight * .75 + height * .5;
        const animationDistance = window.innerHeight * .25;
        const animationEnd = animationPointStart + animationDistance;
        if (scrollY < animationPointStart) setProgress(0);
        else if (scrollY > animationEnd) setProgress(1);
        else {
            setProgress((scrollY - animationPointStart) / animationDistance);
        }

    }, [scrollY, refViewport, refAnimation])

    return (
        <div ref={refAnimation} className="relative" style={{}}>
            {children}
            <div
                className={`absolute inset-y-0 ${'bg-white'} animate-swipeOverlay`}
                style={{ animationDelay: `${delay || 0}`, left: isRight ? '' : '0px', right: isRight ? '0px' : '' }} />
        </div>
    )
}