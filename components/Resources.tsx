import { Children, Downloads, MadeWithType } from "../types";

const Wrapper = ({ children }: Children) => <div className="flex flex-wrap items-baseline justify-center">{children}</div>
const MadeWith = ({ type }: { type: MadeWithType }) => {
    switch (type) {
        case 'unity':
            return (
                <a>
                    <img src="U_Logo_T1_MadeWith_Small_Black_RGB.svg" alt="Appstore Download" className='h-20' />
                </a>
            );
        case 'react-native':
            return <></>;
        default:
            console.error(`Madewith type::${type} not supported`)
            return <></>;
    }
}

const Download = ({ type, url }: Downloads) => {
    switch (type) {
        case 'appstore':
            return (
                <a>
                    <img src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Appstore Download" className='h-12' />
                </a>
            );
        case 'playstore':
            return (
                <a>
                    <img src="google-play-badge.png" alt="PlayStore Download" className='h-16' />
                </a>
            )
        case 'git':
            return <></>;
        default:
            console.error(`Download type::${type} not supported`)
            return <></>;
    }
}

export type ResourcesProps = {
    madeWith: MadeWithType[];
    downloads: Downloads[]
}

export const Resources = ({ madeWith, downloads }: ResourcesProps) => {
    return (
        <div className="flex flex-col justify-start items-stretch">
            <Wrapper>
                {madeWith.map((type, index) => <MadeWith key={index} type={type} />)}
            </Wrapper>
            <Wrapper>
                {downloads.map((download, index) => <Download key={index} {...download} />)}
            </Wrapper>
        </div>
    )
}