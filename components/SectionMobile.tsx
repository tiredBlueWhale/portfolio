import { info } from 'console';
import { useCallback, useEffect, useRef, useState } from 'react';
import { More, Images, BackgroundColor } from '../types';
import { Resources } from './Resources';
import { SectionProps } from './Section';
import { LearnMore, Summary, Title } from './Text';
import { Wave } from "./Wave";

export const SectionMobile = ({ title, summary, more, backgroundColor, waveColor, imageRows, ...props }: SectionProps) => {

    const onReadMore = useCallback(() => console.log('Read more'), [])

    return (
        <div className='h-screen w-screen flex flex-col'>
            <div className='flex-none sticky top-0'>
                <div className={`${backgroundColor} drop-shadow flex justify-center items-center pt-4 pb-3 px-2`}>
                    <Title>
                        {title}
                    </Title>
                </div>
            </div>
            <div className='flex-1 pt-4 pb-12 flex flex-col justify-start min-h-0'>
                <div className='px-4' onClick={onReadMore}>
                    <Summary>
                        {summary}
                    </Summary>
                </div>
                <div className='flex-1 flex flex-nowrap items-center overflow-x-scroll overflow-y-hidden snap-mandatory snap-x'>
                    {imageRows.map((row) => row.images.map(({ src }, index) => (
                        <div key={index} className='h-full w-screen flex-shrink-0 snap-center flex justify-center p-2'>
                            <img src={src} className='object-contain' />
                        </div>
                    )))}
                </div>
                <div className='pb-2'>
                    <LearnMore />
                </div>
                <div className=''>
                    <Resources {...props} />
                </div>
            </div>
        </div>
    )
}