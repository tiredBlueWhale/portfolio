import { RefObject } from "react";

export type AnimationTypes = 'opacity' | 'slide-in' | 'paint' | 'scroll-horizontal';

export type AnimationType = {
    type?: AnimationTypes;
}

export type RefViewport = {
    refViewport: RefObject<HTMLDivElement>;
}

export type Children = {
    children: React.ReactNode;
}

export type Speed = {
    speed: number;
}

export type Translate = {
    translate?: string;
}

export type ZIndex = {
    zIndex?: number;
}

export type IsLeftToRight = {
    isLeftToRight: boolean;
}

export type BackgroundColor = {
    backgroundColor: string;
}

export type WaveColor = {
    waveColor: string;
}

export type Index = {
    index?: number;
}

export type Title = {
    title: string;
}

export type Summary = {
    summary: string;
}

export type More = {
    more?: string;
}

export type Image = {
    src: string
} & Speed & Translate & ZIndex;

export type ImageRow = {
    justify: 'justify-start' | 'justify-center' | 'justify-end' | 'justify-between';
    images: Image[];
}

export type Images = {
    imageRows: ImageRow[];
}

export type MadeWithType = 'unity' | 'react-native';
export type DownloadType = 'appstore' | 'playstore' | 'git';
export type Downloads = {
    type: DownloadType;
    url: string;
}