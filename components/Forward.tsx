import { Children } from "../types";

export type MadeWithType = 'unity' | 'react-native';
export type SourceType = 'appstore' | 'playstore' | 'git';
export type Sources = {
    type: SourceType;
    url: string;
}

export type ForwardProps = {
    madeWith: MadeWithType[];
    sources: Sources[]
}

// TODO: Delete
export const dummyForward: ForwardProps = {
    madeWith: ['unity'],
    sources: [
        {
            type: 'appstore',
            url: ''
        },
        {
            type: 'playstore',
            url: ''
        }
    ]
}

const Wrapper = ({ children }: Children) => <div className="flex flex-wrap items-baseline justify-center">{children}</div>
const MadeWith = ({ type }: { type: MadeWithType }) => {
    switch (type) {
        case 'unity':
            return (
                <a>
                    <img src="/U_Logo_T1_MadeWith_Small_Black_RGB.svg" alt="Appstore Download" className='h-20' />
                </a>
            );
        case 'react-native':
            return <></>;
        default:
            console.error(`Madewith type::${type} not supported`)
            return <></>;
    }
}

const Source = ({ type, url }: Sources) => {
    switch (type) {
        case 'appstore':
            return (
                <a>
                    <img src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Appstore Download" className='h-12' />
                </a>
            );
        case 'playstore':
            return (
                <a>
                    <img src="/google-play-badge.png" alt="PlayStore Download" className='h-16' />
                </a>
            )
        case 'git':
            return <></>;
        default:
            console.error(`Source type::${type} not supported`)
            return <></>;
    }
}

export const Forward = ({ madeWith, sources }: ForwardProps) => {
    return (
        <div className="flex flex-col justify-start items-stretch">
            <Wrapper>
                {madeWith.map((type, index) => <MadeWith key={index} type={type} />)}
            </Wrapper>
            <Wrapper>
                {sources.map((source, index) => <Source key={index} {...source} />)}
            </Wrapper>
        </div>
    )
}