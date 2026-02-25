import { useEffect, useRef } from "react";
import gsap from "gsap";

const AIIcon = () => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iconRef.current) return;

    // Floating animation
    gsap.to(iconRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Rotation animation
    gsap.to(iconRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Pulse animation for inner elements
    gsap.to(".ai-core", {
      scale: 1.1,
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={iconRef}
      className="absolute bottom-20 right-20 w-32 h-32 z-30 pointer-events-none"
    >
      {/* Outer ring */}
      <div
        className="absolute inset-0 border-4 border-cyan-500/30 rounded-full 
                    animate-ping-slow"
      />

      {/* Middle ring */}
      <div
        className="absolute inset-2 border-2 border-purple-500/40 rounded-full 
                    animate-spin-slow"
      />

      {/* Inner core */}
      <div
        className="ai-core absolute inset-4 bg-gradient-to-br from-cyan-400 to-purple-600 
                    rounded-full flex items-center justify-center
                    shadow-[0_0_30px_rgba(0,255,255,0.5)]"
      >
        <span className="text-2xl font-bold text-white">AI</span>
      </div>

      {/* Orbiting particles */}
      {[0, 120, 240].map((angle, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${angle}deg) translateX(60px)`,
            boxShadow: "0 0 15px rgba(0,255,255,0.8)",
          }}
        />
      ))}
    </div>
  );
};

export default AIIcon;
