import { Link } from 'react-router-dom'
import '../index.css'
import logo from "../img/dsu_logo.png";
import { useMediaQuery } from 'react-responsive';

function Footer() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className="">
            {isDesktopOrLaptop &&
                <div className="h-fit flex justify-between items-center bg-[#121417] divide-x ">
                    <div className="w-[50vw]">
                        <div className="flex justify-center my-[-20px]">
                            <img src={logo} className="w-[300px]" alt="logo" />
                        </div>
                        <Link to={"https://www.dsu.edu.in/"}>
                            <div className="flex justify-center cursor-pointer mb-5 hover:text-[#C4DAEA]">
                                www.dsu.edu.in
                            </div>
                        </Link>
                        <div className="flex justify-center text-center mb-10">
                            Dayananda Sagar University <br /> Kudlu Gate, Hosur Road, Bengaluru{" "}
                            <br /> Bengaluru - 560 068
                        </div>
                    </div>
                    <div className="w-[50vw]">
                        <div className="flex justify-center m-2">Created by</div>
                        <div className="flex justify-center items-center">
                            <div className="m-2">
                                <div className="flex justify-center">Pranav S S</div>
                                <div className="flex justify-center items-center m-1">
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
                            </div>
                            <div className="m-2">
                                <div className="flex justify-center">R D Lohith</div>
                                <div className="flex justify-center items-center m-1">
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
                            </div>
                        </div>
                    </div>
                </div>
            }
            {isTabletOrMobile && !isPortrait &&
                <div className="h-fit flex justify-between items-center bg-[#121417] divide-x ">
                    <div className="w-[50vw]">
                        <div className="flex justify-center my-[-20px]">
                            <img src={logo} className="w-[300px]" alt="logo" />
                        </div>
                        <Link to={"https://www.dsu.edu.in/"}>
                            <div className="flex justify-center cursor-pointer mb-5 hover:text-[#C4DAEA]">
                                www.dsu.edu.in
                            </div>
                        </Link>
                        <div className="flex justify-center text-center mb-10">
                            Dayananda Sagar University <br /> Kudlu Gate, Hosur Road, Bengaluru{" "}
                            <br /> Bengaluru - 560 068
                        </div>
                    </div>
                    <div className="w-[50vw]">
                        <div className="flex justify-center m-2">Created by</div>
                        <div className="flex justify-center items-center">
                            <div className="m-2">
                                <div className="flex justify-center">Pranav S S</div>
                                <div className="flex justify-center items-center m-1">
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
                            </div>
                            <div className="m-2">
                                <div className="flex justify-center">R D Lohith</div>
                                <div className="flex justify-center items-center m-1">
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
                            </div>
                        </div>
                    </div>
                </div>
            }{isTabletOrMobile && isPortrait &&
                <div className="h-fit flex justify-between items-center bg-[#121417] divide-x ">
                    <div className="w-[50vw]">
                        <div className="flex justify-center my-[-20px]">
                            <img src={logo} className="w-[300px]" alt="logo" />
                        </div>
                        <Link to={"https://www.dsu.edu.in/"}>
                            <div className="flex justify-center cursor-pointer mb-5 hover:text-[#C4DAEA]">
                                www.dsu.edu.in
                            </div>
                        </Link>
                        <div className="flex justify-center text-center mb-10">
                            Dayananda Sagar University <br /> Kudlu Gate, Hosur Road, Bengaluru{" "}
                            <br /> Bengaluru - 560 068
                        </div>
                    </div>
                    <div className="w-[50vw]">
                        <div className="flex justify-center m-2">Created by</div>
                        <div className="flex justify-center items-center">
                            <div className="m-2">
                                <div className="flex justify-center">Pranav S S</div>
                                <div className="flex justify-center items-center m-1">
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
                            </div>
                            <div className="m-2">
                                <div className="flex justify-center">R D Lohith</div>
                                <div className="flex justify-center items-center m-1">
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
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Footer