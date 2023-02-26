import './index.css'
import NavBar from './components/NavBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/events';
import Artists from './pages/artists';
import Contacts from './pages/contacts';

function App() {
	return (
		<div className="App bg-[#212529] font-['Poppins'] ">
			<BrowserRouter>
				<div className="absolute z-50">
					<NavBar />
				</div>
				<div className="h-screen w-screen z-0 overflow-y-scroll scrollbar pt-[5vh] text-[#F8F9FA] ">
					<Routes>
						<Route index element={<Navigate to="/home" replace />} />
						<Route path='/dsu_fest_website' element={<Navigate to="/home" replace />} />
						<Route path="/home" element={<Home />} />
						<Route path="/events" element={<Events />} />
						<Route path="/artists" element={<Artists />} />
						<Route path="/contact" element={<Contacts />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
