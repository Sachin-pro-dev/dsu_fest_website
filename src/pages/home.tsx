/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import '../index.css'
import img0 from '../img/home-0.jpg'
import logo from '../img/dsu_logo.png'
import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../components/checkOnScreen'
import EventItem from '../components/event'
import { Link } from 'react-router-dom'
import axios from 'axios'
import generatePublicUrl from '../components/getImgurl'
import SlideShow from '../components/slideshow'

function Home() {

    const [events, setEvents] = useState<any>(['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7', 'Event 8', 'Event 9', 'Event 10'])
    const [aboutContentAnimation, setAboutContentAnimation] = useState(false);

    var redHead = useRef<any>();
    const isHeadVisible = useOnScreen(redHead)
    var refAbout = useRef<any>();
    const isAboutVisible = useOnScreen(refAbout)
    var refevent = useRef<any>()
    const isEventVisible = useOnScreen(refevent)

    useEffect(() => {
        if (isAboutVisible) {
            setTimeout(() => {
                setAboutContentAnimation(true)
            }, 100)
        } else {
            setAboutContentAnimation(false)
        }
    })

    // useEffect(() => {
    //     generatePublicUrl();
    // }, [])

    return (
        <div className="overflow-x-hidden">
            <div ref={redHead} className="relative h-[95vh] z-0">
                <div className={`flex justify-center relative ${isHeadVisible ? 'opacity-100' : 'opacity-25'} duration-700`}>
                    <img src={img0} className="h-[95vh]" alt='background' />
                    <div className="absolute bg-[#000000] h-[95vh] w-screen opacity-50"></div>
                </div>
                <div className="absolute inset-0 z-10">
                    <div className="w-screen h-[95vh] grid grid-cols-2 items-center">
                        <div className="flex justify-center">
                            <img src={logo} className="w-[400px]" alt="logo" />
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="">
                                <div className="text-6xl flex justify-center m-5">Parva</div>
                                <div className="text-xl flex justify-center">A Grand Celebration</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-2"></div>
            <div ref={refAbout} className="flex justify-center items-center h-fit py-8 shadow-md">
                <div className={`${isAboutVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-25 scale-0'} duration-500`}>
                    <div className="text-6xl flex justify-center my-5">About</div>
                    <div className={`text-lg text-justify flex justify-center my-5 w-[60vw] ${aboutContentAnimation ? 'opacity-100 scale-100' : 'opacity-25 scale-0'} duration-1000 `}>
                        We often talk about how a scenario could turn out in different ways. The "what if?" question is often looming on our heads. So, we present to you, Parva - an endless possibility.
                        <br /><br />
                        Parva is an inter-university annual cultural event organised by Dayananda Sagar University for Dayananda Sagar Group of Institutions and various universities across Bangalore where people can zealously participate in a vivid number of events organised for them.
                        With its limitless potential, Parva promises to provide an unforgettable experience filled with endless possibilities.
                    </div>
                </div>
            </div>
            <div className="">
                <SlideShow />
            </div>
            <div ref={refevent} className="">
                <div className={`m-5 ${isEventVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} duration-500`}>
                    <div className="text-6xl flex justify-center my-5"> Events </div>
                    <div className="grid grid-cols-6 w-full h-fit">
                        {events.map((item: any) => (
                            <EventItem item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-[50vh] flex justify-center items-center">
                Sponsers
            </div>
            <div className="h-fit flex justify-between items-center bg-[#121417] divide-x ">
                <div className="w-[50vw]">
                    <div className="flex justify-center my-[-20px]">
                        <img src={logo} className="w-[300px]" alt="logo" />
                    </div>
                    <Link to={'https://www.dsu.edu.in/'} >
                        <div className="flex justify-center cursor-pointer mb-5 hover:text-[#C4DAEA]">www.dsu.edu.in</div>
                    </Link>
                    <div className="flex justify-center text-center mb-10">Dayananda Sagar University <br /> Kudlu Gate, Hosur Road, Bengaluru <br /> Bengaluru - 560 068</div>
                </div>
                <div className="w-[50vw]">
                    <div className="flex justify-center m-2">Created by</div>
                    <div className="flex justify-center items-center">
                        <div className="m-2">
                            <div className="flex justify-center">Pranav S S</div>
                            <div className="flex justify-center items-center m-1">
                                <Link to={'https://www.linkedin.com/in/pranavsindhanuru/'} >
                                    <svg className='fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </Link>
                                <Link to={'mailto:pranavsindhanuru@gmail.com'} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#C4DAEA]">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="flex justify-center">R D Lohith</div>
                            <div className="flex justify-center items-center m-1">
                                <Link to={'https://www.linkedin.com/in/rdlohith/'} >
                                    <svg className='fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </Link>
                                <Link to={'mailto:rdlohith@gmail.com'} >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#C4DAEA]">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home