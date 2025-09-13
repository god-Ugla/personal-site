import { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  logoRef: string;
  brand: string;
  buttonNames: { [key: string]:  string };
}

const Navbar: React.FC<NavbarProps> = ({ logoRef, brand, buttonNames }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home"> {logoRef ? (<img src={logoRef} className="navbar-logo" />) : null} {brand} </a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        {Object.keys(buttonNames).map((name, index) => (
          <li key={index}>
            <a href={buttonNames[name]} onClick={() => setIsOpen(false)}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
