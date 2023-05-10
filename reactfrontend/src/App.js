import "./App.css";

import { NavBar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Project } from "./components/project/Project";

import {
    Route,
    Routes} from "react-router-dom";

function App() {
return (
	<>
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/projects" element={<Project/>} />
		</Routes>
	</>
);
}

export default App;
