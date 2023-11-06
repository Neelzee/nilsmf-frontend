import { ReactElement } from "react";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";

export function NavBar(): ReactElement {
  return (
    <nav>
      <Link to={"/"}>/</Link>
      <Link to={"/projects"}>/projects</Link>
      <Link to={"/about"}>/about</Link>
      <Link to={"/contact"}>/contact</Link>
    </nav>
  );
}
