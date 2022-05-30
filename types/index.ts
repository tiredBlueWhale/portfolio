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

export type IsRight = {
    isRight: boolean;
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
export type Images = {
    images: string[];
}