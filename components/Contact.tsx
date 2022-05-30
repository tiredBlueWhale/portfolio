import { Card } from "./Card"
import { Wave } from "./Wave"

type ContactData = {
    href: string;
    text: string;
}
const contactData: ContactData[] = [
    {
        href: 'mailto: tired.blue.whale@gmail.com',
        text: 'Contact Me'
    },
    {
        href: 'https://github.com/tiredBlueWhale',
        text: 'GitHub'
    }
]

export const Contact = () => {

    return (
        <Card waveColor="fill-blue-900" index={0}>
            <div className="h-screen bg-blue-900 flex flex-col justify-center items-center">
                <div className="flex-1">

                </div>
                {
                    contactData.map(({ href, text }, index) => (
                        <a key={index} className="uppercase text-3xl sm:text-5xl py-2" href={href}>
                            {text}
                        </a>
                    ))
                }
                <div className="flex-1">
                    <img src="tiredBlueWhale.png" alt="Tired Blue Whale Logo Large" className='h-20 sm:h-32 max-w-full pt-2' />
                </div>
            </div>
        </Card>
    )
}