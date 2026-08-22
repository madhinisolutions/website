import { useEffect } from "react";
import { FileText } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | MadhiniSolutions";
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="space-y-4 text-center md:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Documentation</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          Last updated: {siteConfig.legalLastUpdated} | MadhiniSolutions
        </p>
      </div>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the MadhiniSolutions website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree to these terms, please refrain from using our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            2. Intellectual Property Rights
          </h2>
          <p>
            All content, brand assets, logos, design visual layouts, graphics, and text on this website—including the names "MadhiniSolutions", "B10R Learning", and "B10R MS"—are the intellectual property of MadhiniSolutions. Unauthorized reproduction or distribution of brand materials without written permission is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            3. Use of Website & Product Overviews
          </h2>
          <p>
            This website provides informational content and product presentations regarding MadhiniSolutions, B10R Learning, and B10R MS. Product overview pages are provided for informational showcase purposes. Standalone platforms, such as the separate B10R MS learning platform, operate under independent platform terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            4. Limitation of Liability
          </h2>
          <p>
            MadhiniSolutions strives to ensure all information presented on this website is accurate, complete, and up to date. However, the website is provided on an "as is" and "as available" basis without express or implied warranties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-bold text-white">
            5. Inquiries & Contact
          </h2>
          <p>
            For questions concerning these Terms & Conditions, please reach out to us at:
          </p>
          <p className="font-mono text-cyan-300">{siteConfig.contactEmail}</p>
        </section>
      </div>
    </div>
  );
}

