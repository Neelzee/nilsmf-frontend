import "./App.css";

import { Home } from "./pages/home/Home";
import { Articles } from "./pages/articles/Article";
import { About } from "./pages/about/About";
import { MissingPage } from "./pages/404/MissingPage";

import {
    Route,
    Routes} from "react-router-dom";

function App() {
return (
	<>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/articles" element={<Articles />} />
			<Route path="/about" element={<About />} />
			<Route path="/*" element={<MissingPage />} />
		</Routes>
	</>
);
}

export default App;
