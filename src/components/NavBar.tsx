import { useEffect, useRef, useState } from 'react';
import '../index.css'

function NavBar() {

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
        let handlerEnter = (e: any) => {
            if (ref.current) {
                if (ref.current.contains(e.target)) {
                    setHover(true);
                }
            }
        }
        document.addEventListener("mouseleave", handlerLeave)
        document.addEventListener("mouseenter", handlerEnter)
    })

    return (
        <div className="" ref={ref} >
            <div className="">
                <div className={`bg-[#343A40] h-[5vh] w-screen drop-shadow-md text-[#F8F9FA] fixed ${!hover ? 'translate-y-0' : '-translate-y-full'} duration-75`}>
                    <div className={`flex h-full justify-between items-center`}>
                        <div className="mx-5 text-md flex items-center justify-between w-[10vw]">
                            <div className="">Parava</div>
                            <div className="">DSU</div>
                        </div>
                        <div className="mx-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className={`bg-[#343A40] h-[15vh] w-screen drop-shadow-md text-[#F8F9FA] fixed ${hover ? 'translate-y-0' : '-translate-y-full'} duration-75 flex justify-between`}>
                    <div className="m-5 h-[15vh]">
                        <div className="text-xl">Parava</div>
                        <div className="text-2xl">Dayananda Sagar Univesity</div>
                    </div>
                    <div className="grid grid-cols-4 h-[15vh] items-center w-[30vw]">
                        <div className="grid grid-rows-2 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 justify-self-center cursor-pointer hover:w-9 hover:h-9 transition-all">
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            <div className="text-xs justify-self-center">Home</div>
                        </div>
                        <div className="grid grid-rows-2 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 justify-self-center cursor-pointer hover:w-9 hover:h-9 transition-all">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                            </svg>
                            <div className="text-xs justify-self-center">Artist</div>
                        </div>
                        <div className="grid grid-rows-2 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 justify-self-center cursor-pointer hover:w-9 hover:h-9 transition-all">
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                            <div className="text-xs justify-self-center">Book Online</div>
                        </div>
                        <div className="grid grid-rows-2 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 justify-self-center cursor-pointer hover:w-9 hover:h-9 transition-all">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            <div className="text-xs justify-self-center">Contact</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar