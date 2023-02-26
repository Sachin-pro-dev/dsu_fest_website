import './index.css'
import NavBar from './components/NavBar';
import { HashRouter , Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/events';
import Artists from './pages/artists';
import Contacts from './pages/contacts';

function App() {
	return (
		<div className="App bg-[#212529] font-['Poppins'] ">
			<HashRouter >
				<div className="absolute z-50">
					<NavBar />
				</div>
				<div className="h-screen w-screen z-0 overflow-y-scroll scrollbar pt-[5vh] text-[#F8F9FA] ">
					<Routes>
						<Route index element={<Navigate to="/dsu_fest_website/home" replace />} />
						<Route path="/dsu_fest_website/home" element={<Home />} />
						<Route path="/dsu_fest_website/events" element={<Events />} />
						<Route path="/dsu_fest_website/artists" element={<Artists />} />
						<Route path="/dsu_fest_website/contact" element={<Contacts />} />
					</Routes>
				</div>
			</HashRouter >
		</div>
	);
}

export default App;
