// pages/Statistics.tsx
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechBackground from "../components/ui/TechBackground";
import BgElements from "../components/BgElements";
import {
  aiStatistics,
  heroStatistics,
  scrollBasedStatistics,
  getStatColorClasses,
} from "../data/statistics";
import { aiQuotes, aiPredictions } from "../data/ai-applications";

gsap.registerPlugin(ScrollTrigger);

const Statistics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll-based statistics change
  const [currentStats, setCurrentStats] = React.useState(heroStatistics);

  useEffect(() => {
    const unsubscribe = smoothScroll.onChange((value) => {
      if (value < 0.33) {
        setCurrentStats(scrollBasedStatistics[0]);
      } else if (value < 0.66) {
        setCurrentStats(scrollBasedStatistics[1]);
      } else {
        setCurrentStats(scrollBasedStatistics[2]);
      }
    });

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Animate stats cards on scroll
      gsap.utils.toArray<HTMLElement>(".stat-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });

      // Animate quote cards
      gsap.fromTo(
        quoteRef.current?.children || [],
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top bottom-=50",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });

    return () => {
      unsubscribe();
      ctx.revert();
    };
  }, [smoothScroll]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"
    >
      <TechBackground />
      <BgElements scrollProgress={smoothScroll.get()} />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="px-6 py-3 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 border border-white/10 rounded-full backdrop-blur-md">
              📊 AI BY THE NUMBERS
            </span>
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl text-center mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              AI Statistics
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300/90 font-light">
            Key metrics that define the{" "}
            <span className="text-cyan-300 font-semibold">AI revolution</span> -
            from adoption rates to economic impact
          </p>
        </motion.div>

        {/* Dynamic Statistics Grid */}
        <div
          ref={statsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {currentStats.map((stat, index) => {
            const colors = getStatColorClasses(stat.color);

            return (
              <motion.div
                key={`${stat.id}-${index}`}
                className="stat-card group relative overflow-hidden rounded-2xl p-8
                         bg-white/5 backdrop-blur-xl border border-white/10
                         hover:border-cyan-500/50 transition-all duration-500
                         hover:shadow-[0_0_50px_rgba(0,255,255,0.3)]"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                {/* Value */}
                <div
                  className={`text-5xl md:text-6xl font-bold mb-3 ${colors.text}`}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                {stat.description && (
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                    ${
                      stat.category === "adoption"
                        ? "bg-indigo-500/20 text-indigo-300"
                        : stat.category === "impact"
                          ? "bg-purple-500/20 text-purple-300"
                          : stat.category === "future"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {stat.category}
                  </span>
                </div>

                {/* Decorative Icon */}
                <div className="absolute -bottom-6 -right-6 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {stat.category === "adoption" && "📈"}
                  {stat.category === "impact" && "💫"}
                  {stat.category === "future" && "🔮"}
                  {stat.category === "investment" && "💰"}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All Statistics Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Complete Overview
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiStatistics.map((stat, index) => {
              const colors = getStatColorClasses(stat.color);

              return (
                <motion.div
                  key={stat.id}
                  className="group relative overflow-hidden rounded-xl p-6
                           bg-white/5 backdrop-blur-sm border border-white/10
                           hover:border-cyan-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-3xl font-bold ${colors.text}`}>
                      {stat.value}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white mb-1">
                        {stat.label}
                      </div>
                      {stat.description && (
                        <div className="text-xs text-gray-400">
                          {stat.description}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quotes Section */}
        <div ref={quoteRef} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Voices on AI
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiQuotes.map((quote, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
                         hover:border-purple-500/30 transition-all duration-300
                         hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -top-3 -left-3 text-4xl text-purple-500/30">
                  "
                </div>
                <p className="text-lg text-gray-300 mb-4 italic relative z-10">
                  {quote.quote}
                </p>
                <div className="text-sm text-purple-300 font-semibold">
                  — {quote.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Predictions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
              What's Next?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiPredictions.map((prediction, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
                         overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {prediction.year}
                  </div>
                  <div className="text-white/80">{prediction.prediction}</div>
                </div>

                {/* Orbiting circle */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 border-2 border-green-500/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed bottom-8 right-8 z-50 w-16 h-16"
          style={{
            scale: useTransform(smoothScroll, [0, 1], [1, 1.2]),
          }}
        >
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
            <motion.circle
              className="text-cyan-500"
              strokeWidth="2"
              stroke="currentColor"
              fill="transparent"
              r="28"
              cx="32"
              cy="32"
              style={{
                strokeDasharray: "175.93",
                strokeDashoffset: useTransform(
                  smoothScroll,
                  [0, 1],
                  [175.93, 0],
                ),
              }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs text-cyan-300">
            {Math.round(smoothScroll.get() * 100)}%
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
