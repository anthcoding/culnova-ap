import './App.css';
import { useState } from 'react';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Navbar from './components/Header/Navbar.jsx';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrameDoors from './pages/doors-types/frame-doors/FrameDoors';
import SlabDoors from './pages/doors-types/slab-doors/SlabDoors';
import HandleDoors from './pages/doors-types/handle-doors/HandleDoors';
import GlassDoors from './pages/doors-types/glass-doors/GlassDoors';
import Sidebar from './components/Header/Sidebar';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useToggle } from './hooks/useToggle';

function App() {
	const { toggle, isOpen } = useToggle();

	return (
		<div className="App">
			<Router>
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<Navbar toggle={toggle} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/frame-doors" element={<FrameDoors />} />
					<Route path="/flat-doors" element={<SlabDoors />} />
					<Route path="/handle-doors" element={<HandleDoors />} />
					<Route path="/frame-doors" element={<FrameDoors />} />
					<Route path="/glass-doors" element={<GlassDoors />} />
					<Route path="*" element={<Home />} />
				</Routes>
				<div id="back-to-top">
					<a href="#top">
						<AiOutlineArrowUp className="arrow-icon" />
					</a>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
