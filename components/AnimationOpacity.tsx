import { useState, useRef, useEffect } from "react";
import { Children } from "../types"
import { useScrollY } from "../utils";
import { AnimationPropsShared } from "./Animation"

export type AnimationOpacityProps = {

} & AnimationPropsShared

export const AnimationOpacity = ({children, refViewport}: AnimationOpacityProps) => {

    const scrollY = useScrollY();
    const [opacity, setOpacity] = useState(1);
    const refAnimation = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (!ref.current || !refAnimation.current) return;

    //     const { offsetTop: offsetTopWrapper, } = ref.current;
    //     const { offsetTop: offsetTopAnimation, clientHeight: height, } = refAnimation.current;

    //     // const center = offsetTopWrapper + offsetTopAnimation - window.innerWidth / 2 - height / 2;
    //     // const translateX = rightToLeft ? scrollY - center : center - scrollY;
    //     // setTranslateX(translateX * (speed || 1));

    // }, [scrollY, ref, refAnimation])

    return (
        <div ref={refAnimation} style={{opacity: opacity}}>
            {children}
        </div>
    )
}