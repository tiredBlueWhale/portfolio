import { useRef } from "react";
import { AnimationWrapper } from "./AnimationWrapper";
import { Card } from "./Card"
import { Wave } from "./Wave"

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
        <Card waveColor="fill-blue-900" index={0}>
            <div ref={refAnimation} className="h-screen bg-blue-900 flex flex-col justify-center items-center">
                <div className="flex-1" />
                {
                    contactData.map(({ href, text }, index) => (
                        <div className="py-2 sm:py-4">
                            <a key={index} className="uppercase text-3xl sm:text-5xl" href={href}>
                                {text}
                            </a>
                        </div>
                    ))
                }
                <div className="flex-1">
                    <img src="tiredBlueWhale.png" alt="Tired Blue Whale Logo Large" className='h-20 sm:h-32 max-w-full pt-2 -scale-x-100' />
                </div>
            </div>
        </Card>
    )
}