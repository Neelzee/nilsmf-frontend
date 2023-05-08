import "./mainpage.css";



export function Navbar() {
  return (
    <div className="navbar">
      <div className="homeBtn">
        <a href="">Home</a>
      </div>
      <div className="socials">
        <div>
          <a href="https://github.com/Neelzee/">github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/nils-michael-fitjar-4346a3234/">linkedin</a>
        </div>
      </div>
    </div>
  );
}

export function Test() {
  return (
    <div>
      <h1>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </h1>
    </div>
  );
}


export function AppTest() {
  return (
    <div className="app">
      <nav>
        <a href="#">Home</a>
        <div className="social-links">
          <a href="https://github.com/Neelzee/">Github</a>
          <a href="https://www.linkedin.com/in/nils-michael-fitjar-4346a3234/">Linkedin</a>
        </div>
      </nav>
      <div className="hello-world">
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}