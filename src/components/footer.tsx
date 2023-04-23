import { Link } from 'react-router-dom'
import '../index.css'
import { useMediaQuery } from 'react-responsive';

function Footer() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className="">
            {isDesktopOrLaptop &&
                <div className="h-fit bg-[#000000] pt-[5vh]">
                    <div className="grid grid-cols-2 divide-x justify-center items-center h-[50vh] p-2">
                        <div className="grid grid-rows-2 justify-center items-center h-[40vh]">
                            <img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/dsu.jpeg" className={`h-[225px] justify-self-center object-cover rounded`} loading='lazy' alt="dsu" />
                            <div className="text-sm">
                                DSU City innovation Campus <br /> Hosur Road, Kudlu Gate, Srinivasa Nagar, HAL Layout, Singasandra <br /> Bengaluru - 560068
                            </div>
                        </div>
                        <div className="grid grid-rows-2 justify-center items-center h-[40vh]">
                            <img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/dsi.jpeg" className={`h-[225px] justify-self-center object-cover rounded`} loading='lazy' alt="dsu" />
                            <div className="text-sm">
                                DSCE Campus <br /> Shavige Malleshwara Hills, 1st Stage, Kumaraswamy Layout <br /> Bengaluru - 560078
                            </div>
                        </div>
                    </div>
                    <div className="px-28"><div className="border border-top"></div></div>
                    <div className="grid grid-cols-3 justify-center items-center h-[30vh] p-2">
                        <div className="">
                            <div className="flex justify-center items-center text-xl mb-5">LINKS</div>
                            <div className="grid grid-rows-4">
                                <div className="justify-self-center">HOME</div>
                                <div className="justify-self-center">EVENTS</div>
                                <div className="justify-self-center">ARTISTS</div>
                                <div className="justify-self-center">CONTACTS</div>
                            </div>
                        </div>
                        <div className="col-span-2 ">
                            <div className="flex justify-center items-center text-xl mb-5">Site created and built by</div>
                            <div className="flex justify-center items-center">
                                <div className="grid grid-rows-4 w-[35vw]">
                                    <div className="grid grid-cols-4 m-1">
                                        <div className="text-lg mr-5 col-span-2">Pranav S S</div>
                                        <Link to={"https://www.linkedin.com/in/pranavsindhanuru/"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:pranavsindhanuru@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-4 m-1">
                                        <div className="text-lg mr-5 col-span-2">Lohith R D</div>
                                        <Link to={"https://www.linkedin.com/in/rdlohith/"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:rdlohith@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-4 m-1">
                                        <div className="text-lg mr-5 col-span-2">Kamarsu Venkata Sriya</div>
                                        <Link to={"https://www.linkedin.com/in/sriya-k-v-039107188"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:Sriya.v.kamarsu@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-4 m-1">
                                        <div className="text-lg mr-5 col-span-2">Sachin Baluragi</div>
                                        <Link to={"https://www.linkedin.com/in/sachin-baluragi-73ab38258"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:sachinbaluragi2.0@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
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
            }
            {isTabletOrMobile && !isPortrait &&
                <div className="h-fit bg-[#000000] pt-[5vh] w-full">
                    <div className="grid grid-cols-2 divide-x justify-center items-center h-[60vh] p-2">
                        <div className="flex justify-center items-center">
                            <div className="grid grid-rows-2 justify-center items-center h-[50vh] w-[40vw]">
                                <img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/dsu.jpeg" className={`h-[100px] justify-self-center object-cover rounded`} loading='lazy' alt="dsu" />
                                <div className="text-xs">
                                    DSU City innovation Campus <br /> Hosur Road, Kudlu Gate, Srinivasa Nagar, HAL Layout, Singasandra <br /> Bengaluru - 560068
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="grid grid-rows-2 justify-center items-center h-[50vh] w-[40vw]">
                                <img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/dsi.jpeg" className={`h-[100px] justify-self-center object-cover rounded`} loading='lazy' alt="dsu" />
                                <div className="text-xs">
                                    DSCE Campus <br /> Shavige Malleshwara Hills, 1st Stage, Kumaraswamy Layout <br /> Bengaluru - 560078
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-28"><div className="border border-top"></div></div>
                    <div className="grid grid-cols-3 justify-center items-center h-[50vh] p-2">
                        <div className="">
                            <div className="flex justify-center items-center text-md mb-5">LINKS</div>
                            <div className="grid grid-rows-4 text-sm">
                                <div className="justify-self-center">HOME</div>
                                <div className="justify-self-center">EVENTS</div>
                                <div className="justify-self-center">ARTISTS</div>
                                <div className="justify-self-center">CONTACTS</div>
                            </div>
                        </div>
                        <div className="col-span-2 ">
                            <div className="flex justify-center items-center text-md mb-5">Site created and built by</div>
                            <div className="flex justify-center items-center">
                                <div className="grid grid-rows-4 w-[50vw] h-[25vh]">
                                    <div className="grid grid-cols-5 m-1">
                                        <div className="text-sm mr-5 col-span-3">Pranav S S</div>
                                        <Link to={"https://www.linkedin.com/in/pranavsindhanuru/"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:pranavsindhanuru@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-5 m-1">
                                        <div className="text-sm mr-5 col-span-3">Lohith R D</div>
                                        <Link to={"https://www.linkedin.com/in/rdlohith/"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:rdlohith@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-5 m-1">
                                        <div className="text-sm mr-5 col-span-3">Kamarsu Venkata Sriya</div>
                                        <Link to={"https://www.linkedin.com/in/sriya-k-v-039107188"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:Sriya.v.kamarsu@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-5 m-1">
                                        <div className="text-sm mr-5 col-span-3">Sachin Baluragi</div>
                                        <Link to={"https://www.linkedin.com/in/sachin-baluragi-73ab38258"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:sachinbaluragi2.0@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
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
            }{isTabletOrMobile && isPortrait &&
                <div className="h-fit bg-[#000000] pt-[5vh] w-full">
                    <div className="grid grid-cols-1 justify-center items-center h-[80vh] p-2">
                        <div className="flex justify-center items-center">
                            <div className="grid grid-rows-2 justify-center items-center h-[40vh] w-[80vw]">
                                <img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/dsu.jpeg" className={`h-[150px] justify-self-center object-cover rounded`} loading='lazy' alt="dsu" />
                                <div className="text-xs justify-self-center">
                                    DSU City innovation Campus <br /> Hosur Road, Kudlu Gate, Srinivasa Nagar, HAL Layout, Singasandra <br /> Bengaluru - 560068
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="grid grid-rows-2 justify-center items-center h-[40vh] w-[80vw]">
                                <img src="https://ik.imagekit.io/pranavSindhanuru/sponsors/dsi.jpeg" className={`h-[150px] justify-self-center object-cover rounded`} loading='lazy' alt="dsu" />
                                <div className="text-xs justify-self-center">
                                    DSCE Campus <br /> Shavige Malleshwara Hills, 1st Stage, Kumaraswamy Layout <br /> Bengaluru - 560078
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-28"><div className="border border-top"></div></div>
                    <div className="grid grid-cols-4 justify-center items-center h-[50vh] p-2">
                        <div className="">
                            <div className="flex justify-center items-center text-md mb-5">LINKS</div>
                            <div className="grid grid-rows-4 text-sm">
                                <div className="justify-self-center">HOME</div>
                                <div className="justify-self-center">EVENTS</div>
                                <div className="justify-self-center">ARTISTS</div>
                                <div className="justify-self-center">CONTACTS</div>
                            </div>
                        </div>
                        <div className="col-span-3 ">
                            <div className="flex justify-center items-center text-md mb-5">Site created and built by</div>
                            <div className="flex justify-center items-center">
                                <div className="grid grid-rows-4 w-[60vw] h-[25vh]">
                                    <div className="grid grid-cols-7 m-1 items-center">
                                        <div className="text-xs mr-5 col-span-5">Pranav S S</div>
                                        <Link to={"https://www.linkedin.com/in/pranavsindhanuru/"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:pranavsindhanuru@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-7 m-1">
                                        <div className="text-xs mr-5 col-span-5">Lohith R D</div>
                                        <Link to={"https://www.linkedin.com/in/rdlohith/"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:rdlohith@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-7 m-1">
                                        <div className="text-xs mr-5 col-span-5">Kamarsu Venkata Sriya</div>
                                        <Link to={"https://www.linkedin.com/in/sriya-k-v-039107188"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:Sriya.v.kamarsu@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
                                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-7 m-1">
                                        <div className="text-xs mr-5 col-span-5">Sachin Baluragi</div>
                                        <Link to={"https://www.linkedin.com/in/sachin-baluragi-73ab38258"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                        <Link to={"mailto:sachinbaluragi2.0@gmail.com"}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#C4DAEA]"
                                            >
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
            }
        </div>
    )
}

export default Footer