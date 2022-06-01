import { useRef } from "react"
import { BackgroundColor } from "../types";
import { AnimationHorizontalScroll } from "./AnimationHorizontalScroll";


type AboutProps = BackgroundColor
export const About = ({backgroundColor}: AboutProps) => {
    const refAbout = useRef(null);

    return (
        <div className={`${backgroundColor}`}>
            <div ref={refAbout} className="relative flex justify-center items-start px-16 py-20 overflow-x-hidden">
                <AnimationHorizontalScroll refViewport={refAbout} speed={.8}>
                    <p className="text-white text-4xl sm:text-6xl text-center">
                        Hello | Hallo | Moi | 안녕 | やあ | Hola | Oi | 你好 | Salve<br />
                        {/* Let&apos;s dive in ^_^ */}
                    </p>
                </AnimationHorizontalScroll>
            </div>
        </div>
    )
}