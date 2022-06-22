import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
