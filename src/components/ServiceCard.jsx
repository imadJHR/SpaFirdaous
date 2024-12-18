import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          {service.title}
        </h2>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Duration: {service.duration}
          </span>
          <span className="text-lg font-semibold text-primary">
            {service.price} DHS
          </span>
        </div>
        {/* Placement du bouton en bas */}
        <div className="mt-auto">
          <Link to="/reservation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors"
            >
              Réservez
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
