import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenuButton from './MobileMenuButton';
import Logo from "../assets/logo_paradise-removebg-preview.png"

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  { path: '/reservation', label: 'Reservation' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full top-0 md:h-20 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 shadow-lg' : 'bg-primary'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl md:mt-5 font-semibold flex items-center space-x-2 font-prata">
            <img src={Logo} className="w-20 h-20 object-cover" alt="" />
          </Link>

          {/* Mobile Menu Button */}
          <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white font-prata px-3 py-2 rounded-md transition-all duration-300 ease-in-out
                  ${location.pathname === link.path ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden font-prata ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md transition-all duration-300 ease-in-out
                  ${location.pathname === link.path ? 'bg-secondary text-white' : 'text-white hover:bg-secondary/50'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

