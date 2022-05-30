import { Children, Index, WaveColor } from "../types";
import { Wave } from "./Wave";

export type CardProps = Children & WaveColor & Index;

export const Card = ({ children, ...props }: CardProps) => (
    <div className='snap-start sm:snap-align-none	'>
        <div className='relative'>
            <div className="absolute inset-x-0 bottom-0 h-32">
                <Wave {...props} />
            </div>
        </div>
        {children}
    </div>
)