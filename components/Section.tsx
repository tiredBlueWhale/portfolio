import { BackgroundColor, Images, Index, IsRight, More, Summary, Title, WaveColor } from "../types";
import { useIsMobile } from '../utils';
import { SectionMobile} from './SectionMobile';
import { SectionDesktop} from './SectionDesktop';
import { Card } from "./Card";
import { ResourcesProps } from "./Resources";

export type SectionModel = Title & Summary & More & Images & BackgroundColor & WaveColor & ResourcesProps;
export type SectionProps = SectionModel & IsRight & Index;

export const Section = ({...props}: SectionProps) => {
    // To achieve the mobile and desktop view only css is not enough
    const isMobile = useIsMobile();

    return (
        <Card waveColor={props.waveColor}>
            <div className={`${props.backgroundColor}`}>
                {isMobile ? <SectionMobile {...props} /> : <SectionDesktop {...props} />}
            </div>
        </Card>
    ) 
}