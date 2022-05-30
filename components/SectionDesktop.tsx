import { useCallback, useEffect, useRef, useState } from 'react';
import { Card } from './Card';
import { dummyForward, Forward } from './Forward';
import { SectionProps } from './Section';
import { ReadMore, Summary, Title } from './Text';

export const SectionDesktop = ({ isRight, title, summary, more, backgroundColor, waveColor, images }: SectionProps) => {

    const onReadMore = useCallback(() => console.log('Read more'), [])

    const [stickyTop, setStickyTop] = useState(0);
    const refInfo = useRef(null);

    useEffect(() => {
        if (!refInfo.current) return;
        const { clientHeight: heigth } = refInfo.current;
        const stickyTop = window.innerHeight / 2 - heigth / 2;
        setStickyTop(stickyTop);
    }, [refInfo])

    return (
        <Card waveColor={waveColor}>
            <div className={`${backgroundColor}`}>
                <div className={`min-h-screen py-12 flex items-start ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div ref={refInfo} className='basis-5/12 sticky px-12' style={{ top: `${stickyTop}px` }}>
                        <div>
                            <Title>
                                {title}
                            </Title>
                        </div>
                        <button className={``} onClick={onReadMore}>
                            <Summary>
                                {summary}
                            </Summary>
                            <ReadMore />
                        </button>
                        <div className=''>
                            <Forward {...dummyForward} />
                        </div>
                    </div>
                    <div className={`basis-7/12 flex flex-wrap justify-center ${isRight ? 'flex-row-reverse' : 'flex-row'}`}>
                        {images.map((image, index) => (
                            <img key={index} src={image} className='object-contain snap-center' />
                        ))}
                        {/* <img src="/iphone.png" className='object-contain snap-center' /> */}
                    </div>
                </div>
            </div>
        </Card>
    )
}