import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Target,
  Eye,
  BookOpen,
  ArrowRight,
  Database,
} from "lucide-react";
import ApproachSection from "../components/ApproachSection";
import B10RMSButton from "../components/B10RMSButton";

export default function About() {
  useEffect(() => {
    document.title = "About | MadhiniSolutions";
  }, []);

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Hero Header */}
      <section className="relative py-12 md:py-20 bg-radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>About MadhiniSolutions</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Technology Driven by Purpose
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Learn about who we are, our core mission, and how MadhiniSolutions approaches digital product development.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Who We Are
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Building Practical Technology Experiences
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              MadhiniSolutions is a technology-focused company creating digital products and experiences with a focus on practical usefulness, thoughtful design and continuous improvement.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We focus on building software solutions and structured platforms that remove complexity, helping users learn, create, and build stronger technical understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Our Mission
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Create technology that is useful, accessible and meaningful to the people who use it.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              PURPOSE-DRIVEN CREATION
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Our Vision
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                Build a growing ecosystem of digital products and technology experiences that can evolve with changing needs.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
              SUSTAINABLE EXPANSION
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <ApproachSection />

      {/* Current Focus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Current Direction
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Our Current Focus
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Our current focus is B10R Learning, beginning with B10R MS, a MySQL-focused learning experience designed to make database learning structured and approachable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <h3 className="font-display font-semibold text-lg text-white">
                  B10R Learning
                </h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                A digital learning initiative designed to make technology education approachable and structured for modern learners.
              </p>
              <Link
                to="/b10r-learning"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white pt-2"
              >
                <span>Learn about B10R Learning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-blue-400" />
                <h3 className="font-display font-semibold text-lg text-white">
                  B10R MS — MySQL Learning
                </h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                The first available product from B10R Learning, providing a clear path to understanding relational databases and MySQL concepts.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  to="/b10r-ms"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white"
                >
                  <span>Read Overview</span>
                </Link>
                <B10RMSButton variant="footer">
                  <span>Visit B10R MS</span>
                </B10RMSButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

