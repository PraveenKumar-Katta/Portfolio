import React from "react";

/**
 * Experience section for a developer portfolio.
 *
 * Usage:
 *   import Experience from "./Experience";
 *   <Experience />
 *
 * Requires Tailwind CSS to be configured in the host project.
 * Data is defined below as `experiences` — add more entries to the
 * array as your career grows; the layout supports multiple roles.
 */

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "DappLogix Software Pvt Ltd",
    duration: "Jan 2026 — Sep 2026",
    location: "T-Hub, Hyderabad",
    summary:
      "Owned a client-facing identity-verification platform end to end — from requirements through production.",
    highlights: [
      {
        label: "Portfolio Ownership",
        detail:
          "Owned end-to-end development of the candidate self-verification portal, working directly with the client to gather requirements and translate them into production frontend and backend features. Delivered 20+ features across the portal.",
      },
      {
        label: "Identity Verification",
        detail:
          "Built the Aadhaar verification workflow from scratch by integrating DigiLocker APIs, replacing the previous manual verification process and achieving a 90% success rate.",
      },
      {
        label: "Database Design",
        detail:
          "Implemented MongoDB indexes to speed up frequent queries and used transactions to keep candidate verification records consistent across multi-step operations.",
      },
      {
        label: "Security",
        detail:
          "Implemented encryption/decryption for sensitive candidate data and password hashing for user credentials, replacing plaintext handling with secure data-protection mechanisms.",
      },
      {
        label: "Frontend Architecture",
        detail:
          "Built the Dashboard and Company Profile modules for the HR portal in React, developing reusable stat cards, modals, and table components to keep the UI consistent and maintainable across the application.",
      },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "DigiLocker API","Micro Services"],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div className="relative pl-8 sm:pl-10">
      {/* Timeline marker */}
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-teal-600 ring-4 ring-teal-100" />
      <span className="absolute left-[4px] top-5 bottom-0 w-px bg-slate-200" />

      <div className="pb-14">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold text-pink-400">
            {exp.role}
            <span className="text-white font-normal"> · {exp.company}</span>
          </h3>
          <span className="mb-1 text-sm font-semibold text-sky-400">
            {exp.duration}
          </span>
        </div>
        <p className="mt-0.5 text-sm text-sky-400">{exp.location}</p>

        <p className="mt-4 text-white leading-relaxed max-w-[62ch]">
          {exp.summary}
        </p>

        <ul className="mt-5 space-y-3">
          {exp.highlights.map((h) => (
            <li key={h.label} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
              <p className="text-gray-400 leading-relaxed">
                <span className="font-medium text-white">{h.label}.</span>{" "}
                {h.detail}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-6 py-20 sm:px-8"
    >
      <div className="mb-12">
        <p className="text-base font-semibold uppercase tracking-wider text-sky-400">Where I've worked</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Experience
        </h2>
      </div>

      <div>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company + exp.role} exp={exp} />
        ))}
      </div>
    </section>
  );
}