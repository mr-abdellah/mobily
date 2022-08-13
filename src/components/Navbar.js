import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="navbar">
    <NavLink id="logo" to="/">
      Mobily
    </NavLink>
    <ul className="nav-links">
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="faq">FAQ</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/search">
        <FontAwesomeIcon icon={faSearch} />
      </NavLink>
      <NavLink to="/menu">
        <FontAwesomeIcon icon={faBars} />
      </NavLink>
    </ul>
  </nav>
);

export default Navbar;
