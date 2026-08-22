import { Database, Layers, GitBranch, Table, Cpu, ShieldCheck } from "lucide-react";

export default function DatabaseConceptVisual() {
  const concepts = [
    { label: "Relational Schema", icon: Table, tag: "Structure" },
    { label: "Data Integrity", icon: ShieldCheck, tag: "Rules" },
    { label: "Query Architecture", icon: GitBranch, tag: "Logic" },
  ];

  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-slate-950/90 border border-slate-800/90 space-y-5">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display font-semibold text-xs text-white block">
              Database Knowledge Architecture
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Structured Concept Framework
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Core Model</span>
        </div>
      </div>

      {/* Abstract connected concept nodes */}
      <div className="space-y-2.5">
        {concepts.map((concept, i) => {
          const Icon = concept.icon;
          return (
            <div
              key={concept.label}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700/80 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/70 flex items-center justify-center text-cyan-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{concept.label}</p>
                  <p className="text-[11px] text-slate-400">Layer 0{i + 1} Foundation</p>
                </div>
              </div>
              <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] font-mono text-cyan-400 border border-slate-700">
                {concept.tag}
              </span>
            </div>
          );
        })}
      </div>

      {/* Conceptual relational overview */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900/90 to-cyan-950/30 border border-slate-800/80 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
          <Layers className="w-4 h-4" />
        </div>
        <div className="space-y-1 text-xs">
          <p className="font-semibold text-slate-200">Concept-First Learning Design</p>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            Organized to build intuitive mental models of relational databases, tables, keys, and queries before production implementation.
          </p>
        </div>
      </div>
    </div>
  );
}
