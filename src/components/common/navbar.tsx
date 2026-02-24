// components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Smooth scroll value for animations
  const smoothScroll = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform background based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(17, 24, 39, 0.8)"],
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(5px)"],
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"],
  );

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Title animation values based on scroll
  const titleGlow = useTransform(
    smoothScroll,
    [0, 500, 1000, 1500, 2000],
    [
      "0 0 20px rgba(0,255,255,0.5)",
      "0 0 40px rgba(255,0,255,0.5)",
      "0 0 30px rgba(0,255,255,0.7)",
      "0 0 50px rgba(255,255,0,0.5)",
      "0 0 35px rgba(0,255,255,0.6)",
    ],
  );

  const titleShake = useTransform(
    smoothScroll,
    [0, 300, 600, 900, 1200],
    [0, 1, -1, 2, -2],
  );

  const titleScale = useTransform(
    smoothScroll,
    [0, 200, 400, 600, 800, 1000],
    [1, 1.02, 0.98, 1.03, 0.97, 1],
  );

  const titleColor = useTransform(
    smoothScroll,
    [0, 400, 800, 1200, 1600, 2000],
    ["#ffffff", "#00ffff", "#ff00ff", "#ffff00", "#00ffff", "#ffffff"],
  );

  // Flicker effect
  const titleOpacity = useTransform(
    smoothScroll,
    [0, 150, 300, 450, 600, 750, 900],
    [1, 0.9, 1, 0.8, 1, 0.7, 1],
  );

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderBottom: useTransform(
          borderOpacity,
          (opacity) => `1px solid ${opacity}`,
        ),
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-2 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto relative flex items-center justify-center h-16">
        {/* Main Title - Exactly positioned as in HeroSection */}
        <motion.div
          style={{
            textShadow: titleGlow,
            x: titleShake,
            scale: titleScale,
            color: titleColor,
            opacity: titleOpacity,
          }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <motion.h1
            animate={{
              textShadow: [
                "0 0 20px rgba(0,255,255,0.5)",
                "0 0 40px rgba(255,0,255,0.5)",
                "0 0 30px rgba(0,255,255,0.7)",
                "0 0 50px rgba(255,255,0,0.5)",
                "0 0 20px rgba(0,255,255,0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-display font-black text-5xl md:text-5xl lg:text-5xl xl:text-5xl tracking-wider whitespace-nowrap"
          >
            W E L C O M E I T Z F I Z Z
          </motion.h1>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
