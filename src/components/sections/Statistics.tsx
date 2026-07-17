"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, label: "Active Clients", value: 150, suffix: "+" },
  { id: 2, label: "Completed Projects", value: 300, suffix: "+" },
  { id: 3, label: "Success Rate", value: 98, suffix: "%" },
  { id: 4, label: "Total Client Transactions", value: 5, suffix: "M+", prefix: "Rp " },
  { id: 5, label: "Business Partners", value: 50, suffix: "+" },
];

export function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-background border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator="."
                    prefix={stat.prefix || ""}
                    suffix={stat.suffix || ""}
                  />
                ) : (
                  "0"
                )}
              </div>
              <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
