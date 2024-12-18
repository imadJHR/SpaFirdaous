import { motion } from 'framer-motion';
import AnimatedBackgroundFlowers from '../components/AnimatedBackgroundFlowers';

const ServiceHeader = () => {
  return (
    <div className="relative h-[40vh] bg-[url('/images/services-hero.jpg')] bg-cover bg-center mb-12 overflow-hidden">
      <AnimatedBackgroundFlowers />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Discover our range of luxurious treatments designed to rejuvenate your body and mind
          </p>
        </motion.div>
      </div>
      <FloatingFlower className="top-10 left-10" delay={0} />
      <FloatingFlower className="bottom-10 right-10" delay={0.5} />
    </div>
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

export default ServiceHeader;

