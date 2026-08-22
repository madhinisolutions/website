import { useState, ReactNode, MouseEvent } from "react";
import { ArrowUpRight, Sparkles, Info, X } from "lucide-react";
import { siteConfig, isConfiguredUrl } from "../config/site";

interface B10RMSButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "nav" | "footer";
  children?: ReactNode;
  showIcon?: boolean;
}

export default function B10RMSButton({
  className = "",
  variant = "primary",
  children,
  showIcon = true,
}: B10RMSButtonProps) {
  const [showNotice, setShowNotice] = useState(false);
  const isConfigured = isConfiguredUrl(siteConfig.B10R_MS_URL);

  const handleClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      setShowNotice(true);
    }
  };

  const defaultStyles = {
    primary:
      "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 cursor-pointer",
    secondary:
      "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 hover:text-white font-semibold text-sm transition-all duration-200 cursor-pointer",
    nav:
      "hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 shadow-sm cursor-pointer",
    footer:
      "inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-xs pt-1 cursor-pointer",
  };

  const selectedClass = className || defaultStyles[variant];

  return (
    <>
      <a
        href={isConfigured ? siteConfig.B10R_MS_URL : "#"}
        onClick={handleClick}
        target={isConfigured ? "_blank" : undefined}
        rel={isConfigured ? "noopener noreferrer" : undefined}
        className={selectedClass}
        aria-label="Visit B10R MS Platform"
      >
        {children ? (
          children
        ) : (
          <>
            {variant === "nav" && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
            <span>Visit B10R MS</span>
            {showIcon && <ArrowUpRight className="w-4 h-4" />}
          </>
        )}
      </a>

      {/* Development / Pre-release informational notice modal when URL is a placeholder */}
      {showNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="b10r-notice-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowNotice(false)}
        >
          <div
            className="relative max-w-md w-full p-6 sm:p-7 rounded-3xl bg-[#0e1422] border border-cyan-500/40 shadow-2xl space-y-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowNotice(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Product Platform Notice
                </span>
                <h3 id="b10r-notice-title" className="font-display text-lg font-bold text-white">
                  B10R MS Platform Link
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              The dedicated standalone <strong className="text-white">B10R MS</strong> learning platform is currently in active development. When the official production URL is released, this link will direct directly to the live platform.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Central Configuration:</p>
              <code className="text-cyan-300 font-mono text-[11px] break-all">
                src/config/site.ts → B10R_MS_URL
              </code>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setShowNotice(false)}
                className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
