import React, { useEffect, useRef } from "react";
import { type Statistic, getStatColorClasses } from "../data/statistics";
import gsap from "gsap";

interface AIStatisticsProps {
  statistics: Statistic[];
  title?: string;
  animate?: boolean;
  columns?: 2 | 3 | 4;
}

const AIStatistics: React.FC<AIStatisticsProps> = ({
  statistics,
  title,
  animate = true,
  columns = 4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animate && containerRef.current) {
      gsap.from(containerRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        delay: 0.5,
      });
    }
  }, [animate, statistics]);

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
      )}
      <div
        ref={containerRef}
        className={`grid ${gridCols[columns]} gap-4 md:gap-6`}
      >
        {statistics.map((stat) => {
          const colors = getStatColorClasses(stat.color);

          return (
            <div
              key={stat.id}
              className={`
                group relative overflow-hidden rounded-2xl p-6
                ${colors.bg} border ${colors.border}
                hover:shadow-2xl transition-all duration-500
                hover:-translate-y-2 cursor-pointer
              `}
            >
              {/* Decorative gradient overlay */}
              <div
                className={`
                absolute inset-0 opacity-0 group-hover:opacity-10
                bg-gradient-to-br ${colors.gradient} transition-opacity duration-500
              `}
              />

              {/* Animated background pattern */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`
                  text-4xl md:text-5xl font-bold mb-2
                  bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent
                `}
                >
                  {stat.value}
                </div>

                <div className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                  {stat.label}
                </div>

                {stat.description && (
                  <p className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </p>
                )}

                {/* Category indicator */}
                <div
                  className={`
                  absolute top-2 right-2 w-2 h-2 rounded-full
                  ${colors.bg} border-2 border-white shadow-sm
                `}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AIStatistics;
