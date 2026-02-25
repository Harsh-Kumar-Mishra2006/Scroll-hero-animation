// components/BgElements.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface BgElementsProps {
  scrollProgress: number;
}

const BgElements: React.FC<BgElementsProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Image paths from public folder
  const images = [
    "/ai_chatbot.png",
    "/ai_img-1.png",
    "/ai_img-2.png",
    "/ai_img-3.png",
    "/ai_img-4.png",
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {/* Floating AI Images */}
      {images.map((src, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = index * 0.5;
        const randomDuration = 15 + Math.random() * 10;
        const randomScale = 0.5 + Math.random() * 0.5;
        const randomRotate = Math.random() * 360;

        return (
          <motion.div
            key={`image-${index}`}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              zIndex: Math.floor(Math.random() * 10),
              filter: `blur(${Math.random() * 2}px)`,
              opacity: 0.15 + Math.random() * 0.1,
            }}
            animate={{
              x: [
                0,
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 200,
                0,
              ],
              y: [
                0,
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 200,
                0,
              ],
              rotate: [randomRotate, randomRotate + 180, randomRotate + 360],
              scale: [randomScale, randomScale * 1.2, randomScale],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={src}
              alt={`AI floating ${index}`}
              className="w-32 h-32 object-contain"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.style.display = "none";
              }}
            />
          </motion.div>
        );
      })}

      {/* Floating Tech Icons */}
      {[...Array(20)].map((_, i) => {
        const icons = [
          "⚡",
          "🤖",
          "🧠",
          "💻",
          "🔮",
          "📊",
          "🌐",
          "🔬",
          "💡",
          "⚛️",
        ];
        const icon = icons[i % icons.length];
        const size = 20 + Math.random() * 40;

        return (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${size}px`,
              opacity: 0.1 + Math.random() * 0.1,
              filter: `blur(${Math.random() * 2}px)`,
              color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            }}
            animate={{
              y: [0, -50, 0, 50, 0],
              x: [0, 30, -30, 30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        );
      })}

      {/* Floating Binary Numbers */}
      {[...Array(30)].map((_, i) => {
        const binary = [
          "1010",
          "1100",
          "0011",
          "0101",
          "1110",
          "1001",
          "0110",
          "1101",
        ];
        const num = binary[i % binary.length];

        return (
          <motion.div
            key={`binary-${i}`}
            className="absolute font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: `rgba(0, 255, 255, ${0.1 + Math.random() * 0.1})`,
              fontSize: `${12 + Math.random() * 20}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              textShadow: "0 0 10px rgba(0,255,255,0.3)",
            }}
            animate={{
              y: [0, -100, 0, 100, 0],
              x: [0, 50, -50, 50, 0],
              opacity: [0.1, 0.3, 0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {num}
          </motion.div>
        );
      })}

      {/* Floating Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(15)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = x1 + (Math.random() - 0.5) * 40;
          const y2 = y1 + (Math.random() - 0.5) * 40;

          return (
            <motion.line
              key={`circuit-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={`url(#gradient-circuit-${i % 3})`}
              strokeWidth="1.5"
              strokeOpacity="0.1"
              strokeDasharray="5,5"
              animate={{
                strokeOpacity: [0.05, 0.15, 0.05],
                strokeDashoffset: [0, 50, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
        <defs>
          <linearGradient
            id="gradient-circuit-0"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="gradient-circuit-1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffff00" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="gradient-circuit-2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffff00" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Glowing Orbs */}
      {[...Array(10)].map((_, i) => {
        const size = 150 + Math.random() * 200;
        const colors = ["#00ffff", "#ff00ff", "#ffff00", "#00ff00", "#ff6b6b"];

        return (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size,
              height: size,
              background: `radial-gradient(circle at 30% 30%, ${colors[i % colors.length]}, transparent)`,
              filter: "blur(60px)",
              opacity: 0.1,
              mixBlendMode: "screen",
            }}
            animate={{
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Scroll-based parallax elements */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: useTransform(smoothScroll, [0, 1], [0, 200]),
          opacity: useTransform(smoothScroll, [0, 0.5, 1], [1, 0.8, 0.6]),
        }}
      >
        {/* Additional floating elements based on scroll */}
      </motion.div>
    </div>
  );
};

export default BgElements;
