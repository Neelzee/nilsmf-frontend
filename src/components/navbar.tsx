import "../styles/navbar.scss";
import { A } from "@solidjs/router";

export function NavBar() {
	return (
		<nav>
			<A href={"/"}>./~</A>
			<A href={"/projects"}>./~/projects</A>
			<A href={"/about"}>./~/about</A>
			<A href={"/contact"}>./~/contact</A>
		</nav>
	);
}
