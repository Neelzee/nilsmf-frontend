import "./App.css";

import { Home } from "./pages/www/home/Home";
import { Articles } from "./pages/www/articles/Article";
import { About } from "./pages/www/about/About";
import { MissingPage } from "./pages/www/404/MissingPage";
import { MetaHome } from "./pages/meta/home/MetaHome";


import {
    Route,
    Routes} from "react-router-dom";
import { MetaMissingPage } from "./components/meta/404/MetaMissingPage";

function App() {
return (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/articles" element={<Articles />} />
		<Route path="/about" element={<About />} />
		<Route path="/meta" element={<MetaHome />} />
		<Route path="/meta/*" element={<MetaMissingPage />} />
		<Route path="/*" element={<MissingPage />} />
	</Routes>
);
}

export default App;
