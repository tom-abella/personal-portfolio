"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/content";

const navLinks = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.id);
      let current = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-bold text-brand hover:text-brand-dark transition-colors"
          >
            {siteConfig.name.split(" ").map((n) => n[0]).join("")}
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "text-brand bg-brand/10"
                    : "text-muted hover:text-ink hover:bg-border/50"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 text-sm font-medium text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors"
              >
                PDF
              </a>
              <a
                href="/resume.docx"
                download
                className="px-4 py-2 text-sm font-medium text-brand border border-brand/40 hover:bg-brand/10 rounded-lg transition-colors"
              >
                Word
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-muted hover:text-ink hover:bg-border/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-paper/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "text-brand bg-brand/10"
                    : "text-muted hover:text-ink hover:bg-border/50"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <a
                href="/resume.pdf"
                download
                className="block text-center px-3 py-2.5 text-sm font-medium text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors"
              >
                PDF
              </a>
              <a
                href="/resume.docx"
                download
                className="block text-center px-3 py-2.5 text-sm font-medium text-brand border border-brand/40 hover:bg-brand/10 rounded-lg transition-colors"
              >
                Word
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
