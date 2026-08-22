import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Database,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  GraduationCap,
  Compass,
} from "lucide-react";
import B10RMSButton from "../components/B10RMSButton";
import B10RLearningButton from "../components/B10RLearningButton";

export default function B10RLearning() {
  useEffect(() => {
    document.title = "B10R Learning | MadhiniSolutions";
  }, []);

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Hero Header */}
      <section className="relative py-12 md:py-20 bg-radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Learning Initiative</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            B10R Learning
          </h1>

          <p className="font-display text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            Learn Technology. Build Understanding.
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
            A technology-focused learning experience designed to make technical education more structured, approachable and practical for learners building foundational knowledge.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <B10RLearningButton variant="primary">
              <span>Explore B10R Learning</span>
              <ArrowRight className="w-4 h-4" />
            </B10RLearningButton>
          </div>

          <p className="text-xs text-slate-400 font-mono">
            Note: The actual B10R Learning platform operates on a dedicated standalone website.
          </p>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">
              Structured Paths
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Curated topic paths designed to guide learners step-by-step from fundamental concepts to clear understanding.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">
              Approachable Concept Design
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Complex software and database ideas broken down into readable, coherent, and accessible learning modules.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white">
              Practical Context
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Focusing on practical knowledge that empowers learners to apply technical concepts in real applications.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENTLY AVAILABLE OFFERING: B10R MS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/60 border border-cyan-500/40 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Currently Available Product</span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  MySQL Learning Offering
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
                  B10R MS
                </h2>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                B10R MS is the first learning experience available within B10R Learning. It focuses on MySQL fundamentals, data structures, SQL syntax, queries, filtering, sorting, and relational database logic.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Structured MySQL learning modules</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Designed for students, developers, and beginners</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Concept-first database structure guidance</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/b10r-ms"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <span>Explore B10R MS Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <B10RMSButton variant="secondary">
                  <span>Visit B10R MS Platform</span>
                </B10RMSButton>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <Database className="w-8 h-8 text-cyan-400" />
                <div>
                  <h3 className="font-display font-bold text-white text-lg">
                    B10R MS Platform
                  </h3>
                  <p className="text-xs text-slate-400">MySQL Education</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                <p className="font-semibold text-white">Focus Areas:</p>
                <ul className="space-y-1 text-slate-400 font-mono">
                  <li>• Relational Concepts</li>
                  <li>• SQL Queries & Filters</li>
                  <li>• Table Schema Design</li>
                  <li>• Data Types & Joins</li>
                </ul>
              </div>

              <div className="text-center pt-2">
                <B10RMSButton variant="footer">
                  <span>Access Platform</span>
                </B10RMSButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

