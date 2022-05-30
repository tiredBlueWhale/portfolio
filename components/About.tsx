import { useRef } from "react"
import { BackgroundColor } from "../types";
import { AnimationWrapper } from "./AnimationWrapper";


type AboutProps = BackgroundColor
export const About = ({backgroundColor}: AboutProps) => {
    const refAbout = useRef(null);

    return (
        <div className={`${backgroundColor}`}>
            <div ref={refAbout} className="relative flex justify-center items-start px-16 py-20 overflow-x-hidden">
                <AnimationWrapper refViewport={refAbout} type="scroll-horizontal" speed={.8}>
                    <p className="text-white text-4xl sm:text-6xl text-center">
                        Hello | Hallo | Moi | 안녕 | やあ | Hola | Oi | 你好 | Salve<br />
                        Let&apos;s dive in ^_^
                    </p>
                </AnimationWrapper>
            </div>
        </div>
    )
}