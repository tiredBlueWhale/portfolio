import { Wave } from "./Wave";

export type HeroProps = {
    colorWaveBackground: string;
    colorWaveForeground: string;
}

export const Hero = ({ colorWaveBackground, colorWaveForeground }: HeroProps) => {

    return (
        <>
            <div className="h-screen sticky top-0 -z-10 flex flex-col justify-center sm:justify-start items-center sm:pt-[10vh]">
                <img src="tiredBlueWhale.png" alt="Tired Blue Whale Logo Large" className='max-h-[50vh] max-w-[80vw] pb-4 z-20' />
                <div className="flex flex-col items-center px-8 border">
                    <div className="flex">
                        {['Tired Blue', 'Whale'].map((text, index) => (
                            <span key={index} className="text-4xl sm:text-8xl text-center text-white">
                                {text}
                            </span>
                        ))}
                    </div>
                    <div className="h-1 bg-white self-stretch" />
                    <div className="relative">
                        <span className="text-3xl sm:text-7xl text-center text-white">
                            Portfolio
                        </span>
                        <div className="absolute inset-0 bg-white swipe" />
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute left-0 right-0 bottom-0 sm:bottom-5 sm:h-10 -z-20">
                    <Wave waveColor={colorWaveBackground} index={0} />
                </div>
                <div className="absolute left-0 right-0 -bottom-5 sm:h-20 z-0">
                    <Wave waveColor={colorWaveForeground} index={1} />
                </div>
            </div>
        </>
    )
}