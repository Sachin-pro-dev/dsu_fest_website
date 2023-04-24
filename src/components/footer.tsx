import { Link } from 'react-router-dom'
import '../index.css'
import { useMediaQuery } from 'react-responsive';
import logo from '../img/ENGLISH.png'

function Footer(props: { scroll: any }) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className="">
            {isDesktopOrLaptop &&
                <div className="h-fit bg-[#000000] pt-[5vh]">
                    <div className="grid grid-cols-4 justify-center items-center h-[50vh] p-2">
                        <img src={logo} alt="logo" className='h-80 w-80 bg-[#FFFFFF] rounded-full justify-self-center' />
                        <div className="">
                            <div className="flex justify-center items-center text-xl mb-5">LINKS</div>
                            <div className="grid grid-rows-4">
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link onClick={props.scroll} to={'/home'}>HOME</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/events'} onClick={props.scroll}>EVENTS</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/artists'} onClick={props.scroll}>ARTISTS</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/contact'} onClick={props.scroll}>CONTACTS</Link></div>
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
                                                className="fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-6 h-6 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                    <div className="grid grid-cols-4 justify-center items-center h-[50vh] p-2">
                        <img src={logo} alt="logo" className='h-40 w-40 bg-[#FFFFFF] rounded-full justify-self-center' />
                        <div className="">
                            <div className="flex justify-center items-center text-md mb-5">LINKS</div>
                            <div className="grid grid-rows-4 text-sm">
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link onClick={props.scroll} to={'/home'}>HOME</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/events'} onClick={props.scroll}>EVENTS</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/artists'} onClick={props.scroll}>ARTISTS</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/contact'} onClick={props.scroll}>CONTACTS</Link></div>
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
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="logo" className='h-28 w-28 bg-[#FFFFFF] rounded-full' />
                    </div>
                    <div className="grid grid-cols-4 justify-center items-center h-[40vh] p-2">
                        <div className="">
                            <div className="flex justify-center items-center text-md mb-5">LINKS</div>
                            <div className="grid grid-rows-4 text-sm">
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link onClick={props.scroll} to={'/home'}>HOME</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/events'} onClick={props.scroll}>EVENTS</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/artists'} onClick={props.scroll}>ARTISTS</Link></div>
                                <div className="justify-self-center cursor-pointer hover:text-[#9F9FE3] transition-all"><Link to={'/contact'} onClick={props.scroll}>CONTACTS</Link></div>
                            </div>
                        </div>
                        <div className="col-span-3 ">
                            <div className="flex justify-center items-center text-md mb-5">Site created and built by</div>
                            <div className="flex justify-center items-center">
                                <div className="grid grid-rows-4 items-center w-[60vw] h-[20vh]">
                                    <div className="grid grid-cols-7 m-1 items-center">
                                        <div className="text-xs mr-5 col-span-5">Pranav S S</div>
                                        <Link to={"https://www.linkedin.com/in/pranavsindhanuru/"}>
                                            <svg
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="fill-[#F8F9FA] w-4 h-4 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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
                                                className="w-5 h-5 mx-3 cursor-pointer hover:fill-[#9F9FE3] transition-all"
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