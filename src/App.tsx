/* eslint-disable no-restricted-globals */
import "./index.css";
import NavBar from "./components/NavBar";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Events from "./pages/events/events";
// import Artists from "./pages/artists/artists";
import Contacts from "./pages/contacts/contacts";
import { useMediaQuery } from "react-responsive";
import EventsMobile from "./pages/events/events-mobile";
// import ArtistsMobile from "./pages/artists/artists-mobile";
import ContactsMobile from "./pages/contacts/contacts-mobile";
import EventsTablet from "./pages/events/events-tablet";
// import ArtistsTablet from "./pages/artists/artists-tablet";
import ContactsTablet from "./pages/contacts/contacts-tablet";
import { useRef } from "react";
import HomeTablet from "./pages/home/home-tablet";
import HomeMobile from "./pages/home/home-mobile";
import Footer from "./components/footer";

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

	return (
		<div className="App bg-[#212529] font-['Poppins'] ">
			<HashRouter>
				<div className="absolute z-10">
					<NavBar scroll={scroll} />
				</div>

				{isDesktopOrLaptop && (
					<div ref={ref} className="h-screen w-screen z-0 overflow-y-scroll scrollbar pt-[10vh] text-[#F8F9FA] ">
						<Routes>
							<Route index element={<Navigate to="/home" replace />} />
							<Route path="/home" element={<Home />} />
							<Route path="/events" element={<Events />} />
							{/* <Route path="/artists" element={<Artists />} /> */}
							<Route path="/contact" element={<Contacts />} />
						</Routes>
						<Footer scroll={scroll} />
						<Link to="https://linktr.ee/lifeatdsu">
							<div className="fixed shadow-md bottom-0 right-0 z-10 mb-2 mr-2 p-2 flex justify-center items-center cursor-pointer rounded-full bg-[#ef6461] text-[#FFFFFF] transition-all hover:bg-[#FFFFFF] hover:text-[#ef6461] duration-300">
								<div className="flex justify-center items-center">
									<div className="p-1 rounded justify-self-center">Register Now</div>
								</div>
							</div>
						</Link>
					</div>
				)}
				{isTabletOrMobile && !isPortrait && (
					<div ref={ref} className="h-screen w-screen z-0 overflow-y-scroll overflow-x-hidden scrollbar-hidden pt-[10vh] text-[#F8F9FA] ">
						<Routes>
							<Route index element={<Navigate to="/home" replace />} />
							<Route path="/home" element={<HomeTablet />} />
							<Route path="/events" element={<EventsTablet />} />
							{/* <Route path="/artists" element={<ArtistsTablet />} /> */}
							<Route path="/contact" element={<ContactsTablet />} />
						</Routes>
						<Footer scroll={scroll} />
						<Link to="https://linktr.ee/lifeatdsu">
							<div className="fixed shadow-md bottom-0 right-0 z-10 mb-2 mr-2 p-2 flex justify-center items-center cursor-pointer rounded-full bg-[#ef6461] text-[#ffffff]" onClick={() => { }}>
								<div className="flex  justify-center items-center">
									<div className="text-xs p-0.5 rounded justify-self-center cursor-pointer">Register Now</div>
								</div>
							</div>
						</Link>
					</div>
				)}
				{isTabletOrMobile && isPortrait && (
					<div ref={ref} className="h-screen w-screen z-0 overflow-y-scroll overflow-x-hidden scrollbar-hidden pt-[4vh] text-[#F8F9FA] ">
						<Routes>
							<Route index element={<Navigate to="/home" replace />} />
							<Route path="/home" element={<HomeMobile />} />
							<Route path="/events" element={<EventsMobile />} />
							{/* <Route path="/artists" element={<ArtistsMobile />} /> */}
							<Route path="/contact" element={<ContactsMobile />} />
						</Routes>
						<Footer scroll={scroll} />
						<Link to="https://linktr.ee/lifeatdsu">
							<div className="fixed shadow-md bottom-0 right-0 z-10 mb-2 mr-2 p-2 flex justify-center items-center cursor-pointer rounded-full bg-[#ef6461] text-[#ffffff]" onClick={() => { }}>
								<div className="flex  justify-center items-center">
									<div className="text-xs p-0.5 rounded justify-self-center cursor-pointer">Register Now</div>
								</div>
							</div>
						</Link>
					</div>
				)}
			</HashRouter>
		</div>
	);
}

export default App;
