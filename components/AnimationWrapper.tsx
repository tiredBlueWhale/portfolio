import { AnimationType, Children, RefViewport } from "../types"
import { AnimationHorizontalScroll, AnimationHorizontalScrollProps } from "./AnimationHorizontalScroll";
import { AnimationOpacity, AnimationOpacityProps } from "./AnimationOpacity";

export type AnimationWrapperPropsShared = AnimationType & RefViewport & Children;
export type AnimationWrapperProps = AnimationHorizontalScrollProps | AnimationOpacityProps;

export const AnimationWrapper = ({ type, children, ...props }: AnimationWrapperProps) => {
    switch (type) {
        case 'opacity':
            return <AnimationOpacity {...props}>{children}</AnimationOpacity>
        case 'slide-in':
            return null;
        case 'paint':
            return null;
        case 'scroll-horizontal':
            return <AnimationHorizontalScroll {...props}>{children}</AnimationHorizontalScroll>
        default:
            return <>{children}</>;
    }
}