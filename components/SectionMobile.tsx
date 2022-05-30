import { info } from 'console';
import { useCallback, useEffect, useRef, useState } from 'react';
import { More, Images, BackgroundColor } from '../types';
import { Resources } from './Resources';
import { SectionProps } from './Section';
import { ReadMore, Summary, Title } from './Text';
import { Wave } from "./Wave";

export const SectionMobile = ({ title, summary, more, backgroundColor, waveColor, images, ...props }: SectionProps) => {

    const onReadMore = useCallback(() => console.log('Read more'), [])

    return (
        <div className='h-screen w-screen flex flex-col snap-start'>
            <div className='flex-none sticky top-0'>
                <div className={`${backgroundColor} drop-shadow flex justify-center items-center pt-4 pb-3 px-2`}>
                    <Title>
                        {title}
                    </Title>
                </div>
            </div>
            <div className='flex-1 pt-4 pb-12 flex flex-col justify-center items-stretch overflow-auto'>
                <div className='flex-1 flex flex-nowrap items-center overflow-x-auto snap-mandatory snap-x'>
                    {images.map((image, index) => (
                        <div key={index} className='flex-shrink-0 snap-center w-screen flex justify-center'>
                            <img key={index} src={image} className='h-80' />
                        </div>
                    ))}
                    <div className='flex-shrink-0 snap-center w-screen flex justify-center'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/iik25wqIuFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <button className='px-4 pt-4' onClick={onReadMore}>
                    <Summary>
                        {summary}
                    </Summary>
                    <ReadMore />
                </button>
                <div className=''>
                    <Resources {...props} />
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}