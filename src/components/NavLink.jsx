import { Link } from 'react-router-dom';

const NavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-2 px-4 hover:text-accent transition-colors md:inline-block md:py-0"
    >
      {children}
    </Link>
  );
};

export default NavLink;