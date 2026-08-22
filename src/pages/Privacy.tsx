import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | MadhiniSolutions";
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-4 text-center md:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Legal Documentation</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          Last updated: {siteConfig.legalLastUpdated} | MadhiniSolutions
        </p>
      </div>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            1. Introduction
          </h2>
          <p>
            MadhiniSolutions ("we," "our," or "us") respects your privacy and is committed to being transparent about information practices. This website serves as the informational and brand portal for MadhiniSolutions and its digital products, including B10R Learning and B10R MS.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            2. Information We Collect
          </h2>
          <p>
            We only receive information that you voluntarily provide when contacting us via email or our contact form:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Contact details you provide, such as your name, email address, and inquiry message.</li>
          </ul>
          <p className="text-slate-400 text-xs mt-2">
            This informational website does not use third-party analytics trackers, advertising pixels, or persistent tracking cookies, nor does it collect user accounts or student learning records from B10R MS.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            3. How We Use Information
          </h2>
          <p>Any information received by MadhiniSolutions is used solely for:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Responding directly to your inquiries, feedback, or collaboration requests.</li>
            <li>Providing requested information regarding MadhiniSolutions products and updates.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            4. External Links & Dedicated Platforms
          </h2>
          <p>
            Our website provides links to external products and dedicated standalone platforms, such as the separate B10R MS learning platform. MadhiniSolutions recommends reviewing the independent privacy policies and terms of any external platforms you visit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            5. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or practices at MadhiniSolutions, please contact us at:
          </p>
          <p className="font-mono text-cyan-300">{siteConfig.contactEmail}</p>
        </section>
      </div>
    </div>
  );
}

