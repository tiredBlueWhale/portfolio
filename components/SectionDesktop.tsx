import { useCallback, useEffect, useRef, useState } from 'react';
import { useScrollY, useWindowSize } from '../utils';
import { AnimationFadeInOut } from './AnimationFadeInOut';
import { AnimationParallaxScroll } from './AnimationParallaxScroll';
import { Card } from './Card';
import { Resources } from './Resources';
import { SectionProps } from './Section';
import { LearnMore, Summary, Title } from './Text';

export const SectionDesktop = ({ isLeftToRight, title, summary, more, backgroundColor, waveColor, imageRows, ...props }: SectionProps) => {

    const windowSize = useWindowSize();
    const onReadMore = useCallback(() => console.log('Read more'), [])

    const [infoStickyTop, setInfoStickyTop] = useState(0);
    const [imageStickyTop, setImageStickyTop] = useState(0);
    const refInfo = useRef<HTMLDivElement>(null);
    const refAnimation = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!refInfo.current) return;
        const { clientHeight: heigth } = refInfo.current;
        const infoStickyTop = windowSize.height / 2 - heigth / 2;
        setInfoStickyTop(infoStickyTop);
    }, [refInfo.current?.clientHeight, windowSize.height])

    useEffect(() => {
        if (!refInfo.current) return;
        const { clientHeight: heightInfo } = refInfo.current;
        const imageStickyTop = infoStickyTop + heightInfo;
        setImageStickyTop(imageStickyTop * .25);
    }, [refInfo.current?.clientHeight, infoStickyTop])

    return (
        <div ref={refAnimation} className={`max-w-screen-xl min-h-screen py-12 flex justify-center items-start ${isLeftToRight ? 'flex-row-reverse' : 'flex-row'} m-auto`}>
            <div ref={refInfo} className='sticky flex-none w-[500px] max-w-xl px-12' style={{ top: `${infoStickyTop}px` }}>
                <div className='mb-4'>
                    <AnimationFadeInOut refViewport={refAnimation}>
                        <Title>
                            {title}
                        </Title>
                    </AnimationFadeInOut>
                </div>

                <AnimationFadeInOut refViewport={refAnimation}>
                    <div className='mb-4'>
                        <Summary>
                            {summary}
                        </Summary>
                    </div>
                </AnimationFadeInOut>

                <div className='mb-4' onClick={onReadMore}>
                    <AnimationFadeInOut refViewport={refAnimation}>
                        <LearnMore />
                    </AnimationFadeInOut>
                </div>
                <div className='mb-4'>
                    <AnimationFadeInOut refViewport={refAnimation}>
                        <Resources {...props} />
                    </AnimationFadeInOut>
                </div>
            </div>
            <div className='shrink h-full px-8 min-w-0 max-w-' style={{ paddingTop: imageStickyTop }}>
                {imageRows.map(({ justify, images }, index) => (
                    <div key={index} className={`w-full flex ${justify} ${isLeftToRight ? 'flex-row-reverse' : 'flex-row'}`} >
                        {
                            images.map(({ src, speed, translate }, index) => (
                                <AnimationParallaxScroll key={index} refViewport={refAnimation} speed={speed}>
                                    <div className={`max-h-screen min-w-0 flex ease-in-out duration-300`}>
                                        <div className='m-auto' style={{ transform: translate }}>
                                            <img key={index} src={src} className='block max-h-screen max-w-full w-auto h-auto' />
                                        </div>
                                    </div>
                                </AnimationParallaxScroll>
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}