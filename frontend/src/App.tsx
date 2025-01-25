import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';


function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path='/admin' Component={Admin} />
			</Routes>
		</>
	);
}

export default App;
