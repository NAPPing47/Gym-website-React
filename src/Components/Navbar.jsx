import React, { useState } from "react";
import MyLogo from "../images/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={MyLogo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li><Link to='#'>Home</Link></li>
        <li><Link to='#'>About</Link></li>
        <li><Link to='#'>Contact</Link></li>
        <li><Link to='#'>Pricing</Link></li>
        <li><Link to='#'>Fitness</Link></li>
        <li><Link to='#'>Store</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
