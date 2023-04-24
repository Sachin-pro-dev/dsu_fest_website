
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import Footer from '../../components/footer'
import { eventData } from './eventsData'

import '../../index.css'

function EventsMobile() {

    const [soloEvents, setSoloEvents] = useState([
        { title: 'Stand Up Comedy', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/stand_up_comedy.jpg' },
        { title: 'Beat Boxing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/beat-boxing.jpg' },
        { title: 'Dance', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/dance-solo.jpg' },
        { title: 'Singing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/singing-solo.jpg' },
        { title: 'Content Writing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/content-writing.jpg' },
        { title: 'Poetry', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/poetry.jpg' },
        { title: 'Essay Writing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/essay-writing.jpg' },
        { title: 'Painting', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/painting.jpg' }
    ])

    const [groupEvents, setGroupEvents] = useState([
        // { title: 'FIFA', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/fifa.jpg' },
        { title: 'Valorant', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/Valorant.jpg' },
        { title: 'CODM', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/codm.jpg' },
        { title: 'Group Dance', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/dance-group.jpg' },
        { title: 'Battle Of Bands', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/battle-of-bands.jpg' },
        { title: 'Treasure Hunt', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/treasure-hunt.jpg' },
        { title: 'Documentary', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/documentary.jpg' },
        { title: 'Theatre', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/theatre.jpg' },
        { title: 'Reels', img: 'https://ik.imagekit.io/pranavSindhanuru/events-img/reels.jpg' },
        { title: 'Fashion Show', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/fasion-show.jpg' },
        { title: 'Face Painting', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/face-painting.jpg' },
        { title: 'Product Launch', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/product-launch.jpg' },
        { title: 'Rangoli', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/rangoli.jpg' },
        { title: 'Debate', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/debate.jpg' },
        { title: 'Mr & Miss DSU', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/mr-miss-dsu.jpg' },
        { title: 'E Poster', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/e-poster.jpg' },
        // { title: 'Hackathon', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/hackathon.jpg' },
        // { title: 'Code Auction', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/code-auction.jpg' }
    ])

    // modal control
    const [modalShow, setModalShow] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(false);
    const [modalData, setModalData] = useState<any>();

    useEffect(() => {
        if (modalShow) {
            setTimeout(() => {
                setModalAnimation(true)
            }, 100)
        }
    }, [modalShow])

    useEffect(() => {
        if (!modalAnimation) {
            setTimeout(() => {
                setModalShow(false)
            }, 100)
        }
    }, [modalAnimation])

    const onClickEventTile = (title: any) => {
        setModalShow(true)
        setModalData(eventData[title])
    }

    var ref = useRef<any>();
    useEffect(() => {
        let handlerLeave = (e: any) => {
            if (ref.current) {
                if (!ref.current.contains(e.target)) {
                    setModalAnimation(false);
                }
            }
        }
        document.addEventListener("mousedown", handlerLeave)
    })

    return (
        <div className="">
            <div className="">
                <div className="p-5">
                    <div className="text-3xl flex justify-center items-center w-full p-5">
                        SOLO EVENTS
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="">
                            {soloEvents.map((item: any) => (
                                <div className="p-3 my-5 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-90 cursor-pointer" onClick={() => onClickEventTile(item.title)}>
                                    <div className="h-[225px] rounded-lg transition-all">
                                        <img src={item.img} className={`h-[225px] object-cover`} loading='lazy' alt="event" />
                                    </div>
                                    <div className="text-base flex justify-center my-5">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-3xl flex justify-center items-center w-full p-5">
                        GROUP EVENTS
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="">
                            {groupEvents.map((item: any) => (
                                <div className="p-3 my-5 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-90 cursor-pointer" onClick={() => onClickEventTile(item.title)}>
                                    <div className="h-[225px] rounded-lg transition-all">
                                        <img src={item.img} className={`h-[225px] object-cover`} loading='lazy' alt="event" />
                                    </div>
                                    <div className="text-base flex justify-center my-5">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {modalShow &&
                <div className="">
                    <div className="fixed top-0 left-0 right-0 z-20">
                        <div className="h-screen w-screen bg-[#000000] opacity-75" />
                    </div>
                    <div className="fixed top-0 left-0 right-0 z-30">
                        <div className="h-screen w-screen flex justify-center items-center">
                            <div ref={ref} className={`max-w-[80vw] max-h-[80vh] rounded-lg bg-[#DEE2E6] p-3 ${modalAnimation ? 'scale-100' : 'scale-0'} transition-all ease-in-out text-[#212529] justif-center items-center`}>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-3xl">{modalData.title}</div>
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 stroke-[#212529] cursor-pointer" onClick={() => setModalAnimation(false)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-lg">{modalData.loc}</div>
                                <div className="overflow-y-auto scrollbar max-h-[60vh] mt-[3vh] mx-1">
                                    {modalData.data.map((item: any) => (
                                        <div className="grid grid-cols-12 items-center my-2 justify-center">
                                            <div className="h-[10px] w-[10px] rounded-full bg-[#212529] "></div>
                                            <div className="col-span-11 text-sm">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default EventsMobile