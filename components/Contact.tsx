import { Card } from "./Card"
import { Wave } from "./Wave"

export const Contact = () => {

    return (
        <Card waveColor="fill-red-400" index={0}>
            <div className="relative h-screen bg-red-400 flex-auto flex flex-col justify-center items-center">
                <a className="px-6 py-3 inline-block uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 rounded-full text-3xl sm:text-2xl" href="mailto: ">
                    Contact Me
                </a>
            </div>
        </Card>
    )
}