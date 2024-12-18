import { motion } from "framer-motion";
import ServiceHeader from "../components/ServiceHeader";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServiceHeader />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center bg-accent/20 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">
            Votre voyage vers le bien-être
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tous nos services incluent une brève consultation pour comprendre
            vos besoins et vos préférences. Nos thérapeutes expérimentés
            personnaliseront chaque traitement pour vous assurer un maximum de
            bienfaits et de détente.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
