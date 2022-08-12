import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <NavLink id="logo" to="/">Mobily</NavLink>
    <ul className="nav-links">
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="faq">FAQ</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/search">sear</NavLink>
      <NavLink to="/menu">menu</NavLink>
    </ul>
  </nav>
);

export default Navbar;
