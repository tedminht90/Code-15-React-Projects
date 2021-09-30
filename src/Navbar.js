import React from "react";
import logo from "./logo.svg";
import { links } from "./data";

const Navbar = () => {
  const clickHandle = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    //console.log(target);
    const location = document.querySelector(target).offsetTop;
    // console.log(location);
    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };

  return (
    <nav className="navbar sticky">
      <div className="nav-center">
        <img src={logo} alt="smooth scroll" />
        <div>
          {links.map((item) => {
            return (
              <a href={item.url} key={item.id} onClick={clickHandle}>
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
