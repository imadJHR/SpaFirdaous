import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#8B5E3C] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Firdaous Paradise Spa</h3>
            <p className="text-[#F5DEB3]">Relaxation et bien-être à portée de main.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p>Rue oussama ibno zaid n110 maarif</p>
            <p>Casablanca, Morocco</p>
            <p>Tél: +212 661-253143</p>
            <p>Email: firdaousreservation@gmail.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/beautyfirdaous/" target="_blank" className="text-white hover:text-[#D2B48C] transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/firdaous.paradise.spa/" target="_blank" className="text-white hover:text-[#D2B48C] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/0661253143" target="_blank"className="text-white hover:text-[#D2B48C] transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#D2B48C] mt-8 pt-8 text-center">
          <p className="text-sm text-[#F5DEB3]">
            © {new Date().getFullYear()} Firdaous Paradise Spa. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
