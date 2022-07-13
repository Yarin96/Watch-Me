import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {

    const [genreLinks, setGenreLinks] = useState([]);

    useEffect(() => {
      const links = [
        { name: "Action", path: '/action' },
        { name: "Comedy", path: '/comedy' },
        { name: "Drama", path: '/drama' },
      ];
        setGenreLinks(links);
    }, []);

    return(
    <>
        <nav className="nav">
            <Link to='/' className="site-title">Watch-Me</Link>
            <SearchBar />
            <ul>
                <Link to='/'>Home</Link>
                <div className='dropdown'>
                    <Link to='#'>Genre</Link>
                    <div className='dropdown-menu'>
                            {genreLinks?.map((title, i) => (
                                <li key={i}>
                                    <Link to={title.path}>{title.name}</Link>
                                </li>
                            ))}
                    </div>
                </div>
                <Link to='/favorites'>Favorites</Link>
            </ul>
        </nav>
    </>
    );
}

export default Navbar;