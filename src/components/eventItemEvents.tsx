/* eslint-disable react-hooks/exhaustive-deps */
import '../index.css'
import useOnScreen from './checkOnScreen'
import { useRef } from 'react'

function EventItemEvents(props: { item: any }) {
    var ref = useRef<any>();
    const isVisible = useOnScreen(ref)

    return (
        <div ref={ref} className="p-3">
            <div className={`flex justify-center relative ${isVisible ? 'opacity-100 scale-100' : 'opacity-25 scale-0'} duration-500`}>
                <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer">
                    <div className="h-[225px] rounded-lg transition-all bg-[#F6E8EA]">
                    </div>
                    <div className="text-base flex justify-center my-5">{props.item}</div>
                </div>
            </div>
        </div>
    )
}

export default EventItemEvents