import { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../utils';
import { AnimationWrapper } from './AnimationWrapper';
import { Card } from './Card';
import { Resources } from './Resources';
import { SectionProps } from './Section';
import { LearnMore, Summary, Title } from './Text';

export const SectionDesktop = ({ isRight, title, summary, more, backgroundColor, waveColor, images, ...props }: SectionProps) => {

    const windowSize = useWindowSize();
    const onReadMore = useCallback(() => console.log('Read more'), [])

    const [stickyTop, setStickyTop] = useState(0);
    const refInfo = useRef(null);
    const refAnimation = useRef(null);

    useEffect(() => {
        if (!refInfo.current) return;
        const { clientHeight: heigth } = refInfo.current;
        const stickyTop = windowSize.height / 2 - heigth / 2;
        setStickyTop(stickyTop);
    }, [refInfo, windowSize.height])

    return (
        <Card waveColor={waveColor}>
            <div ref={refAnimation} className={`min-h-screen py-12 flex items-start ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
                <div ref={refInfo} className='basis-5/12 max-w-md sticky px-12' style={{ top: `${stickyTop}px` }}>
                    <div className='mb-4'>
                        <AnimationWrapper type='opacity' refViewport={refAnimation}>
                            <Title>
                                {title}
                            </Title>
                        </AnimationWrapper>
                    </div>
                    <button className='mb-4' onClick={onReadMore}>
                        <AnimationWrapper type='opacity' refViewport={refAnimation}>
                            <Summary>
                                {summary}
                            </Summary>
                            <LearnMore />
                        </AnimationWrapper>
                    </button>
                    <div className='mb-4'>
                        <AnimationWrapper type='opacity' refViewport={refAnimation}>
                            <Resources {...props} />
                        </AnimationWrapper>
                    </div>
                </div>
                <div className={`basis-7/12 flex flex-wrap justify-center ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
                    {images.map((image, index) => (
                        <img key={index} src={image} className='object-contain' />
                    ))}
                </div>
            </div>
        </Card>
    )
}