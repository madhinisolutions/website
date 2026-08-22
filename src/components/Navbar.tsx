import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { siteConfig } from "../config/site";
import B10RMSButton from "./B10RMSButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 w-full z-50 h-16 sm:h-20 transition-colors duration-200 ${
          scrolled || isOpen
            ? "bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "bg-[#0b0f19]/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border-b border-slate-800/40 sm:border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg py-1 pr-2"
              aria-label="MadhiniSolutions Home"
            >
              <img
                src="/ms.png"
                alt="MadhiniSolutions Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-lg sm:text-2xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  MadhiniSolutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 backdrop-blur-md border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner">
              {siteConfig.navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      active
                        ? "text-cyan-300 bg-slate-800/80 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <B10RMSButton variant="nav" />

              {/* Mobile Menu Button */}
              <button
                id="mobile-nav-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95 transition-all shrink-0 shadow-sm"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-drawer"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Fixed to Viewport directly under header) */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-40 bg-[#0b0f19]/98 backdrop-blur-xl border-t border-slate-800/80 flex flex-col justify-between p-5 sm:p-6 overflow-y-auto"
        >
          <div className="space-y-2 py-2">
            <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </div>
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all ${
                    active
                      ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800/80 pb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Product</span>
              </div>
              <p className="text-sm font-medium text-white">B10R MS — MySQL Learning</p>
              <p className="text-xs text-slate-400">
                A structured MySQL learning experience by B10R Learning.
              </p>
              <B10RMSButton
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20"
              />
            </div>

            <p className="text-center text-xs text-slate-500">
              © 2026 MadhiniSolutions. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

