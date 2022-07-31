import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    if (window.innerWidth < 850) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 850) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // Generate a random genre for moblie version navbar option.
  const genreOptions = ["/action", "/comedy", "/drama"];
  const getRandomGenre = () => {
    return genreOptions[Math.floor(Math.random() * genreOptions.length)];
  };

  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          Watch-Me
        </Link>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <FaBars />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to={click ? getRandomGenre() : "#"}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {click ? "Random Genre" : "Genre"}
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/favorites"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
