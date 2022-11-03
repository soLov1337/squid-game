import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/home/Home';
import Admin from './components/screens/admin/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ModalProvider } from './components/ModalProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ModalProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</Router>
		</ModalProvider>
  </React.StrictMode>
);

