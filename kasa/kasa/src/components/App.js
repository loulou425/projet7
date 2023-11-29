import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Apropos from '../pages/Apropos';
import NotFoundPage from '../pages/NotFoundPage';
import FicheLogements from '../pages/FicheLogements';

function App() {
	return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Accueil />} />
					<Route path="/about" element={<Apropos/>} />
					<Route path="/fichelogement/:id" element={<FicheLogements />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
    </BrowserRouter>
	);
};

export default App;