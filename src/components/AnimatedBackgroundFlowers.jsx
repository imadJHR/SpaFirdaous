const AnimatedBackgroundFlowers = () => {
    const flowers = Array(20).fill('🌸');
  
    return (
      <div className="absolute inset-0 pointer-events-none">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="absolute text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            {flower}
          </div>
        ))}
      </div>
    );
  };
  
  export default AnimatedBackgroundFlowers;
  
  