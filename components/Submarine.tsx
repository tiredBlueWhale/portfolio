import { useEffect, useRef, useState } from "react";
import { useScrollY } from "../utils";

export const Submarine = () => {

    const scrollY = useScrollY();

    const [height, setHeight] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const refContainer = useRef(null);
    console.log(document.body.scrollHeight);

    useEffect(() => {
        if (!refContainer.current) return;
        const { clientHeight: heightTotal } = refContainer.current;
        // scrollY / document.body.scrollHeight
        // console.log(scrollY / document.body.scrollHeight);
        const scrollPercentageOfPage = (scrollY - window.innerHeight) / (document.body.scrollHeight - 2 * window.innerHeight);
        setIsVisible(0 <= scrollPercentageOfPage)
        setHeight(heightTotal * scrollPercentageOfPage);

    }, [scrollY, refContainer])

    return (
        <div ref={refContainer} className="fixed left-9 w-1 inset-y-12" style={{ opacity: isVisible ? 1 : 0 }}>
            <div className="relative " style={{ height: `${height}px` }}>
                <div className="-z-10 absolute bottom-0 left-0 w-16 h-16 translate translate-y-1/2 -translate-x-1/2">
                    <img src="tiredBlueWhale.png" alt="Tired Blue Whale logo" className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}