import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import { useMediaQuery } from 'react-responsive'

function NavBar() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const [hover, setHover] = useState(false);

    var ref = useRef<any>();
    useEffect(() => {
        let handlerLeave = (e: any) => {
            if (ref.current) {
                if (!ref.current.contains(e.target)) {
                    setHover(false);
                }
            }
        }
        document.addEventListener("mousedown", handlerLeave)
    })

    var refTab = useRef<any>();
    useEffect(() => {
        let handlerLeave = (e: any) => {
            if (refTab.current) {
                if (!refTab.current.contains(e.target)) {
                    setHover(false);
                }
            }
        }
        document.addEventListener("mousedown", handlerLeave)
    })

    // <div>
    //     <h1>Device Test!</h1>
    //     {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
    //     {isBigScreen && <p>You  have a huge screen</p>}
    //     {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    //     <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
    //     {isRetina && <p>You are retina</p>}
    // </div>

    return (
        <div className="text-[#F8F9FA]">
            {isDesktopOrLaptop &&
                <div className="" ref={ref} >
                    <div className="">
                        <div className={`bg-[#343A40] h-[5vh] w-screen drop-shadow-md fixed ${!hover ? 'translate-y-0' : '-translate-y-full'} duration-75`}>
                            <div className={`flex h-full justify-between items-center`}>
                                <div className="mx-5 text-md flex items-center justify-between w-[25vw]">
                                    <div className="text-xl">Parva</div>
                                    <div className="">Dayananda Sagar University</div>
                                </div>
                                <div className="grid grid-cols-5 items-center w-[30vw]">
                                    <div className="w-[6vw] flex justify-center">
                                        <Link to={'/home'} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 justify-self-center cursor-pointer hover:w-6 hover:h-6 transition-all">
                                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="w-[6vw] flex justify-center">
                                        <Link to={'/events'} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 justify-self-center cursor-pointer hover:w-6 hover:h-6 transition-all">
                                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="w-[6vw] flex justify-center">
                                        <Link to={'/artists'} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 justify-self-center cursor-pointer hover:w-6 hover:h-6 transition-all">
                                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="w-[6vw] flex justify-center">
                                        <Link to={'/contact'} >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 justify-self-center cursor-pointer hover:w-6 hover:h-6 transition-all">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="w-[6vw] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 justify-self-center cursor-pointer" onClick={() => setHover(true)}>
                                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className={`bg-[#343A40] h-[15vh] w-screen drop-shadow-md text-[#F8F9FA] fixed ${hover ? 'translate-y-0' : '-translate-y-full'} duration-75 flex justify-between`}>
                            <div className="m-5 h-[15vh]">
                                <div className="text-xl">Parva</div>
                                <div className="text-2xl">Dayananda Sagar University</div>
                            </div>
                            <div className="grid grid-cols-4 h-[15vh] items-center w-[30vw]">
                                <Link to={'/home'} >
                                    <div onClick={() => setHover(false)} className="grid grid-rows-2 justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 justify-self-center cursor-pointer hover:w-9 hover:h-9 transition-all">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                        </svg>
                                        <div className="text-xs justify-self-center cursor-pointer">Home</div>
                                    </div>
                                </Link>
                                <Link to={'/events'} >
                                    <div onClick={() => setHover(false)} className="grid grid-rows-2 justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 justify-self-center cursor-pointer hover:w-9 hover:h-9 transition-all">
                                            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                            <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                        </svg>
                                        <div className="text-xs justify-self-center cursor-pointer">Events</div>
                                    </div>
                                </Link>
                                <Link to={'/artists'} >
                                    <div onClick={() => setHover(false)} className="grid grid-rows-2 justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 justify-self-center cursor-pointer hover:w-9 hover:h-9 transition-all">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                        </svg>
                                        <div className="text-xs justify-self-center cursor-pointer">Artist</div>
                                    </div>
                                </Link>
                                <Link to={'/contact'} >
                                    <div onClick={() => setHover(false)} className="grid grid-rows-2 justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 justify-self-center cursor-pointer hover:w-9 hover:h-9 transition-all">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                        </svg>
                                        <div className="text-xs justify-self-center cursor-pointer">Contact</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isTabletOrMobile && !isPortrait &&
                <div className="" ref={refTab}>
                    <div className="">
                        <div className={`bg-[#343A40] h-[10vh] w-screen drop-shadow-md fixed ${!hover ? 'translate-y-0' : '-translate-y-full'} duration-75`}>
                            <div className={`flex h-full justify-between items-center`}>
                                <div className="mx-5 text-md flex items-center justify-between w-[35vw]">
                                    <div className="text-lg">Parva</div>
                                    <div className="text-sm">Dayananda Sagar University</div>
                                </div>
                                <div className="grid grid-cols-5 items-center w-[30vw]">
                                    <div className="w-[6vw] flex justify-center">
                                        <Link to={'/home'} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 justify-self-center cursor-pointer hover:w-6 hover:h-6 transition-all">
                                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="w-[6vw] flex justify-center">
                                        <Link to={'/events'} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 justify-self-center cursor-pointer hover:w-6 hover:h-6 transition-all">
                                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                                <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="w-[6vw] flex justify-center">
                                        <Link to={'/artists'} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 justify-self-center cursor-pointer hover:w-6 hover:h-6 transition-all">
                                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="w-[6vw] flex justify-center">
                                        <Link to={'/contact'} >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 justify-self-center cursor-pointer hover:w-6 hover:h-6 transition-all">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="w-[6vw] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 justify-self-center cursor-pointer" onClick={() => setHover(true)}>
                                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className={`bg-[#343A40] h-fit w-screen drop-shadow-md text-[#F8F9FA] fixed ${hover ? 'translate-y-0' : '-translate-y-full'} duration-75 flex justify-between`}>
                            <div className="m-5">
                                <div className="text-xl">Parva</div>
                            </div>
                            <div className="flex justify-between items-center w-[50vw] px-2">
                                <Link to={'/home'} >
                                    <div onClick={() => setHover(false)} className="grid grid-cols-2 w-fit justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 justify-self-center cursor-pointer transition-all">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                        </svg>
                                        <div className="text-xs justify-self-center cursor-pointer ml-2">Home</div>
                                    </div>
                                </Link>
                                <Link to={'/events'} >
                                    <div onClick={() => setHover(false)} className="grid grid-cols-2 w-fit justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 justify-self-center cursor-pointer transition-all">
                                            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                            <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                        </svg>
                                        <div className="text-xs justify-self-center cursor-pointer ml-2">Events</div>
                                    </div>
                                </Link>
                                <Link to={'/artists'} >
                                    <div onClick={() => setHover(false)} className="grid grid-cols-2 w-fit justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 justify-self-center cursor-pointer transition-all">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                        </svg>
                                        <div className="text-xs justify-self-center cursor-pointer ml-2">Artist</div>
                                    </div>
                                </Link>
                                <Link to={'/contact'} >
                                    <div onClick={() => setHover(false)} className="grid grid-cols-2 w-fit justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 justify-self-center cursor-pointer transition-all">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                        </svg>
                                        <div className="text-xs justify-self-center cursor-pointer">Contact</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isTabletOrMobile && isPortrait &&
                <div className="">
                    Tablet Portrait
                </div>
            }
        </div>
    )
}

export default NavBar