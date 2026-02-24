// components/ScrollingAIElement.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ScrollingAIElement = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Position transformations - follows scroll like Twitter bird
  const y = useTransform(smoothProgress, [0, 1], ["0vh", "100vh"]);
  const x = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "5%", "0%"]);
  const scale = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [1, 1.2, 0.8, 0.5],
  );
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], [0, 10, -10]);

  // Opacity and blur effects
  const opacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 0.8, 0.3],
  );
  const blur = useTransform(smoothProgress, [0, 0.7, 1], [0, 2, 4]);

  // Glow effect based on scroll
  const glowColor = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(0,255,255,0.5)",
      "rgba(255,0,255,0.5)",
      "rgba(0,255,255,0.5)",
      "rgba(255,255,0,0.5)",
      "rgba(255,0,255,0.5)",
    ],
  );

  return (
    <div
      ref={elementRef}
      className="relative w-full"
      style={{ height: "300vh" }}
    >
      {/* Fixed position container that moves with scroll */}
      <motion.div
        style={{
          y,
          x,
          scale,
          rotate,
          opacity,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 pointer-events-none"
      >
        {/* Main AI Icon Container */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 30px rgba(0,255,255,0.5)",
              "0 0 60px rgba(255,0,255,0.5)",
              "0 0 30px rgba(0,255,255,0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-24 h-24 md:w-32 md:h-32"
        >
          {/* Outer glowing rings */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-2 border-cyan-500/50"
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [360, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-2 rounded-full border-2 border-purple-500/50"
          />

          {/* Core Icon */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 360],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateY: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl"
          >
            <span className="text-white font-bold text-3xl md:text-4xl">
              AI
            </span>
          </motion.div>

          {/* Orbiting particles */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, Math.cos(angle) * 60, 0],
                  y: [0, Math.sin(angle) * 60, 0],
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>

        {/* Floating binary numbers */}
        {["01", "10", "11", "00"].map((binary, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-cyan-400 whitespace-nowrap"
            style={{
              left: i % 2 === 0 ? -40 : 80,
              top: i * 20,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            {binary}
          </motion.div>
        ))}
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        style={{
          scaleX: smoothProgress,
        }}
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-50 origin-left"
      />
    </div>
  );
};

export default ScrollingAIElement;
