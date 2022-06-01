import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../utils";
import { LogoSubtitle, LogoTitle } from "./Text";
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
        const { clientHeight: height } = refWavePlaceholder.current;
        setHeight(height);
    }, [refWavePlaceholder, windowSize])

    return (
        <>
            <div className="h-screen sticky top-0 -z-10 flex flex-col justify-center items-center">
                <div className="flex-1" />
                <div className="flex-none flex flex-col justify-center">
                    <div className="overflow-hidden">
                        <div className='animate-appearLogoImage'>
                            <img src="tiredBlueWhale.png" alt="Tired Blue Whale Logo" className='block max-w-[80vw] w-auto max-h-[50vh] h-auto' />
                        </div>
                    </div>
                    <div className="flex flex-col items-center px-8 text-white">
                        <div className="relative overflow-hidden">
                            <div className='animate-appearLogoTitle'>
                                <LogoTitle>
                                    Tired Blue Whale
                                </LogoTitle>
                            </div>
                            {/* <div className='absolute inset-x-0 bottom-0 bg-white animate-swipeTop' /> */}
                        </div>
                        <div className="w-full flex justify-center my-2">
                            <div className="h-1 bg-white animate-appearLogoLine" />
                        </div>
                        <div className="relative overflow-hidden">
                            <div className='animate-appearLogoSubtitle'>
                                <LogoSubtitle>
                                    Portfolio
                                </LogoSubtitle>
                            </div>
                            {/* <div className='absolute inset-x-0 top-0 bg-white animate-swipeBottom' /> */}
                        </div>
                    </div>
                </div>
                <div ref={refWavePlaceholder} className="flex-1" />
            </div>
            <div className="relative animate-appearHero">
                <div className="absolute inset-x-0 bottom-8 -z-20 animate-appearWaveLeft" style={{ height }}>
                    <Wave waveColor={colorWaveBackground} index={0} />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-0 animate-appearWaveRight" style={{ height }}>
                    <Wave waveColor={colorWaveForeground} index={1} />
                </div>
            </div>
        </>
    )
}