import { useRef } from "react";
import { AnimationHorizontalScrollParent } from "./AnimationHorizontalScroll";
import { Card } from "./Card"

type ContactData = {
    href: string;
    text: string;
}
const contactData: ContactData[] = [
    {
        href: 'mailto: tired.blue.whale@gmail.com',
        text: 'Contact'
    },
    {
        href: 'https://github.com/tiredBlueWhale',
        text: 'GitHub'
    }
]

export const Contact = () => {

    const refAnimation = useRef(null);

    return (
        <Card waveColor="fill-blue-900" index={0} title='Contact'>
            <div ref={refAnimation} className="h-screen bg-blue-900 flex flex-col justify-center items-center overflow-hidden">
                <div className="flex-1" />
                {
                    contactData.map(({ href, text }, index) => (
                        <AnimationHorizontalScrollParent key={index} refViewport={refAnimation} speed={1} offset={1} direction={index % 2 === 0 ? 'left' : 'right'}>
                            <div className="py-2 sm:py-4">
                                <a className="uppercase text-3xl sm:text-5xl hover:sm:text-6xl ease-in-out duration-300" href={href}>
                                    {text}
                                </a>
                            </div>
                        </AnimationHorizontalScrollParent>
                    ))
                }

                <div className="flex-1">
                    <AnimationHorizontalScrollParent refViewport={refAnimation} speed={1} offset={1} direction='bottom'>
                        <div className="flex flex-col justify-start items-center">
                            <img src="tiredBlueWhale.png" alt="Tired Blue Whale Logo Large" className='block h-20 sm:h-32 hover:sm:h-40 ease-in-out duration-300 max-w-full pt-2 -scale-x-100 m-auto' />
                            <div className="pt-8 animate-bounce flex flex-col items-center opacity-70">
                                &uarr;
                                <span>
                                    Press the Whale ^_^
                                </span>
                            </div>
                        </div>
                    </AnimationHorizontalScrollParent>
                </div>
            </div>

        </Card>
    )
}