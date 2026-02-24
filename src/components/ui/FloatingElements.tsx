import React, { useEffect, useRef } from "react";

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.children;
    if (!elements) return;

    const animateElement = (element: Element, delay: number) => {
      const el = element as HTMLElement;
      const startX = Math.random() * 100 - 50;
      const startY = Math.random() * 100 - 50;

      el.style.transform = `translate(${startX}px, ${startY}px) rotate(${Math.random() * 360}deg)`;

      let startTime: number;

      const move = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / 10000; // 10 second cycle

        const x = startX + Math.sin(progress * 2 * Math.PI) * 30;
        const y = startY + Math.cos(progress * 2 * Math.PI) * 30;
        const rotate = progress * 360;

        el.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;

        requestAnimationFrame(move);
      };

      setTimeout(() => {
        requestAnimationFrame(move);
      }, delay * 1000);
    };

    Array.from(elements).forEach((el, index) => {
      animateElement(el, index * 0.5);
    });
  }, []);

  const techIcons = [
    { icon: "⚛️", size: "text-4xl", top: "10%", left: "5%" },
    { icon: "🤖", size: "text-5xl", top: "20%", right: "8%" },
    { icon: "🧠", size: "text-4xl", bottom: "15%", left: "10%" },
    { icon: "💻", size: "text-5xl", bottom: "25%", right: "12%" },
    { icon: "🔮", size: "text-3xl", top: "40%", left: "15%" },
    { icon: "⚡", size: "text-4xl", top: "60%", right: "15%" },
    { icon: "🌐", size: "text-5xl", bottom: "35%", left: "20%" },
    { icon: "📊", size: "text-3xl", top: "75%", right: "20%" },
    { icon: "🔬", size: "text-4xl", bottom: "45%", left: "25%" },
    { icon: "💡", size: "text-5xl", top: "30%", right: "25%" },
  ];

  const binaryNumbers = [
    "1010",
    "1100",
    "0011",
    "0101",
    "1110",
    "1001",
    "0110",
    "1101",
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* Tech Icons */}
      {techIcons.map((item, index) => (
        <div
          key={`icon-${index}`}
          className={`absolute ${item.size} opacity-20 text-white/30 
                     filter blur-[1px] hover:blur-none hover:opacity-40 
                     transition-all duration-1000`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Floating Binary Numbers */}
      {binaryNumbers.map((binary, index) => (
        <div
          key={`binary-${index}`}
          className="absolute font-mono text-xs text-cyan-500/20 
                   whitespace-nowrap animate-float-slow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          {binary}
        </div>
      ))}

      {/* Glowing Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 
                    rounded-full filter blur-3xl animate-pulse-slow"
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 
                    rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"
      />
      <div
        className="absolute top-2/3 left-1/2 w-80 h-80 bg-blue-500/10 
                    rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"
      />
    </div>
  );
};

export default FloatingElements;
