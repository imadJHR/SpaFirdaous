import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const testimonials = [
  {
    name: "Fatima Zahra El Amrani",
    comment: "L'expérience la plus relaxante que j'ai jamais vécue. Les thérapeutes sont de vrais professionnels !",
    rating: 5,
  },
  {
    name: "Salma Bouazza",
    comment: "Service et ambiance exceptionnels. Je me sens complètement rajeuni après chaque visite.",
    rating: 5,
  },
  {
    name: "Amina El Haddad",
    comment: "Un coin de paradis en ville. Le massage aux pierres chaudes était incroyable !",
    rating: 5,
  },
  {
    name: "Khadija Benmansour",
    comment: "Des installations au top et un personnel exceptionnel. Fortement recommandé!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto px-4 mb-8"
      >
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Quelques mots de nos clients
        </h2>
      </motion.div>

      <Marquee
        gradient={true}
        speed={40}
        pauseOnHover={true}
        className="py-4"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mx-4 bg-accent/20 p-6 hid rounded-lg  shadow-lg max-w-sm"
          >
            <div className="mb-4">
              {"⭐".repeat(testimonial.rating)}
            </div>
            <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
            <p className="font-semibold text-primary">- {testimonial.name}</p>
          </div>
        ))}
      </Marquee>

      {/* Decorative elements */}
      <FloatingFlower className="top-20 left-20" delay={0.2} />
      <FloatingFlower className="bottom-20 right-20" delay={0.7} />
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
      ease: "easeInOut"
    }}
  >
    🌺
  </motion.div>
);

export default Testimonials;