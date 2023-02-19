import '../index.css'
import useOnScreen from '../components/checkOnScreen'
import { useRef } from 'react'

function EventItem(props: { item: any }) {

    var ref = useRef<any>();
    const isVisible = useOnScreen(ref)

    return (
        <div ref={ref} className="p-3">
            <div className={`flex justify-center relative ${isVisible ? 'opacity-100 scale-100' : 'opacity-25 scale-0'} duration-500`}>
                <div className="p-3 h-[35vh] w-full bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer">
                    <div className="h-[25vh] rounded-lg bg-[#A8D4FF]"></div>
                    <div className="text-base flex justify-center my-5">{props.item}</div>
                </div>
            </div>
        </div>
    )
}

export default EventItem