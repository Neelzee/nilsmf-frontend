import "./App.css";

import { Home } from "./pages/www/home/Home";
import { Articles } from "./pages/www/articles/Article";
import { About } from "./pages/www/about/About";
import { MissingPage } from "./pages/www/404/MissingPage";
import { MetaHome } from "./pages/meta/home/MetaHome";
import { MetaMissingPage } from "./pages/meta/404/MetaMissingPage"
import { MetaArticles } from "./pages/meta/articles/MetaArticles";
import { MetaLogin } from "./pages/meta/login/MetaLogin";

import {
    Route,
    Routes} from "react-router-dom";

function App() {
return (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/articles" element={<Articles />} />
		<Route path="/about" element={<About />} />
		<Route path="/meta" element={<MetaHome />} />
		<Route path="/meta/login" element={<MetaLogin />} />
		<Route path="/meta/articles" element={<MetaArticles />} />
		<Route path="/meta/*" element={<MetaMissingPage />} />
		<Route path="/*" element={<MissingPage />} />
	</Routes>
);
}

export default App;
