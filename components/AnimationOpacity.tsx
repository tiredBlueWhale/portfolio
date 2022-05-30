import { useState, useRef, useEffect } from "react";
import { Children } from "../types"
import { useScrollY } from "../utils";
import { AnimationWrapperPropsShared } from "./AnimationWrapper"

export type AnimationOpacityProps = {

} & AnimationWrapperPropsShared

export const AnimationOpacity = ({children, refViewport}: AnimationOpacityProps) => {

    const scrollY = useScrollY();
    const [progress, setProgress] = useState(0);
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
        <div ref={refAnimation} className="transition-all duration-100" style={{opacity: progress, transform: `translateY(${window.innerHeight * .2 - window.innerHeight * .2 * progress}px)`}}>
            {children}
        </div>
    )
}