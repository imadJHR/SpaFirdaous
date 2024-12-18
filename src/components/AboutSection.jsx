import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">
            À propos de <span className="text-secondary">Firdaous  Paradise Spa</span>{" "}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Bienvenue au <span className="font-bold">Firdaous Paradise Spa</span> , où la tranquillité rencontre le luxe.
            Avec plus d'une décennie d'expérience, nous maîtrisons l'art de la
            relaxation et du rajeunissement. Notre engagement envers
            l'excellence et les soins personnalisés nous distinguent dans le
            monde du bien-être.
          </p>
          <p className="text-lg text-gray-600">
          En utilisant uniquement des produits biologiques de <span className="text-primary font-bold">première qualité</span> et en s'inspirant d'anciennes traditions de guérison, nos thérapeutes experts créent un sanctuaire de paix pour votre corps et votre esprit.
          </p>
        </div>
      </motion.div>

      {/* Decorative flowers */}
      <FloatingFlower className="top-10 left-10" delay={0} />
      <FloatingFlower className="bottom-10 right-10" delay={0.5} />
    </section>
  );
};

const FloatingFlower = ({ className, delay }) => (
  <motion.div
    className={`absolute w-8 h-8 text-2xl ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 45, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    🌸
  </motion.div>
);

export default AboutSection;
