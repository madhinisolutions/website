export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;
  contactEmail: string;
  instagramHandle: string;
  instagramUrl: string;
  B10R_LEARNING_URL: string;
  B10R_MS_URL: string;
  siteUrl: string;
  legalLastUpdated: string;
  socialLinks: { platform: string; url: string; handle: string }[];
  navLinks: { label: string; href: string }[];
  footerLinks: {
    explore: { label: string; href: string }[];
    legal: { label: string; href: string }[];
  };
}

export const siteConfig: SiteConfig = {
  siteName: "MadhiniSolutions",
  tagline: "Building Digital Experiences That Matter",
  description:
    "MadhiniSolutions is a technology-focused company creating practical digital products and experiences designed to make technology more useful, accessible and meaningful.",
  contactEmail: "madhinisolutions@gmail.com",

  instagramHandle: "madhinisolutions",
  instagramUrl: "https://www.instagram.com/madhinisolutions",

  // Central configuration for the dedicated B10R Learning platform URL.
  // Update this single value when the official production URL is available.
  B10R_LEARNING_URL: "https://b10rlearning.madhinisolutions.com",

  // Central configuration for the dedicated B10R MS platform URL.
  // Update this single value when the official production URL is available.
  B10R_MS_URL: "https://b10rms.b10rlearning.madhinisolutions.com",

  // Production domain placeholder (update when the official domain is configured)
  siteUrl: "YOUR_MADHINISOLUTIONS_DOMAIN_HERE",

  legalLastUpdated: "August 2026",

  // Social media channels
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/madhinisolutions",
      handle: "madhinisolutions",
    },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "B10R Learning", href: "/b10r-learning" },
    { label: "B10R MS", href: "/b10r-ms" },
    { label: "Contact", href: "/contact" },
  ],

  footerLinks: {
    explore: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "B10R Learning", href: "/b10r-learning" },
      { label: "B10R MS", href: "/b10r-ms" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
};

export const contactEmail = siteConfig.contactEmail;
export const B10R_LEARNING_URL = siteConfig.B10R_LEARNING_URL;
export const B10R_MS_URL = siteConfig.B10R_MS_URL;

/**
 * Utility to check if an external URL is configured and valid
 */
export function isConfiguredUrl(url: string): boolean {
  if (!url) return false;
  if (url.startsWith("YOUR_") || url.includes("_HERE")) return false;
  return url.startsWith("http://") || url.startsWith("https://");
}
