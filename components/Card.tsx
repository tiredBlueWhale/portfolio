import { Children, Index, Title, WaveColor } from "../types";
import { Wave } from "./Wave";

export type CardProps = Children & WaveColor & Title & Index;

export const Card = ({ children, title, ...props }: CardProps) => (
    <div id={title} className='snap-start sm:snap-align-none'>
        <div className='relative'>
            <div className="absolute inset-x-0 bottom-0 h-12">
                <Wave {...props} />
            </div>
        </div>
        {children}
    </div>
)