import { Link } from "react-router-dom";
import { Mail, ShieldCheck, Instagram } from "lucide-react";
import { siteConfig } from "../config/site";
import B10RMSButton from "./B10RMSButton";

export default function Footer() {
  return (
    <footer className="bg-[#070a12] border-t border-slate-800/80 text-slate-400 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 inline-flex group">
              <img
                src="/ms.png"
                alt="MadhiniSolutions Logo"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-display font-bold text-2xl text-white tracking-tight group-hover:text-cyan-300 transition-colors self-center">
                MadhiniSolutions
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              MadhiniSolutions is a technology-focused company creating practical digital products and experiences designed to make technology more useful, accessible and meaningful.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Building Digital Products</span>
              </div>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-colors"
                title="Follow MadhiniSolutions on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@{siteConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-200">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-cyan-300 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Initiative */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-200">
              Products
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/b10r-learning" className="hover:text-cyan-300 transition-colors">
                  B10R Learning
                </Link>
              </li>
              <li>
                <Link to="/b10r-ms" className="hover:text-cyan-300 transition-colors">
                  B10R MS — MySQL
                </Link>
              </li>
              <li>
                <B10RMSButton variant="footer">
                  <span>Visit B10R MS Platform</span>
                </B10RMSButton>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-200">
              Legal & Contact
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-cyan-300 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{siteConfig.contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>@{siteConfig.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MadhiniSolutions. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
              <span>Official Brand Portal</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

