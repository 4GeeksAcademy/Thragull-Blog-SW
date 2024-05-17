import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { Cards } from "./component/Cards";
import { SingleCharacter } from "./component/SingleCharacter";
import { SingleStarship } from "./component/SingleStarship";
import { SinglePlanet } from "./component/SinglePlanet";
import { SingleVehicle } from "./component/SingleVehicle";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:id" element={<SingleCharacter />} />
						<Route path="/starship/:id" element={<SingleStarship />} />
						<Route path="/planet/:id" element={<SinglePlanet />} />
						<Route path="/vehicle/:id" element={<SingleVehicle />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/testing" element={<Cards />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
