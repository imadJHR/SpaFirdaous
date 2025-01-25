import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Hero from "../assets/Hero_spa.jpeg";
import AboutSection from "../components/AboutSection";
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] bg-cover bg-center  "
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Bienvenue à Firdaous Paradise Spa{" "}
            </h1>
            <p className="text-xl">Vivez la détente ultime</p>
            <button className="justify-center items-center mt-6 bg-secondary text-primary font-semibold py-3 px-6 rounded-lg shadow-md hover:text-primary hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link to='/reservation' className="flex  space-x-5">
                <span>Réserve Maintenant</span>
                <div>
                <MoveRight className="animate-moveRight" />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </motion.div>

      <Marquee className="bg-secondary py-4 text-primary font-semibold">
        🌿 Offre spéciale : 20 % de réduction sur tous les forfaits de massage
        ce mois-ci ✨ Cartes cadeaux disponibles 🌺 Réservez votre séance de
        relaxation dès aujourd'hui 💆‍♀️ Massothérapeutes professionnels
      </Marquee>

      {/* About Section */}
      <AboutSection />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Home;
