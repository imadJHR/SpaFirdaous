import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Smile from "../assets/smile2-transformed.jpeg";

const services = [
  {
    title: "Thérapie par massage",
    description: "Vivez une relaxation profonde avec nos massages signatures",
    image:
      "https://media.istockphoto.com/id/469916170/fr/photo/jeune-femme-de-d%C3%A9tente-au-cours-de-massage-dans-le-spa.jpg?s=612x612&w=0&k=20&c=JBu29cEFB5QkP4dd63Lucd6ysw_8MZaUCgUSq7PKo4Q=",
  },
  {
    title: "Soins du visage",
    description: "Revitalisez votre peau avec des ingrédients naturels",
    image:
      "https://img.freepik.com/photos-gratuite/jeune-femme-au-masque-pour-visage-relaxant-dans-salon-spa_176420-7582.jpg?uid=R115960642&ga=GA1.1.519463234.1718278238&semt=ais_hybrid",
  },
  {
    title: "Blanchiment dentaire",
    description:
      "Ravivez l'éclat naturel de votre sourire avec un soin professionnel et sécurisé.",
    image: Smile,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary text-center mb-12"
        >
          Nos services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center items-center mb-6 ">
                <img
                  src={service.image}
                  className="object-cover rounded-lg  h-[300px] w-[400px] transition-all duration-300 hover:scale-110  mx-auto"
                />
              </div>{" "}
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
          >
            Voir tous les services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
