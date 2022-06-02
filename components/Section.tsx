import { Index, IsLeftToRight, SectionModel, } from "../types";
import { useIsMobile } from '../utils';
import { SectionMobile} from './SectionMobile';
import { SectionDesktop} from './SectionDesktop';
import { Card } from "./Card";

export type SectionProps = SectionModel & IsLeftToRight & Index;

export const Section = ({...props}: SectionProps) => {
    // To achieve the mobile and desktop view only css is not enough
    const isMobile = useIsMobile();

    return (
        <Card {...props} >
            <div className={`${props.backgroundColor}`}>
                {isMobile ? <SectionMobile {...props} /> : <SectionDesktop {...props} />}
            </div>
        </Card>
    ) 
}