import { motion } from 'framer-motion';
import LoadingAnimation from './LoadingAnimation';
import LoadingText from './LoadingText';

const LoadingScreen = () => {
  return (
    <motion.div
      initiala={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50"
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Background decorative elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-accent/10 rounded-full blur-3xl"
          style={{ width: '300px', height: '300px' }}
        />
        
        {/* Main loading content */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <LoadingAnimation />
          <LoadingText />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;