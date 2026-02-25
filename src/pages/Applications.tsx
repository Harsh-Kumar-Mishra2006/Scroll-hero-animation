// pages/Applications.tsx
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechBackground from "../components/ui/TechBackground";
import BgElements from "../components/BgElements";
import { aiApplications, aiBenefits } from "../data/ai-applications";

gsap.registerPlugin(ScrollTrigger);

const Applications = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sector cards
      gsap.utils.toArray<HTMLElement>(".sector-card").forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            rotateY: 30,
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });

      // Animate benefit cards
      gsap.utils.toArray<HTMLElement>(".benefit-card").forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=50",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

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
              🚀 AI IN ACTION
            </span>
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl text-center mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              AI Applications
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300/90 font-light">
            Discover how{" "}
            <span className="text-cyan-300 font-semibold">
              Artificial Intelligence
            </span>{" "}
            is transforming industries and improving lives worldwide
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="space-y-20 mb-20">
          {aiApplications.map((sector) => (
            <motion.div
              key={sector.sector}
              className="sector-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Sector Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`text-5xl bg-gradient-to-br ${sector.color} p-4 rounded-2xl bg-opacity-20`}
                >
                  {sector.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {sector.sector}
                  </h2>
                  <p className="text-gray-400 max-w-2xl">
                    {sector.description}
                  </p>
                </div>
              </div>

              {/* Use Cases Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {sector.useCases.map((useCase, caseIndex) => (
                  <motion.div
                    key={caseIndex}
                    className="group relative overflow-hidden rounded-xl p-6
                             bg-white/5 backdrop-blur-md border border-white/10
                             hover:border-cyan-500/50 transition-all duration-300
                             hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: caseIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    <h3 className="text-lg font-bold text-white mb-3">
                      {useCase.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-4">
                      {useCase.description}
                    </p>

                    <div className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full inline-block">
                      {useCase.impact}
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full" />
                  </motion.div>
                ))}
              </div>

              {/* Impact & Future */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm font-semibold text-cyan-300 mb-2">
                    CURRENT IMPACT
                  </div>
                  <p className="text-white/90">{sector.impact}</p>
                </motion.div>

                <motion.div
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm font-semibold text-purple-300 mb-2">
                    FUTURE POTENTIAL
                  </div>
                  <p className="text-white/90">{sector.futurePotential}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
              How AI Benefits Humanity
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                className="benefit-card group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.category}
                </h3>

                <div className="space-y-4">
                  {benefit.benefits.map((item, i) => (
                    <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
                      <div className="font-semibold text-cyan-300 text-sm mb-1">
                        {item.title}
                      </div>
                      <p className="text-sm text-gray-400 mb-1">
                        {item.description}
                      </p>
                      <div className="text-xs text-purple-300/70 italic">
                        "{item.example}"
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative icon */}
                <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {index === 0 && "🏥"}
                  {index === 1 && "📚"}
                  {index === 2 && "🌍"}
                  {index === 3 && "💡"}
                  {index === 4 && "🌐"}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          className="relative rounded-3xl overflow-hidden p-12 text-center
                     bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10
                     border border-white/10 backdrop-blur-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Explore AI?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of AI firsthand with our interactive demo
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold
                     shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]
                     transition-all duration-300"
          >
            Try AI Demo
          </motion.button>

          {/* Floating particles around button */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${50 + Math.cos((i * 45 * Math.PI) / 180) * 100}%`,
                top: `${50 + Math.sin((i * 45 * Math.PI) / 180) * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.25,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>

        {/* Scroll Progress */}
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
              className="text-purple-500"
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
          <span className="absolute inset-0 flex items-center justify-center text-xs text-purple-300">
            {Math.round(smoothScroll.get() * 100)}%
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Applications;
