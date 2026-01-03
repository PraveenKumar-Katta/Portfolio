import React from 'react';

// Icon for the timeline points - you can use any SVG or icon library
const GraduationCapIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 002-2v-5" />
  </svg>
);

// Data for education - easy to add new qualifications
const educationData = [
  {
    degree: "Full Stack Development",
    institution: "Masai School",
    period: "November 2024 - Present", // Updated to be more specific
    details: "Intensive, hands-on training covering MERN stack (MongoDB, Express.js, React, Node.js), Data Structures, and Algorithms in a military-style coding bootcamp.",
  },
  {
    degree: "Bachelor of Engineering in Electronics",
    institution: "Medak College Of Engineering & Technology",
    period: "2019 - 2023",
    details: "Gained a strong foundation in digital electronics, microprocessors, and communication systems. Graduated with First Class honors.",
  },
];

// Reusable component for each item in the timeline
const TimelineItem = ({ degree, institution, period, details }) => (
  <div className="relative mb-10 pl-14 before:absolute before:left-5 before:top-2 before:h-full before:w-0.5 before:bg-gray-700 last:before:hidden">
    {/* The Dot and Icon */}
    <div className="absolute -left-1.5 top-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
        <GraduationCapIcon className="h-6 w-6" />
      </div>
    </div>
    
    {/* The Content Card */}
    <div className="rounded-lg border border-gray-700 bg-gray-800/40 p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-sky-500/10">
      <p className="mb-1 text-sm font-semibold text-sky-400">{period}</p>
      <h3 className="mb-1 text-xl font-bold text-white">{degree}</h3>
      <h4 className="mb-3 text-md font-medium text-gray-400">{institution}</h4>
      <p className="text-gray-400">{details}</p>
    </div>
  </div>
);


const Education = () => {
  return (
    <div className="w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wider text-sky-400">
            My Journey
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Education & Qualifications
          </p>
        </div>

        <div className="relative">
          {educationData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;