import { useRef } from "react"
import { Animation } from "./Animation";

export const About = () => {
    const refAbout = useRef(null);

    return (
        <div className="mb-16">
            <div ref={refAbout} className="relative flex justify-center items-start p-16 overflow-x-hidden">
                <Animation refViewport={refAbout} type="scroll-horizontal" speed={.8}>
                    <p className="text-white text-4xl sm:text-6xl text-center">
                        Hello | Hallo | Moi | 안녕 | やあ | Hola | Oi | 你好 | Salve<br />
                        {/* to the Portofolio <br /> */}
                        Let's dive in ^_^
                    </p>
                </Animation>
            </div>
        </div>
    )
}