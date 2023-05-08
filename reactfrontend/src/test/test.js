import Navbar from "../App";
import ".temp.css";
import comp from "./comp";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <comp />
  </React.StrictMode>
);