import { useRef } from "react"
import { BackgroundColor } from "../types";
import { AnimationHorizontalScrollSelf } from "./AnimationHorizontalScroll";


type AboutProps = BackgroundColor
export const About = ({backgroundColor}: AboutProps) => {
    const refAbout = useRef(null);

    return (
        <div className={`${backgroundColor}`}>
            <div ref={refAbout} className="flex justify-center items-start px-16 py-20 overflow-x-hidden">
                <AnimationHorizontalScrollSelf speed={.8} offset={.5} isLeftToRight>
                    <p className="text-white text-4xl sm:text-6xl text-center">
                        Hello | Hallo | Moi | 안녕 | やあ | Hola | Oi | 你好 | Salve<br />
                        {/* Let&apos;s dive in ^_^ */}
                    </p>
                </AnimationHorizontalScrollSelf>
            </div>
        </div>
    )
}