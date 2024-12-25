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
          <h1 className="text-4xl font-bold text-primary mb-8">
            Découvrez <span className="text-secondary">Firdaous  Paradise Spa</span> : L'Art du Bien-Être et de la Sérénité
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Bienvenue chez <span className="font-bold"> Firdaous Paradise Spa </spa>, votre havre de paix où luxe et tranquillité se rencontrent. Forts de plus de 10 ans d'expertise, nous sommes les spécialistes de la relaxation profonde et du rajeunissement naturel. Notre engagement envers des soins personnalisés et l'excellence nous placent parmi les leaders du bien-être.
          </p>
          <p className="text-lg text-gray-600">
         Nous utilisons exclusivement des produits biologiques haut de gamme et des techniques issues des traditions ancestrales de guérison. Nos thérapeutes qualifiés transforment chaque soin en une expérience apaisante et revitalisante pour le corps et l'esprit. Choisissez Firdaous Paradise Spa pour un moment de détente inoubliable.
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
