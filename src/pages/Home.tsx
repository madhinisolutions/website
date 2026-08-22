import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Database,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Cpu,
  Globe2,
  Code2,
  ShieldCheck,
} from "lucide-react";
import ApproachSection from "../components/ApproachSection";
import DatabaseConceptVisual from "../components/DatabaseConceptVisual";
import B10RMSButton from "../components/B10RMSButton";
import B10RLearningButton from "../components/B10RLearningButton";

export default function Home() {
  useEffect(() => {
    document.title = "MadhiniSolutions | Digital Products & Technology";
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-radial-glow">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Building Digital Experiences{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              That Matter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            MadhiniSolutions is a technology-focused company creating practical digital products and experiences designed to make technology more useful, accessible and meaningful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4"
          >
            <B10RLearningButton variant="hero" />

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300"
            >
              <span>Discover MadhiniSolutions</span>
            </Link>
          </motion.div>

          {/* Status Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Structured Digital Products</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Practical Tech Initiatives</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION — TECHNOLOGY BUILT WITH PURPOSE */}
      <section className="py-20 bg-[#090d16] border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Technology Built With Purpose
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              At MadhiniSolutions, we focus on engineering clean, purposeful digital products. We believe that technology is at its best when it solves real human needs through clarity, structural precision, and practical utility.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                Purposeful Creation
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Building solutions designed to serve genuine needs with clean architecture and thoughtful interaction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                Technical Rigor
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Prioritizing reliability, performance, and structured clarity across all our software platforms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                Continuous Evolution
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Continuously refining our products to adapt to changing technical standards and learner expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE ARE BUILDING */}
      <section className="py-20 md:py-28 bg-[#0b0f19] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Digital Products & Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                What We're Building
              </h2>
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-md">
              Discover the current digital product initiatives powered by MadhiniSolutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Initiative 1: B10R Learning */}
            <div className="p-8 md:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Digital Learning Platform
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-1">
                    B10R Learning
                  </h3>
                </div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  A technology-focused learning experience designed to make technical education more structured, approachable and practical for learners building foundational knowledge.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  ACTIVE INITIATIVE
                </span>
                <B10RLearningButton variant="link" />
              </div>
            </div>

            {/* Initiative 2: B10R MS */}
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden group shadow-xl shadow-cyan-950/20">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                      MySQL Learning Product
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      CURRENT RELEASE
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-1">
                    B10R MS
                  </h3>
                </div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  B10R MS is the first learning experience currently being developed within B10R Learning, specifically centered on MySQL database fundamentals, SQL queries, and relational data structures.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-cyan-300 font-mono font-medium">
                  B10R MS OVERVIEW
                </span>
                <Link
                  to="/b10r-ms"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
                >
                  <span>Explore B10R MS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCT SHOWCASE: B10R MS */}
      <section className="py-20 md:py-28 bg-[#080b13] relative overflow-hidden border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-900/90 border border-slate-800 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Product Offering</span>
                </div>

                <div className="space-y-2">
                  <p className="text-cyan-400 font-mono text-sm uppercase tracking-wider font-semibold">
                    MySQL Learning Experience
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                    B10R MS
                  </h2>
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  B10R MS is a focused learning product designed around MySQL, providing a structured path for learners who want to understand database fundamentals and MySQL concepts.
                </p>

                {/* Key Topic Badges */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Core Learning Coverage:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "MySQL Fundamentals",
                      "SQL Concepts",
                      "Database Structure",
                      "Queries & Filters",
                      "Data Relationships",
                      "Practical Understanding",
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <B10RMSButton variant="primary">
                    <span>Visit B10R MS Platform</span>
                  </B10RMSButton>

                  <Link
                    to="/b10r-ms"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all"
                  >
                    <span>Read Product Overview</span>
                  </Link>
                </div>
              </div>

              {/* Graphic visual card on right - Database Concept Architecture (Abstract, Non-Executable) */}
              <div className="lg:col-span-5">
                <DatabaseConceptVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <ApproachSection />

      {/* 6. WHY WE BUILD (OUR PRINCIPLES) */}
      <section className="py-20 bg-[#090d16] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Company Principles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Why We Build
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                MadhiniSolutions values useful technology, thoughtful design, and continuous improvement. We focus on deliberate craftsmanship and creating meaningful software experiences.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Utility First</h3>
                    <p className="text-slate-400 text-xs">Every product exists to serve a clear, practical objective for users.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Clean Design Language</h3>
                    <p className="text-slate-400 text-xs">Minimalist visual presentation focused on typography and clarity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Continuous Improvement</h3>
                    <p className="text-slate-400 text-xs">Building adaptable software products ready to evolve thoughtfully.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-6">
              <h3 className="font-display font-bold text-xl text-white">
                Our Commitment to Quality
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether creating specialized learning environments like B10R MS or developing future technology experiences, MadhiniSolutions maintains a steadfast commitment to high standards, user accessibility, and honest presentation.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">MadhiniSolutions Standards</p>
                  <p className="text-xs text-slate-400">Official digital product brand & technology initiative.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-b from-[#090d16] to-[#070a12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/80 border border-cyan-500/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Ready to Explore Our Digital Products?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                Discover B10R Learning and explore our current MySQL learning offering B10R MS.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <B10RLearningButton variant="primary" />

              <B10RMSButton variant="secondary">
                <span>Visit B10R MS</span>
              </B10RMSButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

