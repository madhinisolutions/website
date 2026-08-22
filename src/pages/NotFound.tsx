import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | MadhiniSolutions";
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
            ERROR 404
          </span>
          <h1 className="font-display text-3xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            The page you're looking for doesn't exist or may have moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
