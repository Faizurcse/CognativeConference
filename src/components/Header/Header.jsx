import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 652) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`h-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src={isScrolled ? "/logo.png" : "/COGNITIVE.png"}
          alt="logo"
          width={150}
        />
        {/* <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}> */}
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About us
            </Link>
            <div
              className={`upcoming ${
                location.pathname === "/artificial-intelligence" ? "active" : ""
              } ${location.pathname === "/ai-in-Industry" ? "active" : ""} ${
                location.pathname === "/cyber-security" ? "active" : ""
              } ${location.pathname === "/generative-ai" ? "active" : ""}`}
            >
              Upcoming Conferences
              <button className="dropdown-toggle">
                <FaChevronDown />
              </button>
              <div className="dropdown-menu">
                <Link
                  to="/artificial-intelligence"
                  className={`dropdown-item ${
                    location.pathname === "/artificial-intelligence"
                      ? "active"
                      : ""
                  } `}
                >
                  Artificial Intelligence
                </Link>
                <Link
                  to="/cyber-security"
                  className={`dropdown-item ${
                    location.pathname === "/cyber-security" ? "active" : ""
                  }`}
                >
                  AI in Cyber Security
                </Link>
                <Link
                  to="/generative-ai"
                  className={`dropdown-item ${
                    location.pathname === "/generative-ai" ? "active" : ""
                  }`}
                >
                  Generative AI
                </Link>
                <Link
                  to="/ai-in-Industry"
                  className={`dropdown-item ${
                    location.pathname === "/ai-in-Industry" ? "active" : ""
                  }`}
                >
                  AI-in-Industry
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact us
            </Link>
            <div className="flexCenter favIcon">
              <FaFacebook size={30} />
              <FaInstagram size={30} />
              <FaTwitter size={30} />
            </div>
          </div>
        {/* </OutsideClickHandler> */}

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
