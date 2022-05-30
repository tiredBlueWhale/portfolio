import { Wave } from "./Wave";

export type HeroProps = {
    colorWaveBackground: string;
    colorWaveForeground: string;
}

export const Hero = ({ colorWaveBackground, colorWaveForeground }: HeroProps) => {
    return (
        <>
            <div className="sticky top-0 inset-0 z-10 ">
                <div className="h-screen relative flex flex-col justify-center sm:justify-start items-center sm:pt-[10vh]">
                    <img src="tiredBlueWhale.png" alt="Appstore Download" className='max-h-[50vh] max-w-[80vw] pb-4 z-20' />
                    <div className="flex flex-col items-stretch">
                        <span className="text-5xl sm:text-8xl text-center text-white">
                            Tired Blue Whale
                        </span>
                        <div className="h-1 bg-white" />
                        <span className="text-4xl sm:text-7xl text-center text-white">
                            Portfolio
                        </span>
                    </div>
                </div>

            </div>
            <div className="relative">
                <div className="absolute left-0 right-0 bottom-5 z-0">
                    <Wave waveColor={colorWaveBackground} index={0} />
                </div>
                <div className="absolute left-0 right-0 -bottom-5 z-20">
                    <Wave waveColor={colorWaveForeground} index={1} />
                </div>
            </div>
        </>
    )
}