import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface CenteredAIIconProps {
  className?: string;
}

const CenteredAIIcon: React.FC<CenteredAIIconProps> = ({ className = "" }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const sparkleRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Initial entrance animation
    gsap.from(iconRef.current, {
      scale: 0,
      opacity: 0,
      rotation: -180,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      delay: 0.5,
    });

    // Continuous floating animation
    gsap.to(iconRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Pulsing glow animation
    gsap.to(glowRef.current, {
      scale: 1.2,
      opacity: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Sparkle animations
    sparkleRefs.current.forEach((sparkle, index) => {
      if (sparkle) {
        gsap.to(sparkle, {
          scale: 1.5,
          opacity: 0,
          duration: 1 + Math.random(),
          repeat: -1,
          delay: index * 0.3,
          ease: "power2.out",
        });
      }
    });

    // Rotating light rays
    gsap.to(".light-ray", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Color pulse for the rings
    gsap.to(".ring-1", {
      borderColor: "rgba(0, 255, 255, 0.8)",
      boxShadow: "0 0 50px rgba(0, 255, 255, 0.5)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".ring-2", {
      borderColor: "rgba(255, 0, 255, 0.8)",
      boxShadow: "0 0 60px rgba(255, 0, 255, 0.5)",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    gsap.to(".ring-3", {
      borderColor: "rgba(0, 255, 255, 0.8)",
      boxShadow: "0 0 70px rgba(0, 255, 255, 0.5)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  }, []);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: "300px", height: "300px" }}
    >
      {/* Light rays background - fixed centering */}
      <div className="light-ray absolute inset-0 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute w-2 h-40 bg-gradient-to-t from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              left: "50%",
              top: "50%",
              transformOrigin: "center",
              filter: "blur(4px)",
            }}
          />
        ))}
      </div>

      {/* Outer glowing rings - fixed positioning */}
      <div
        className="ring-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] 
                    rounded-full border-4 border-cyan-500/30 
                    shadow-[0_0_60px_rgba(0,255,255,0.3)]"
      />
      <div
        className="ring-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] 
                    rounded-full border-4 border-purple-500/30 
                    shadow-[0_0_70px_rgba(255,0,255,0.3)]"
      />
      <div
        className="ring-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] 
                    rounded-full border-4 border-cyan-500/30 
                    shadow-[0_0_80px_rgba(0,255,255,0.3)]"
      />

      {/* Main glow behind icon - centered */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] 
                   rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                   opacity-30 blur-3xl"
      />

      {/* Sparkles around the icon - fixed positioning */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 140; // Distance from center

        return (
          <div
            key={`sparkle-${i}`}
            ref={(el) => {
              if (el) sparkleRefs.current[i] = el;
            }}
            className="absolute w-2 h-2"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="w-full h-full bg-white rounded-full 
                          shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            />
          </div>
        );
      })}

      {/* Main icon container - perfectly centered */}
      <div
        ref={iconRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   flex items-center justify-center cursor-pointer group"
        style={{ width: "200px", height: "200px" }}
      >
        {/* Icon image - centered */}
        <img
          src="/ai_chatbot.png"
          alt="AI Chatbot"
          className="w-40 h-40 object-contain relative z-10
                     filter drop-shadow-[0_0_30px_rgba(0,255,255,0.7)]
                     group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/200/6366f1/ffffff?text=AI";
          }}
        />

        {/* Orbiting particles - fixed positioning */}
        {[...Array(6)].map((_, i) => {
          const delay = i * 0.5;
          return (
            <div
              key={`orbit-${i}`}
              className="absolute w-3 h-3 bg-cyan-400 rounded-full 
                         shadow-[0_0_20px_rgba(0,255,255,0.8)]"
              style={{
                animation: `orbit 8s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Floating binary numbers around the icon - fixed positioning */}
      {["1010", "1100", "0011", "0101", "1110", "1001"].map((binary, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const radius = 200;

        return (
          <div
            key={`binary-${i}`}
            className="absolute font-mono text-sm text-cyan-400/50 
                       whitespace-nowrap animate-float-slow"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              transform: "translate(-50%, -50%)",
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {binary}
          </div>
        );
      })}
    </div>
  );
};

export default CenteredAIIcon;
