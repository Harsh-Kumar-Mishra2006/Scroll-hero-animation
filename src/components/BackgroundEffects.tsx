// components/BackgroundEffects.tsx
import React from "react";
import { motion, MotionValue } from "framer-motion";

interface BackgroundEffectsProps {
  scrollProgress: MotionValue<number>;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  scrollProgress,
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Floating orbs */}
      {[...Array(15)].map((_, i) => {
        const size = 100 + Math.random() * 200;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;

        return (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${initialX}%`,
              top: `${initialY}%`,
              width: size,
              height: size,
              background: `radial-gradient(circle at 30% 30%, ${
                ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7"][i % 5]
              }, transparent)`,
              filter: "blur(50px)",
              opacity: 0.15,
              x: scrollProgress.get() * 100,
              y: scrollProgress.get() * 50,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Floating particles */}
      {[...Array(50)].map((_, i) => {
        const size = 2 + Math.random() * 4;
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size,
              height: size,
              boxShadow: "0 0 20px rgba(255,255,255,0.8)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Neural network lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;

          return (
            <motion.line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={`url(#gradient-${i % 3})`}
              strokeWidth="1"
              strokeOpacity="0.1"
              animate={{
                strokeOpacity: [0.05, 0.15, 0.05],
                strokeWidth: [1, 2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Gradients for lines */}
        <defs>
          <linearGradient id="gradient-0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#4ecdc4" />
          </linearGradient>
          <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a8e6cf" />
            <stop offset="100%" stopColor="#d4a5a5" />
          </linearGradient>
          <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9a9e" />
            <stop offset="100%" stopColor="#fad0c4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing dots */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: "#fff",
            boxShadow: "0 0 20px rgba(0,255,255,0.8)",
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Moving light rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          backgroundSize: "200% 100%",
          x: scrollProgress,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;
