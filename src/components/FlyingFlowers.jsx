import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FlyingFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const createFlower = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -50,
      rotation: Math.random() * 360,
    });

    const initialFlowers = Array.from({ length: 5 }, createFlower);
    setFlowers(initialFlowers);

    const interval = setInterval(() => {
      setFlowers((prev) => {
        const newFlowers = prev
          .map((flower) => ({
            ...flower,
            y: flower.y + 2,
            rotation: flower.rotation + 1,
          }))
          .filter((flower) => flower.y < window.innerHeight);

        if (newFlowers.length < 5) {
          newFlowers.push(createFlower());
        }

        return newFlowers;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute w-4 h-4"
          style={{
            left: flower.x,
            top: flower.y,
            rotate: flower.rotation,
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default FlyingFlowers;
