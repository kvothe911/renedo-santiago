import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => setIsAnimating(true);
  const endAnimation = () => setIsAnimating(false);

  return (
    <AnimationContext.Provider value={{ isAnimating, triggerAnimation, endAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};