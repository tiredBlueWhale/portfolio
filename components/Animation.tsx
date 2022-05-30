import { AnimationType, Children, RefViewport } from "../types"
import { AnimationHorizontalScroll, AnimationHorizontalScrollProps } from "./AnimationHorizontalScroll";
import { AnimationOpacityProps } from "./AnimationOpacity";

export type AnimationPropsShared = AnimationType & RefViewport & Children;
export type AnimationProps = AnimationHorizontalScrollProps | AnimationOpacityProps;

export const Animation = ({ type, children, ...props }: AnimationProps) => {
    switch (type) {
        case 'opacity':
            return null;
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