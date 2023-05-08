import "./mainpage.css";
import profil from "./meg.jpeg";


export function Navbar() {
  return (
    <nav>
      <a href="#">Home</a>
      <div className="social-links">
        <a href="https://github.com/Neelzee/">Github</a>
        <a href="https://www.linkedin.com/in/nils-michael-fitjar-4346a3234/">Linkedin</a>
      </div>
    </nav>
  );
}



export function Content() {
  return (
    <div className="info">
      <div className="infoPic">
        <img src = {profil} alt ="Bilde av meg" className="profile" />
      </div>
      <div className="textContent">
        <h2 className="textContentHeader">Hallo!</h2>
        <p>Hey babey!!!</p>
      </div>
    </div>
  );
}