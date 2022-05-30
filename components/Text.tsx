import { Children } from "../types"

export const Title = ({ children }: Children) => (
    <div className='flex justify-center items-baseline'>
        <span className='text-2xl bold text-center'>
            {children}
        </span>
    </div>
)

export const Summary = ({ children }: Children) => <p className='text-1xl text-center line-clamp-3 md:line-clamp-none'>{children}</p>
// export const More = ({ children }: Children) => <p className='text-1xl text-left sm:columns-2'>{children}</p>
export const LearnMore = () => (
    <div className='flex justify-center items-baseline'>
        <span className='text-xl sm:text-2xl bold'>
            Learn More
        </span>
    </div>
)