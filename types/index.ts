import { RefObject } from "react";

export type DirectionTypes = 'top' | 'right' | 'bottom' | 'left';
export type DirectionType = {
    direction: DirectionTypes;
}

export type RefViewportOptional = {
    refViewport?: RefObject<HTMLDivElement>;
}

export type RefViewport = {
    refViewport: RefObject<HTMLDivElement>;
}

export type Offset = {
    offset: number;
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

export type IsLeftToRight = {
    isLeftToRight?: boolean;
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
} & Speed & Translate;

export type ImageRow = {
    justify: 'justify-start' | 'justify-center' | 'justify-end' | 'justify-between';
    images: Image[];
}

export type Images = {
    imageRows: ImageRow[];
}

export type MadeWithType = 'unity' | 'react-native';
export type DownloadType = 'appstore' | 'playstore' | 'git';
export type Download = {
    type: DownloadType;
    url: string;
}

export type MadeWith = {
    madeWith: MadeWithType[];
}

export type Downloads = {
    downloads: Download[]
}

export type SectionModel = Title & Summary & More & Images & BackgroundColor & WaveColor & MadeWith & Downloads;
