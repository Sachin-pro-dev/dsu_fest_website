import './index.css'
import NavBar from './components/NavBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App bg-[#212529] font-['Poppins']">
			<BrowserRouter>
				<div className="absolute z-50">
					<NavBar />
				</div>
				<div className="h-screen w-full z-0 overflow-y-scroll scrollbar">
					<div className="h-[300vh]"></div>
					<Routes>
						<Route index element={<Navigate to="/home" replace />} />
						{/* <Route path="/requests" element={<Requests />} /> */}
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
