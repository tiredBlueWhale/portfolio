import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../utils";
import { Wave } from "./Wave";

// animate-[swipeChild_2s_${delay}s_ease-in-out_1_both]
// animate-[swipeOverlay_2s_${delay}s_ease-in-out_1_both]

export type HeroProps = {
    colorWaveBackground: string;
    colorWaveForeground: string;
}

export const Hero = ({ colorWaveBackground, colorWaveForeground }: HeroProps) => {
    const windowSize = useWindowSize();
    const [height, setHeight] = useState(0);
    const refWavePlaceholder = useRef(null);

    useEffect(() => {
        if (!refWavePlaceholder.current) return;
        const {clientHeight: height} = refWavePlaceholder.current;
        setHeight(height);
    }, [refWavePlaceholder, windowSize])

    return (
        <>
            <div className="h-screen sticky top-0 -z-10 flex flex-col justify-center items-center">
                <div className="flex-1" />
                <div className="flex-none flex flex-col justify-center">
                    <img src="tiredBlueWhale.png" alt="Tired Blue Whale Logo" className='block max-w-[80vw] w-auto max-h-[50vh] h-auto pb-4 animate-[logo_1.5s_5.2s_ease-in-out_1_both]' />
                    <div className="flex flex-col items-center px-8 text-white">
                        <div className="flex flex-row flex-wrap justify-center">
                            <div className="relative">
                                <h1 className='text-4xl sm:text-7xl lg:text-8xl text-center animate-[swipeChild_1.5s_2.3s_ease-in-out_1_both]'>
                                    Tired Blue Whale
                                </h1>
                                <div className='absolute inset-x-0 bottom-0 bg-white animate-[swipeTop_1.5s_2.3s_ease-in-out_1_both]' />
                            </div>
                        </div>
                        <div className="w-full flex justify-center my-2">
                            <div className="h-1 bg-white animate-[swipeLine_1.5s_1s_ease-in-out_1_both]" />
                        </div>
                        {/*  */}
                        <div className="relative">
                            <h2 className='text-3xl sm:text-6xl lg:text-7xl text-center animate-[swipeChild_1.5s_3.7s_ease-in-out_1_both]'>
                                Portfolio
                            </h2>
                            <div className='absolute inset-x-0 top-0 bg-white animate-[swipeBottom_1.5s_3.7s_ease-in-out_1_both]' />
                        </div>
                    </div>
                </div>
                <div ref={refWavePlaceholder} className="flex-1" />
            </div>
            <div className="relative animate-[logo_1.5s_5.2s_ease-in-out_1_backwards]">
                <div className="absolute inset-x-0 bottom-8 -z-20" style={{ height }}>
                    <Wave waveColor={colorWaveBackground} index={0} />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-0" style={{ height }}>
                    <Wave waveColor={colorWaveForeground} index={1} />
                </div>
            </div>
        </>
    )
}