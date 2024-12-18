const MobileMenuButton = ({ isOpen, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="md:hidden p-2 focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="w-6 h-4 relative flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>
    );
  };
  
  export default MobileMenuButton;