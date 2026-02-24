// pages/History.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechBackground from "../components/ui/TechBackground";
import FloatingElements from "../components/ui/FloatingElements";
import { aiHistoryData } from "../data/history";

gsap.registerPlugin(ScrollTrigger);

const History = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);
  const sectionSubtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(sectionTitleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(sectionSubtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Animate each timeline card on scroll
      gsap.utils
        .toArray<HTMLElement>(".timeline-card")
        .forEach((card, index) => {
          // Split into left and right cards
          const isLeft = index % 2 === 0;

          gsap.fromTo(
            card,
            {
              x: isLeft ? -200 : 200,
              opacity: 0,
              scale: 0.8,
              rotationY: isLeft ? -30 : 30,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
                scrub: 1,
              },
            },
          );

          // Add glow effect on scroll
          gsap.fromTo(
            card,
            {
              boxShadow: "0 0 0px rgba(0, 255, 255, 0)",
            },
            {
              boxShadow: "0 0 50px rgba(0, 255, 255, 0.3)",
              scrollTrigger: {
                trigger: card,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
                scrub: 1,
              },
            },
          );

          // Animate year badge
          const yearBadge = card.querySelector(".year-badge");
          if (yearBadge) {
            gsap.fromTo(
              yearBadge,
              {
                scale: 0,
                rotate: -180,
              },
              {
                scale: 1,
                rotate: 0,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom-=50",
                  end: "top center",
                  toggleActions: "play reverse play reverse",
                },
              },
            );
          }

          // Animate category tag
          const categoryTag = card.querySelector(".category-tag");
          if (categoryTag) {
            gsap.fromTo(
              categoryTag,
              {
                x: isLeft ? -50 : 50,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.3,
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom-=50",
                  end: "top center",
                  toggleActions: "play reverse play reverse",
                },
              },
            );
          }

          // Animate description with stagger
          const descriptionLines = card.querySelectorAll(".description-line");
          gsap.fromTo(
            descriptionLines,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=50",
                end: "top center",
                toggleActions: "play reverse play reverse",
              },
            },
          );
        });

      // Parallax effect for floating elements
      gsap.utils.toArray<HTMLElement>(".parallax-bg").forEach((el) => {
        gsap.to(el, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Background Components */}
      <TechBackground />
      <FloatingElements />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              <span className="relative px-6 py-3 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 border border-white/10 rounded-full backdrop-blur-md">
                📜 CHRONICLES OF INTELLIGENCE
              </span>
            </div>
          </div>

          <h1
            ref={sectionTitleRef}
            className="font-display font-black text-5xl md:text-7xl text-center mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              The AI Journey
            </span>
          </h1>

          <p
            ref={sectionSubtitleRef}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300/90 font-light tracking-wide"
          >
            From theoretical concepts to reality - exploring the fascinating
            <span className="text-cyan-300 font-semibold mx-2">evolution</span>
            of Artificial Intelligence
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_30px_rgba(0,255,255,0.5)]" />

          {/* Timeline Cards */}
          <div className="space-y-24">
            {aiHistoryData.map((event, index) => (
              <div
                key={event.year}
                className={`timeline-card relative flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center gap-8`}
              >
                {/* Year Badge - Center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="year-badge relative w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-ping-slow opacity-30" />
                    <span className="text-white font-bold text-2xl relative z-10">
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "mr-auto pr-12" : "ml-auto pl-12"
                  }`}
                >
                  <div
                    className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 
                               border border-white/10 hover:border-cyan-500/50 
                               transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,255,0.3)]
                               overflow-hidden"
                  >
                    {/* Glow Effect on Hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Shine Effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                  translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
                    />

                    {/* Category Tag */}
                    <div className="category-tag inline-block mb-4">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-bold
                        ${
                          event.category === "milestone"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : event.category === "breakthrough"
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : event.category === "innovation"
                                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {event.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {event.title}
                    </h2>

                    {/* Description with animated lines */}
                    <div className="space-y-3 mb-6">
                      {event.description.split(". ").map((sentence, i) => (
                        <p
                          key={i}
                          className="description-line text-gray-300/80 leading-relaxed"
                        >
                          {sentence}
                          {i < event.description.split(". ").length - 1
                            ? "."
                            : ""}
                        </p>
                      ))}
                    </div>

                    {/* Significance Box */}
                    <div
                      className="relative bg-white/5 rounded-xl p-6 border border-white/10
                                  hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="absolute -top-3 left-4 px-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-full">
                        <span className="text-xs font-bold text-cyan-300">
                          SIGNIFICANCE
                        </span>
                      </div>
                      <p className="text-sm text-purple-200/90 italic">
                        "{event.significance}"
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision Section */}
        <div className="mt-32 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30" />
            <h2 className="relative text-4xl md:text-5xl font-bold mb-6 px-8 py-4">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                The Future Awaits
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[2025, 2030, 2040].map((year, index) => (
              <div
                key={year}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 
                         border border-white/10 hover:border-cyan-500/50 
                         transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,255,0.3)]
                         overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <div className="text-5xl mb-4 text-cyan-300">🔮</div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {year}
                  </div>
                  <p className="text-purple-200/80">
                    {index === 0
                      ? "AI surpasses human intelligence in specialized tasks"
                      : index === 1
                        ? "First AGI with human-level reasoning emerges"
                        : "AI collaborates with humans to solve global challenges"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative w-16 h-16">
            <svg className="transform -rotate-90 w-16 h-16">
              <circle
                className="text-white/10"
                strokeWidth="2"
                stroke="currentColor"
                fill="transparent"
                r="28"
                cx="32"
                cy="32"
              />
              <circle
                className="text-cyan-500"
                strokeWidth="2"
                stroke="currentColor"
                fill="transparent"
                r="28"
                cx="32"
                cy="32"
                strokeDasharray={175.93}
                strokeDashoffset={175.93 * (1 - 0.5)}
                style={{
                  strokeDashoffset: 175.93 * (1 - 0.5),
                }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs text-cyan-300">
              Scroll
            </span>
          </div>
        </div>
      </div>

      {/* Add custom animations to global CSS */}
      <style>{`
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default History;
