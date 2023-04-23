/* eslint-disable no-restricted-globals */
import "./index.css";
import NavBar from "./components/NavBar";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import Artists from "./pages/artists/artists";
import Contacts from "./pages/contacts/contacts";
import { useMediaQuery } from "react-responsive";
import EventsMobile from "./pages/events/events-mobile";
import ArtistsMobile from "./pages/artists/artists-mobile";
import ContactsMobile from "./pages/contacts/contacts-mobile";
import EventsTablet from "./pages/events/events-tablet";
import ArtistsTablet from "./pages/artists/artists-tablet";
import ContactsTablet from "./pages/contacts/contacts-tablet";
import { useEffect, useRef, useState } from "react";
import HomeTablet from "./pages/home/home-tablet";
import HomeMobile from "./pages/home/home-mobile";

function App() {
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

	const ref = useRef<any>(null);

	const scroll = () => {
		ref.current.scroll({
			top: 0,
			behavior: "smooth"
		});
	}

	const [regDrop, setRegDrop] = useState(false);

	var refReg = useRef<any>();
	useEffect(() => {
		let handlerLeave = (e: any) => {
			if (refReg.current) {
				if (!refReg.current.contains(e.target)) {
					setRegDrop(false);
				}
			}
		}
		document.addEventListener("mousedown", handlerLeave)
	})

	return (
		<div className="App bg-[#212529] font-['Poppins'] ">
			<HashRouter>
				<div className="absolute z-10">
					<NavBar scroll={scroll} />
				</div>
				<div className="fixed shadow-md bottom-0 right-0 z-10 mb-2 mr-2 p-2 flex justify-center items-center cursor-pointer rounded-full bg-[#F8F9Fa]" onClick={() => setRegDrop(!regDrop)}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
					</svg>
				</div>
				<div ref={refReg} className={`overflow-y-auto max-h-[60vh] fixed text-[#F8F9FA] bottom-0 right-0 z-10 w-[100px] p-2 mr-4 mb-12 bg-[#212529] rounded ${regDrop ? 'scale-100 translate-y-0' : 'scale-0 translate-y-full'} border shadow-md transition-all`}>
					<div className="divide-y">
						<div onClick={() => { window.open("https://forms.gle/f9jNDpXZQZD2FEDS6"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">SBAS</div>
						<div onClick={() => { window.open("https://forms.gle/JyakQyixDrbcQyu66"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">SOE</div>
						<div onClick={() => { window.open("https://forms.gle/ZLbGkvDGDppcTDhF6"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">COPS</div>
						<div onClick={() => { window.open("https://forms.gle/qg8As1RGcuWrZnBv6"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">SCMS(UG)</div>
						<div onClick={() => { window.open("https://forms.gle/zvcvFuUzchnfrRPP9"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">SCMS(PG)</div>
						<div onClick={() => { window.open("https://forms.gle/B12mEHEZNAtyear8A"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">COPT</div>
						<div onClick={() => { window.open("https://forms.gle/R7a6zQa82tANH3Lb8"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">CON</div>
						<div onClick={() => { window.open("https://forms.gle/EYKfgMxfv6CXRjCw6"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">AHS</div>
						<div onClick={() => { window.open("https://forms.gle/QTc4XdV1DvX8mrYn6"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">CJMC</div>
						<div onClick={() => { window.open("https://forms.gle/g4NbLNytz1xkuE6WA"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">CDSIMER</div>
						<div onClick={() => { window.open("https://forms.gle/vAWJURoWwjmHpqbD9"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">LAW</div>
						<div onClick={() => { window.open("https://forms.gle/EeL5f23Wo3QctyfN6"); setRegDrop(false) }} className="flex justify-center items-center p-1 cursor-pointer hover:text-[#FF9595] transition-all">Design</div>
					</div>
				</div>

				{isDesktopOrLaptop && (
					<div ref={ref} className="h-screen w-screen z-0 overflow-y-scroll scrollbar pt-[10vh] text-[#F8F9FA] ">
						<Routes>
							<Route index element={<Navigate to="/home" replace />} />
							<Route path="/home" element={<Home />} />
							<Route path="/events" element={<Events />} />
							<Route path="/artists" element={<Artists />} />
							<Route path="/contact" element={<Contacts />} />
						</Routes>
					</div>
				)}
				{isTabletOrMobile && !isPortrait && (
					<div ref={ref} className="h-screen w-screen z-0 overflow-y-scroll overflow-x-hidden scrollbar-hidden pt-[10vh] text-[#F8F9FA] ">
						<Routes>
							<Route index element={<Navigate to="/home" replace />} />
							<Route path="/home" element={<HomeTablet />} />
							<Route path="/events" element={<EventsTablet />} />
							<Route path="/artists" element={<ArtistsTablet />} />
							<Route path="/contact" element={<ContactsTablet />} />
						</Routes>
					</div>
				)}
				{isTabletOrMobile && isPortrait && (
					<div ref={ref} className="h-screen w-screen z-0 overflow-y-scroll overflow-x-hidden scrollbar-hidden pt-[4vh] text-[#F8F9FA] ">
						<Routes>
							<Route index element={<Navigate to="/home" replace />} />
							<Route path="/home" element={<HomeMobile />} />
							<Route path="/events" element={<EventsMobile />} />
							<Route path="/artists" element={<ArtistsMobile />} />
							<Route path="/contact" element={<ContactsMobile />} />
						</Routes>
					</div>
				)}
			</HashRouter>
		</div>
	);
}

export default App;
