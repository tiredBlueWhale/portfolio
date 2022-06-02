import { Download, Downloads, MadeWith, MadeWithType } from "../types";

const MadeWith = ({ type }: { type: MadeWithType }) => {
    switch (type) {
        case 'unity':
            return <img src="U_Logo_T1_MadeWith_Small_Black_RGB.png" alt="Appstore Download" className='block h-full m-auto max-w-full' />
        case 'react-native':
            return <></>;
        default:
            console.error(`Madewith type::${type} not supported`)
            return <></>;
    }
}

const Download = ({ type }: Download) => {
    switch (type) {
        case 'appstore':
            return <img src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Appstore Download" className='block h-full m-auto max-w-full' />;
        case 'playstore':
            return <img src="google-play-badge.png" alt="PlayStore Download" className='block h-full m-auto max-w-full' />;
        case 'git':
            return <></>;
        default:
            console.error(`Download type::${type} not supported`)
            return <></>;
    }
}

export type ResourcesProps = MadeWith & Downloads;

export const Resources = ({ madeWith, downloads }: ResourcesProps) => {
    return (
        <div className="flex flex-col justify-start items-stretch">
            <div className="flex items-center justify-center h-12 sm:h-16 mb-2">
                {downloads.map((download, index) => (
                    <a key={index} className="h-full px-2">
                        <Download {...download} />
                    </a>
                ))}
            </div>
            <div className="flex items-center justify-center h-8 sm:h-16">
                {madeWith.map((type, index) => (
                    <a key={index} className="h-full px-2">
                        <MadeWith type={type} />
                    </a>
                ))}
            </div>
        </div>
    )
}