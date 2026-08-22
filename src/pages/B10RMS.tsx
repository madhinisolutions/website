import { useEffect } from "react";
import {
  Database,
  CheckCircle2,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  Layers,
  Table,
  Filter,
  GitMerge,
  Award,
  Info,
} from "lucide-react";
import B10RMSButton from "../components/B10RMSButton";

export default function B10RMS() {
  useEffect(() => {
    document.title = "B10R MS | MySQL Learning | MadhiniSolutions";
  }, []);

  const topics = [
    {
      title: "Database Fundamentals",
      description: "Understanding relational database models, tables, columns, rows, primary keys, and data integrity.",
      icon: Table,
    },
    {
      title: "MySQL Basics & Setup Concepts",
      description: "Getting familiar with MySQL client concepts, server connections, and database management.",
      icon: Database,
    },
    {
      title: "SQL Syntax & DDL Statements",
      description: "Creating, altering, and managing tables and schemas using structured data definition statements.",
      icon: Layers,
    },
    {
      title: "Data Manipulation (DML)",
      description: "Mastering INSERT, UPDATE, DELETE, and SELECT queries for managing database records.",
      icon: Filter,
    },
    {
      title: "Filtering & Sorting",
      description: "Using WHERE clauses, ORDER BY, GROUP BY, and aggregate functions to extract specific data insights.",
      icon: Filter,
    },
    {
      title: "Joins & Data Relationships",
      description: "Connecting multiple tables using INNER JOIN, LEFT JOIN, and understanding foreign key relationships.",
      icon: GitMerge,
    },
  ];

  const targetAudience = [
    {
      title: "Beginners & Students",
      description: "Individuals starting their journey into database design, computer science, or backend development.",
    },
    {
      title: "Developers & Engineers",
      description: "Software developers wanting to solidify their MySQL query skills and database fundamentals.",
    },
    {
      title: "Data Enthusiasts",
      description: "Learners seeking structured knowledge on how relational data is stored, structured, and queried.",
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* 1. HERO SECTION */}
      <section className="relative py-12 md:py-20 bg-radial-glow border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official B10R MS Product Presentation</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            B10R MS
          </h1>

          <p className="font-display text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            Learn MySQL. Build Strong Foundations.
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A focused MySQL learning experience from B10R Learning, providing structured guidance for understanding relational database concepts and MySQL queries.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <B10RMSButton
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Visit B10R MS Website</span>
            </B10RMSButton>
          </div>

          <p className="text-xs text-slate-400 font-mono">
            Note: The actual B10R MS learning environment operates on a dedicated standalone platform.
          </p>
        </div>
      </section>

      {/* 2. ABOUT B10R MS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Product Overview
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              About B10R MS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              B10R MS is designed specifically to address the challenge learners face when approaching relational databases for the first time. Rather than overwhelming users with unnecessary setup steps or fragmented tutorials, B10R MS offers a clear, sequential path focused on core MySQL mechanics.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              It helps learners build strong mental models of database tables, queries, constraints, and relationships so they can confidently interact with production databases in modern software development.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU'LL LEARN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Curriculum Structure
          </span>
          <h2 className="font-display text-3xl font-bold text-white">
            What You'll Learn in B10R MS
          </h2>
          <p className="text-slate-400 text-sm">
            Explore the core topics and database concepts covered in the B10R MS product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LEARNING EXPERIENCE PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Product Philosophy
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              The Learning Experience
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              B10R MS focuses on concept clarity, logical progression, and practical database understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Concept-First Guidance</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear explanation of why database queries work, not just how to copy and paste syntax.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>Structured Modules</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Step-by-step topic progression designed to build confidence without overwhelming information.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Practical Utility</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Focus on real MySQL patterns used in software engineering and web backend applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO IT'S FOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            Target Audience
          </span>
          <h2 className="font-display text-3xl font-bold text-white">
            Who It's For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetAudience.map((aud) => (
            <div
              key={aud.title}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">
                {aud.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {aud.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CERTIFICATE OF COMPLETION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-2">
 
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Certificate of Completion
              </h2>
              <p className="text-cyan-300 font-medium text-sm">
                Complete your learning. Get recognized for it.
              </p>              
            </div>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Learners who successfully complete the applicable B10R MS learning requirements may be eligible to receive a Certificate of Completion. The certificate is available for an additional fee.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Completion-Based</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Eligibility depends on successfully fulfilling the applicable B10R MS learning requirements.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                <Info className="w-4 h-4 shrink-0" />
                <span>Additional Fee</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                The certificate is not automatically included; applicable fee details are communicated through the platform.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1.5 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                <Award className="w-4 h-4 shrink-0" />
                <span>Issued by MadhiniSolutions</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Official Certificate of Completion issued directly by MadhiniSolutions upon verified completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. START LEARNING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/80 border border-cyan-500/30 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Ready to Begin MySQL Learning?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Visit the B10R MS platform to start exploring database concepts and MySQL topics.
          </p>
          <div className="pt-2">
            <B10RMSButton
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Visit B10R MS</span>
            </B10RMSButton>
          </div>
        </div>
      </section>
    </div>
  );
}


