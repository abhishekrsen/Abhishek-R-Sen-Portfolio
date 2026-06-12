import React, { useState, useEffect } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Determine the greeting based on the current hour
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Completely unmount after 2.8 seconds (allowing 0.8s for CSS fade transition)
    const unmountTimer = setTimeout(() => {
      setIsUnmounted(true);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (isUnmounted) return null;

  return (
    <div className={`welcome-screen ${isFadingOut ? 'hidden' : ''}`}>
      <div className="welcome-text">
        Hi, <span>{greeting}</span>!
      </div>
    </div>
  );
};

export default WelcomeScreen;
