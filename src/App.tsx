import "./index.css";
import NavBar from "./components/NavBar";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import Artists from "./pages/artists/artists";
import Contacts from "./pages/contacts/contacts";
import { useMediaQuery } from "react-responsive";
// import HomeTablet from "./pages/home/home-tablet";
// import HomeMobile from "./pages/home/home-mobile";
import EventsMobile from "./pages/events/events-mobile";
import ArtistsMobile from "./pages/artists/artists-mobile";
import ContactsMobile from "./pages/contacts/contacts-mobile";
import EventsTablet from "./pages/events/events-tablet";
import ArtistsTablet from "./pages/artists/artists-tablet";
import ContactsTablet from "./pages/contacts/contacts-tablet";

function App() {
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

	return (
		<div className="App bg-[#212529] font-['Poppins'] ">
			<HashRouter>
				<div className="absolute z-50">
					<NavBar />
				</div>
				{isDesktopOrLaptop && (
					<div className="h-screen w-screen z-0 overflow-y-scroll scrollbar pt-[5vh] text-[#F8F9FA] ">
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
					<div className="h-screen w-screen z-0 overflow-y-scroll scrollbar-hidden pt-[10vh] text-[#F8F9FA] ">
						<Routes>
							<Route index element={<Navigate to="/home" replace />} />
							<Route path="/home" element={<Home />} />
							{/* <Route path="/home" element={<HomeTablet />} /> */}
							<Route path="/events" element={<EventsTablet />} />
							<Route path="/artists" element={<ArtistsTablet />} />
							<Route path="/contact" element={<ContactsTablet />} />
						</Routes>
					</div>
				)}
				{isTabletOrMobile && isPortrait && (
					<div className="h-screen w-screen z-0 overflow-y-scroll scrollbar-hidden pt-[4vh] text-[#F8F9FA] ">
						<Routes>
							<Route index element={<Navigate to="/home" replace />} />
							<Route path="/home" element={<Home />} />
							{/* <Route path="/home" element={<HomeMobile />} /> */}
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
