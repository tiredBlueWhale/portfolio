import { useEffect, useState } from 'react';
import { Index, WaveColor } from '../types';

const paths = [
    "m0 426 17.8-13.7c17.9-13.6 53.5-41 89-47s70.9 9.4 106.4 25.9S284.3 425.3 320 419c35.7-6.3 71.3-36.7 106.8-44 35.5-7.3 70.9 8.3 106.4 27.5s71.1 41.8 106.8 50.7c35.7 8.8 71.3 3.8 106.8-14.2s70.9-49 106.4-58.7c35.5-9.6 71.1 2 89 7.9L960 394v147H0Z",
    "m0 383 17.8 9.2c17.9 9.1 53.5 27.5 89 40.6 35.5 13.2 70.9 21.2 106.4 18.4 35.5-2.9 71.1-16.5 106.8-31.9 35.7-15.3 71.3-32.3 106.8-30.1 35.5 2.1 70.9 23.5 106.4 37.5s71.1 20.6 106.8 12c35.7-8.7 71.3-32.7 106.8-33 35.5-.4 70.9 23 106.4 26.6 35.5 3.7 71.1-12.3 89-20.3l17.8-8v137H0Z",
];

export type WaveProps = WaveColor & Index

export const Wave = ({index, waveColor}: WaveProps) => {

    const [path, setPath] = useState('');
    useEffect(() => {
        if (index !== undefined && index < paths.length) setPath(paths[index]);
        else setPath(paths[0]);
    }, [index])

    return (
        <svg preserveAspectRatio="none" viewBox="0 300 960 240" width="100%" height="100%" className={waveColor} >
            <path d={path} />
        </svg>
    );
}