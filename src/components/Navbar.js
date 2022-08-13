import { NavLink, Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="navbar">
    <Link id="logo" to="/home">
      Mobily
    </Link>
    <ul className="nav-links">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="faq">FAQ</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink id="search" to="/search">
        <FontAwesomeIcon icon={faSearch} />
      </NavLink>
      <NavLink id="about" to="/about">
        <FontAwesomeIcon icon={faCartShopping} />
      </NavLink>
    </ul>
  </nav>
);

export default Navbar;
