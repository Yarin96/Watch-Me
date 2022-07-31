import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [genreLinks, setGenreLinks] = useState([]);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    setGenreLinks([
      { name: "Action", path: "/action" },
      { name: "Comedy", path: "/comedy" },
      { name: "Drama", path: "/drama" }
    ]);
  }, []);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {genreLinks.map((title, i) => (
          <li key={i}>
            <Link
              to={title.path}
              className="dropdown-link"
              onClick={() => setClick(false)}
            >
              {title.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;
