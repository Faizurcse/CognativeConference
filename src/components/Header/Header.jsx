import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Header.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src="COGNITIVE.png"
          alt="logo"
          width={150}
          style={{ borderRadius: "10px" }}
        />
        <OutsideClickHandler
        onOutsideClick={()=>setMenuOpened(false)}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <span>
              Upcoming  Conferences
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                <FaChevronDown />
              </button>
              {isOpen && (
                <div className="dropdown-menu">
                  <Link to="/artificial-intelligence" className="dropdown-item">
                    Artificial Intelligence
                  </Link>
                   <Link to="/cyber-security" className="dropdown-item">
                    AI in Cyber Security
                  </Link>
                 <Link to="/generative-ai" className="dropdown-item">
                    Generative AI
                  </Link> 
                   <Link to="/ai-in-Industry" className="dropdown-item">
                   AI-in-Industry
                    </Link>  
                </div>
              )}
            </span>
            <Link to="/contact">Contact us</Link>
            <div className="flexCenter favIcon">
              <FaFacebook size={30} />

              <FaInstagram size={30} />

              <FaTwitter size={30} />
            </div>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
