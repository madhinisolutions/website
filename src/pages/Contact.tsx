import { useState, useEffect, FormEvent } from "react";
import { Mail, Send, CheckCircle2, MessageSquare, Instagram, AlertCircle, RefreshCw, ExternalLink } from "lucide-react";
import { siteConfig, contactEmail } from "../config/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    honeypot: "", // Bot protection hidden field
  });

  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isServiceUnconfigured, setIsServiceUnconfigured] = useState(false);

  useEffect(() => {
    document.title = "Contact | MadhiniSolutions";
  }, []);

  const validateForm = () => {
    const errors: { name?: string; email?: string; subject?: string; message?: string } = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      errors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (trimmedName.length > 100) {
      errors.name = "Name cannot exceed 100 characters.";
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      errors.email = "Please enter your email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    const trimmedSubject = formData.subject.trim();
    if (!trimmedSubject) {
      errors.subject = "Please specify a subject.";
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      errors.message = "Please write your message.";
    } else if (trimmedMessage.length < 5) {
      errors.message = "Message must be at least 5 characters.";
    } else if (trimmedMessage.length > 5000) {
      errors.message = "Message cannot exceed 5,000 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsServiceUnconfigured(false);

    if (!validateForm()) {
      return;
    }

    // Check honeypot field: if filled by a bot, stop gracefully
    if (formData.honeypot) {
      setErrorMsg("Spam submission detected.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey.trim() === "" || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setSubmitted(false);
      setIsServiceUnconfigured(true);
      setErrorMsg(
        "Web3Forms email delivery service is pending configuration. Please configure VITE_WEB3FORMS_ACCESS_KEY in your environment, or contact us directly at " +
          contactEmail
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        access_key: accessKey.trim(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        website: formData.honeypot, // Honeypot field for bot protection
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitted(true);
        setErrorMsg(null);
        setIsServiceUnconfigured(false);
      } else {
        // Submission was NOT delivered; DO NOT display a false success message.
        setSubmitted(false);
        const serverError =
          result?.message || "Unable to deliver your message at this time. Please try again or email us directly.";
        setErrorMsg(serverError);

        if (
          result?.message?.toLowerCase()?.includes("access_key") ||
          result?.message?.toLowerCase()?.includes("access key") ||
          result?.message?.toLowerCase()?.includes("invalid")
        ) {
          setIsServiceUnconfigured(true);
        }
      }
    } catch (err) {
      setSubmitted(false);
      setErrorMsg(
        "A network connection error occurred while submitting your message. Please verify your connection or email directly at " +
          contactEmail
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallbackUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
    formData.subject || "Inquiry to MadhiniSolutions"
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Hero Header */}
      <section className="relative py-12 md:py-16 bg-radial-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Let's Connect
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a question, idea, feedback or collaboration opportunity? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Info Card Left */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Communication
              </span>
              <h2 className="font-display text-2xl font-bold text-white">
                MadhiniSolutions Contact
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have questions about B10R Learning, B10R MS, or general technical inquiries, reach out using the contact form, email address, or social channels.
              </p>
            </div>

            <div className="pt-4 space-y-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Direct Email</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Instagram</p>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    @{siteConfig.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Response Window</p>
                  <p className="text-xs text-slate-300">
                    We review messages systematically and respond promptly.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-white">Official Brand Note:</p>
              <p>
                MadhiniSolutions is an official technology brand. All inquiries are strictly handled according to our Privacy Policy.
              </p>
            </div>
          </div>

          {/* Form Right */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-slate-900/90 border border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Message Delivered!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting MadhiniSolutions. Your message has been successfully delivered to <strong className="text-white">{contactEmail}</strong>, and our team will review it shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "General Inquiry", message: "", honeypot: "" });
                    setFieldErrors({});
                    setErrorMsg(null);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Send a Message
                </h3>

                {/* Status / Error feedback */}
                {errorMsg && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold text-white">
                          {isServiceUnconfigured ? "Email Delivery Service Setup" : "Submission Status"}
                        </p>
                        <p className="text-slate-300 leading-relaxed">{errorMsg}</p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={mailtoFallbackUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-semibold text-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email {contactEmail} Directly</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Honeypot hidden input for spam bots */}
                <input
                  type="text"
                  name="website"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300 flex justify-between">
                    <span>
                      Your Name <span className="text-cyan-400">*</span>
                    </span>
                    {fieldErrors.name && <span className="text-rose-400 text-xs">{fieldErrors.name}</span>}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                    }}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      fieldErrors.name ? "border-rose-500/70" : "border-slate-800"
                    } text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300 flex justify-between">
                    <span>
                      Email Address <span className="text-cyan-400">*</span>
                    </span>
                    {fieldErrors.email && <span className="text-rose-400 text-xs">{fieldErrors.email}</span>}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                    }}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      fieldErrors.email ? "border-rose-500/70" : "border-slate-800"
                    } text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-300 flex justify-between">
                    <span>Subject</span>
                    {fieldErrors.subject && <span className="text-rose-400 text-xs">{fieldErrors.subject}</span>}
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (fieldErrors.subject) setFieldErrors({ ...fieldErrors, subject: undefined });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="B10R Learning">B10R Learning Inquiry</option>
                    <option value="B10R MS Feedback">B10R MS Feedback</option>
                    <option value="Collaboration">Collaboration Opportunity</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300 flex justify-between">
                    <span>
                      Message <span className="text-cyan-400">*</span>
                    </span>
                    {fieldErrors.message && <span className="text-rose-400 text-xs">{fieldErrors.message}</span>}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
                    }}
                    placeholder="How can MadhiniSolutions assist you?"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                      fieldErrors.message ? "border-rose-500/70" : "border-slate-800"
                    } text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors resize-none`}
                  />
                  <div className="flex justify-end text-[11px] text-slate-500">
                    <span>{formData.message.length} / 5,000 characters</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
