import React from 'react';
import { motion } from 'framer-motion';

const flowerVariants = {
  initial: { opacity: 0, y: '100vh' },
  animate: { opacity: 1, y: '-100vh' },
};

const FlyingFlowers = () => {
  const flowers = ['🌸', '🌺', '🌼', '🌻', '💮'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={flowerVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        >
          {flowers[Math.floor(Math.random() * flowers.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export default FlyingFlowers;

