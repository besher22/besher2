// ResumeSection.jsx
// Drop this component inside your 'السيرة الذاتية' tab content area.
// Assumes Tailwind CSS is configured and a file `/public/besher-resume.pdf` exists.

import { FiDownload, FiBriefcase, FiBook, FiAward, FiCode } from "react-icons/fi";

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
  {
    role: "Independent Web Developer & Solutions Architect",
    company: "Self-Employed",
    period: "June 2026 – Present",
    location: "Remote",
    bullets: [
      "Architected and deployed a high-performance personal portfolio and blogging platform hosted on Vercel.",
      "Optimized frontend architecture to achieve a 99% Performance Score on Google Lighthouse with zero Total Blocking Time (TBT).",
      "Implemented modern UI/UX practices ensuring full responsiveness and cross-device compatibility.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Information Engineering",
    institution: "University of Aleppo",
    location: "Aleppo, Syria",
    period: "In Progress",
  },
];

const certifications = [
  {
    name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    issuer: "New Horizons Aleppo",
  },
  {
    name: "C2 Proficient English Certificate (CEFR)",
    issuer: "New Horizons Aleppo",
  },
];

const skills = {
  Frontend: ["Next.js", "React.js", "JavaScript", "Tailwind CSS"],
  "Backend & Databases": ["Node.js", "RESTful APIs", "Databases"],
  "AI & Security": ["Local LLM", "Fine-Tuning"],
  "Cloud & DevOps": ["Microsoft Azure (AZ-104)"],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 text-indigo-400">
        <Icon size={18} />
      </span>
      <h2 className="text-lg font-semibold tracking-wide text-white/90">{title}</h2>
      <div className="flex-1 h-px bg-white/10 ml-2" />
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ResumeSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 space-y-10 text-white/80">

      {/* ── Download Button ── */}
      <div className="flex justify-center">
        <a
          href="/besher-resume.pdf"
          download="Besher-AlHajOmar-Resume.pdf"
          aria-label="Download Besher Al Haj Omar's full CV as a PDF file"
          className="
            inline-flex items-center gap-2.5
            px-6 py-3 rounded-xl
            bg-indigo-500 hover:bg-indigo-400
            text-white font-semibold text-sm tracking-wide
            shadow-lg shadow-indigo-500/20
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-transparent
          "
        >
          <FiDownload size={16} aria-hidden="true" />
          Download Full CV (PDF)
        </a>
      </div>

      {/* ── Experience ── */}
      <div>
        <SectionHeading icon={FiBriefcase} title="Experience" />
        <div className="space-y-4">
          {experience.map((job, i) => (
            <Card key={i}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-white text-base leading-snug">{job.role}</h3>
                  <p className="text-sm text-indigo-400 mt-0.5">{job.company} · {job.location}</p>
                </div>
                <span className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-full px-3 py-1 shrink-0">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-1.5 list-none">
                {job.bullets.map((point, j) => (
                  <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-white/65">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/70 shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* ── Education ── */}
      <div>
        <SectionHeading icon={FiBook} title="Education" />
        <div className="space-y-4">
          {education.map((edu, i) => (
            <Card key={i}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-white text-base leading-snug">{edu.degree}</h3>
                  <p className="text-sm text-indigo-400 mt-0.5">{edu.institution} · {edu.location}</p>
                </div>
                <span className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-full px-3 py-1 shrink-0">
                  {edu.period}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <div>
        <SectionHeading icon={FiCode} title="Skills" />
        <Card>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-2.5">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* ── Certifications ── */}
      <div>
        <SectionHeading icon={FiAward} title="Certifications" />
        <div className="space-y-3">
          {certifications.map((cert, i) => (
            <Card key={i}>
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0"
                  aria-hidden="true"
                >
                  <FiAward size={14} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white/90 leading-snug">{cert.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{cert.issuer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
}
