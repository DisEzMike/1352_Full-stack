import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import View from './pages/View/View';
import { Home } from './pages/Home/Home';


function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/view/:id" Component={View} />
				<Route path='/dashboard' Component={Admin} />
			</Routes>
		</>
	);
}

export default App;
