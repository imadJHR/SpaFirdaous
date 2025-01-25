import { motion } from 'framer-motion';
import Logo from "../assets/logo.jpeg"

const LoadingAnimation = () => {
  return (
    <motion.img
      src={Logo} 
      alt="Loading"
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 180, 360, 360, 0],
        borderRadius: ["25%", "25%", "50%", "50%", "25%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="w-16 h-16"
    />
  );
};

export default LoadingAnimation;
