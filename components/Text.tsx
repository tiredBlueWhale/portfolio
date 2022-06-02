import Link from "next/link"
import { Children } from "../types"

export const LogoTitle = ({ children }: Children) => (
    <h1 className='text-4xl sm:text-7xl lg:text-8xl text-center'>
        {children}
    </h1>
)

export const LogoSubtitle = ({ children }: Children) => (
    <h2 className='text-3xl sm:text-6xl lg:text-7xl text-center'>
        {children}
    </h2>
)

export const Title = ({ children }: Children) => (
    <div className='flex justify-center items-baseline'>
        <span className='text-2xl sm:text-5xl bold text-center'>
            {children}
        </span>
    </div>
)

export const Summary = ({ children }: Children) => <p className='text-md sm:text-xl text-center line-clamp-5 md:line-clamp-none'>{children}</p>
export const LearnMore = () => (
    <Link href={{
        pathname: '/learn',
        query: {section: '123'}
    }}>
        <div className='flex justify-center items-center'>
            <div className="border-2 border-white hover:bg-white ease-in-out duration-300 px-2 py-1 rounded-sm">
                <h1 className='text-2xl sm:text-3xl bold hover:text-black ease-in-out duration-300'>
                    Learn More
                </h1>
            </div>
        </div>
    </Link>
)