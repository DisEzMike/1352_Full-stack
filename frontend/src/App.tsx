import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import View from './pages/View/View';


function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/view" Component={View} />
				<Route path='/admin' Component={Admin} />
			</Routes>
		</>
	);
}

export default App;
