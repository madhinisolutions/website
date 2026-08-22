import { motion } from "motion/react";
import { Compass, Layout, Code, TrendingUp } from "lucide-react";

export default function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understand the problem",
      description:
        "We begin by identifying real opportunities and understanding user needs to ensure every digital product solves a clear, practical problem.",
      icon: Compass,
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Turn ideas into clear experiences",
      description:
        "We craft clean, intuitive user interfaces and structured frameworks that make complex concepts feel approachable, logical, and delightful.",
      icon: Layout,
      color: "from-blue-500/20 to-indigo-500/10",
      accent: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Develop reliable technology",
      description:
        "We construct scalable, modern software architecture built for durability, security, and high performance across platforms.",
      icon: Code,
      color: "from-indigo-500/20 to-purple-500/10",
      accent: "text-indigo-400",
      border: "border-indigo-500/30",
    },
    {
      number: "04",
      title: "Improve",
      subtitle: "Continuously learn, refine and evolve",
      description:
        "Technology is never static. We systematically refine, optimize, and expand our offerings based on real feedback and technological shifts.",
      icon: TrendingUp,
      color: "from-emerald-500/20 to-cyan-500/10",
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0a0e17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>Engineering Discipline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Development Approach
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A methodical four-stage process that guides how MadhiniSolutions conceives, builds, and evolves technology products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background ambient gradient glow on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-slate-800/90 border ${step.border} flex items-center justify-center ${step.accent}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-slate-700 group-hover:text-slate-500 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className={`text-xs font-medium ${step.accent} mb-3`}>
                    {step.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>STAGE {step.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
