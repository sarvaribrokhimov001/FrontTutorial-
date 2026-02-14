import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/html">HTML</Link></li>
        <li><Link to="/css">CSS</Link></li>
        <li><Link to="/links">Links</Link></li>
        <li><Link to="/shorts">Shorts</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;