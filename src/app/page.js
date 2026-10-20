import { siteConfig, skills, projects, experience, education, certifications, hobbies, currentYear } from "@/lib/content";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section className="section-container min-h-[80vh] flex items-center relative overflow-hidden pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand font-semibold mb-2 text-lg">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-ink leading-tight">
              {siteConfig.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-muted">
              {siteConfig.title}
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-4 max-w-lg">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                Download PDF
              </a>
              <a href="/resume.docx" download className="btn-secondary">
                Download Word
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl border border-border bg-card hover:border-brand hover:text-brand transition-colors text-muted"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl border border-border bg-card hover:border-brand hover:text-brand transition-colors text-muted"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl border border-border bg-card hover:border-brand hover:text-brand transition-colors text-muted"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-brand/30 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mirror-selfie.jpg"
                  alt={siteConfig.name}
                  className="w-full h-full object-cover scale-150 object-position: 50% 30%"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-accent/20 border border-accent/30" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl bg-brand/20 border border-brand/30" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid lg:grid-cols-3 gap-10 mt-8">
          <div className="lg:col-span-2 space-y-5">
            <p className="text-muted text-lg leading-relaxed">
              I&apos;m a Software Developer based in the Philippines with 3+ years of experience
              building and maintaining production web and mobile applications. My work spans the
              full development lifecycle — from architecture and feature development to
              deployment and release management.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              I specialize in <span className="text-ink font-medium">React, Next.js, and Tailwind CSS</span>,
              with strong hands-on experience in <span className="text-ink font-medium">React Native, TanStack Query,
              and Zustand</span>. I&apos;ve led backend migrations, built CI/CD pipelines for mobile
              releases, and managed deployments across the App Store and Google Play.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Beyond code, I enjoy contributing to community projects through non-profit web
              development and exploring new technologies.
            </p>
          </div>
          <div className="card p-8 flex flex-col items-center justify-center text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand/30 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mirror-selfie.jpg"
                alt={siteConfig.name}
                className="w-full h-full object-cover scale-150 object-position: 50% 30%"
              />
            </div>
            <p className="text-sm font-medium text-ink">Tom Leonard Abella</p>
            <p className="text-xs text-muted mt-1">Software Developer · Philippines</p>
            <div className="flex gap-2 mt-4">
              <span className="tag">3+ Years Exp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">My main area of expertise is front-end development.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card p-6">
              <h3 className="text-lg font-semibold mb-4 capitalize text-ink">
                {category === "tools" ? "Tools & Others" : category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span className="text-muted">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some things I&apos;ve built recently.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card overflow-hidden group">

              <div className="aspect-video overflow-hidden bg-gradient-to-br from-brand/20 to-accent/20 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-ink group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-md">
                      {project.metrics}
                    </span>
                  </div>
                )}

                {project.features && (
                  <div className="mb-4 space-y-3">
                    {project.features.map((feature) => (
                      <div key={feature.name} className="border border-brand/20 rounded-lg p-3 bg-brand/5">
                        <p className="text-sm font-semibold text-brand">{feature.name}</p>
                        <p className="text-xs text-muted mt-1">{feature.description}</p>
                        <a
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-brand hover:text-brand-dark transition-colors mt-1 inline-block"
                        >
                          View →
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {project.deliverables && (
                  <div className="mb-4 space-y-3">
                    {project.deliverables.map((d) => (
                      <div key={d.name} className="border border-border rounded-lg p-3 bg-paper">
                        <p className="text-sm font-semibold text-ink">{d.name}</p>
                        <p className="text-xs text-muted mt-1">{d.description}</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                          {d.links.map((link) => (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-brand hover:text-brand-dark transition-colors"
                            >
                              {link.name} →
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                    >
                      View Code →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Where I&apos;ve worked and learned.</p>
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {experience.map((exp) => (
              <div key={exp.title} className="relative">
                <div className="absolute -left-8 sm:-left-10 top-1.5 w-3 h-3 rounded-full bg-brand ring-4 ring-brand/20" />
                <div className="card p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{exp.title}</h3>
                      <p className="text-sm text-brand font-medium">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-brand bg-brand/10 mt-2 sm:mt-0 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-brand mt-0.5 flex-shrink-0 text-xs">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="space-y-6 mt-8">
          {education.map((edu) => (
            <div key={edu.degree} className="card p-6">
              <h3 className="text-lg font-semibold text-ink mb-1">{edu.degree}</h3>
              <p className="text-brand font-medium mb-1">{edu.school}</p>
              <p className="text-sm text-muted">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Certificates and credentials I&apos;ve earned. Click to view.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="card overflow-hidden group hover:shadow-lg hover:border-brand/40 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-brand/80 px-3 py-1.5 rounded-lg">
                    View →
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-ink leading-tight">{cert.name}</p>
                <span className="inline-block text-xs font-medium text-brand bg-brand/10 px-2 py-0.5 rounded-full mt-2">
                  {cert.issuer}
                </span>
              </div>
            </div>
            </a>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="section-container">
        <h2 className="section-title">When I&apos;m Not Coding</h2>
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {hobbies.map((hobby) => (
            <div key={hobby.label} className="card p-6 text-center">
              <span className="text-4xl mb-3 block">{hobby.emoji}</span>
              <p className="text-muted">{hobby.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I&apos;m currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted text-lg mb-6">
              Fill in the form to start a conversation, or reach me directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand hover:text-brand-dark transition-colors font-medium"
              >
                {siteConfig.email}
              </a>
            </p>
            <div className="space-y-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-brand transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                github.com/tom-abella
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-brand transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                linkedin.com/in/tom-leonard-abella
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-muted">
            Designed & built by {siteConfig.name} · {currentYear}
          </p>
        </div>
      </footer>
    </main>
  );
}
