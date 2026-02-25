import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechBackground from "./TechBackground";
import FloatingElements from "./FloatingElements";
import CenteredAIIcon from "./CenteredAIIcon";
import AIIcon from "./AIIcon";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split headline animation
      if (headlineRef.current) {
        const text = headlineRef.current.textContent;
        headlineRef.current.innerHTML = text!
          .split("")
          .map((char) =>
            char === " "
              ? '<span class="w-4 inline-block"></span>'
              : `<span class="inline-block letter text-gradient-tech">${char}</span>`,
          )
          .join("");

        gsap.from(".letter", {
          y: 100,
          opacity: 0,
          rotationX: -90,
          duration: 1.2,
          stagger: 0.03,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      // Subheadline animation
      gsap.from(subheadlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "back.out(1.2)",
      });

      // CTA buttons animation
      gsap.from(ctaRef.current?.children || [], {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.5,
        ease: "elastic.out(1, 0.5)",
      });

      // Stats animation
      gsap.from(statsRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 1.8,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <TechBackground />
      <FloatingElements />

      {/* Main Content - Now with centered icon */}
      <div className="relative z-20 container mx-auto min-h-screen flex flex-col items-center justify-center px-4">
        {/* Top Badge */}
        <div
          className="mb-8 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 
                      shadow-[0_0_20px_rgba(0,255,255,0.3)] animate-pulse-slow"
        >
          <span className="text-sm font-medium text-cyan-300 tracking-wider">
            ⚡ AI-POWERED CHATBOT ⚡
          </span>
        </div>

        {/* Headline above icon */}
        <h1
          ref={headlineRef}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-center mb-12 leading-tight"
        >
          W E L C O M E I T Z F I Z Z
        </h1>

        {/* Centered AI Icon - This is the main focal point */}
        <div ref={iconContainerRef} className="my-12 flex justify-center">
          <CenteredAIIcon />
        </div>

        {/* Subheadline below icon */}
        <p
          ref={subheadlineRef}
          className="max-w-3xl text-center text-lg md:text-xl text-gray-300 mb-12 
                     bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-purple-200
                     font-light tracking-wide"
        >
          Meet our <span className="font-bold text-cyan-300">AI Assistant</span>{" "}
          - Powered by advanced{" "}
          <span className="font-bold text-purple-300">Generative AI</span>.
          Experience the future of conversation.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 
                           rounded-xl font-semibold text-white overflow-hidden
                           shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]
                           transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Chat with AI
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </span>
          </button>

          <button
            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 
                           rounded-xl font-semibold text-cyan-300
                           hover:bg-white/10 hover:border-cyan-400/30 
                           transition-all duration-300 transform hover:scale-105
                           shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
          >
            Watch Demo
          </button>
        </div>

        {/* Statistics */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl w-full"
        >
          <StatCard
            value="99%"
            label="Satisfaction Rate"
            sublabel="User Feedback"
            icon="⭐"
            color="cyan"
          />
          <StatCard
            value="24/7"
            label="Availability"
            sublabel="Always Online"
            icon="🔄"
            color="purple"
          />
          <StatCard
            value="50ms"
            label="Response Time"
            sublabel="Average"
            icon="⚡"
            color="blue"
          />
          <StatCard
            value="100+"
            label="Languages"
            sublabel="Supported"
            icon="🌐"
            color="pink"
          />
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                      flex flex-col items-center gap-2 text-cyan-300/70"
        >
          <span className="text-xs uppercase tracking-widest">
            Scroll to Interact
          </span>
          <div
            className="w-6 h-10 border-2 border-cyan-300/30 rounded-full 
                        flex justify-center items-start p-2"
          >
            <div className="w-1 h-2 bg-cyan-300 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Stat Card Component (keep as before)
const StatCard = ({
  value,
  label,
  sublabel,
  icon,
  color,
}: {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
  color: "cyan" | "purple" | "blue" | "pink";
}) => {
  const colorClasses = {
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-300",
    purple:
      "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-300",
    blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300",
    pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-300",
  };

  return (
    <div
      className={`
      group relative overflow-hidden rounded-2xl p-6
      bg-gradient-to-br ${colorClasses[color]}
      backdrop-blur-lg border
      hover:shadow-2xl transition-all duration-500
      hover:-translate-y-2 cursor-pointer
    `}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                    translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
      />
      <div
        className="text-3xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 
                    transition-transform duration-300"
      >
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-1 text-white">
        {value}
      </div>
      <div className="font-semibold text-white/90 text-sm md:text-base mb-1">
        {label}
      </div>
      <div className="text-xs text-white/60">{sublabel}</div>
      <AIIcon />
    </div>
  );
};

export default HeroSection;
