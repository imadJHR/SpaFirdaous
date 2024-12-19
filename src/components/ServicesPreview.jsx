import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Microneedling",
    description: "Vivez une relaxation profonde avec nos Microneedling",
    image:
      "https://myla-bella.com/wp-content/uploads/2024/09/microneedling.jpg",
    price: "400",
    duration: "1 séance",
  },
  {
    title: "Soins du visage Royal",
    description: "Revitalisez votre peau avec des ingrédients naturels",
    image:
      "https://www.mademoisellerelax.fr/wp-content/uploads/2018/06/mademoiselle-relax-soins-visage-2.jpg",
    price: "400",
    duration: "60 min",
  },
  {
    title: "Blanchiment dentaire",
    description:
      "Ravivez l'éclat naturel de votre sourire avec un soin professionnel et sécurisé.",
    image:
      "https://www.drmorganecohensamama.com/wp-content/uploads/2019/12/blanchiment-dr-morgane-cohen-chirurgien-dentiste.jpg",
    price: "600",
    duration: "3 séances",
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
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="flex justify-center items-center mb-6">
                <img
                  src={service.image}
                  className="object-cover rounded-lg h-[300px] w-[400px] transition-all duration-300 hover:scale-110 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Duration: {service.duration}
                </span>
                <span className="text-lg font-semibold text-primary">
                  {service.price} DHS
                </span>
              </div>
              <div className="mt-auto">
                <Link to="/reservation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
                  >
                    Réservez
                  </motion.button>
                </Link>
              </div>
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
