import React from 'react';
import { useElements } from '../Context/ContextAPI';

// Data for skills - easy to update and manage
const skillsData = [
  {
    title: "Frontend Development",
    description: "Crafting responsive and intuitive user interfaces with modern frameworks.",
    technologies: [
      { name: "HTML", icon: "https://img.icons8.com/color/256/html-5.png" },
      { name: "CSS", icon: "https://img.icons8.com/color/256/css3.png" },
      { name: "JavaScript", icon: "https://img.icons8.com/color/256/javascript.png" },
      { name: "TypeScript", icon: "https://img.icons8.com/color/256/typescript.png" },
      { name: "React", icon: "https://img.icons8.com/officel/256/react.png" },
      { name: "Redux", icon: "https://img.icons8.com/color/256/redux.png" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/color/256/tailwind_css.png" },
    ],
  },
  {
    title: "Backend Development",
    description: "Building scalable and robust server-side applications and APIs.",
    technologies: [
      { name: "Node.js", icon: "https://img.icons8.com/color/256/nodejs.png" },
      { name: "Express.js", icon: "https://img.icons8.com/fluency/256/express-js.png" },
      { name: "REST APIs", icon: "https://img.icons8.com/fluency/256/api-settings.png" },
    ],
  },
  {
    title: "Database Management",
    description: "Designing and managing efficient, secure, and scalable databases.",
    technologies: [
      { name: "MongoDB", icon: "https://img.icons8.com/color/256/mongodb.png" },
      { name: "Firebase", icon: "https://img.icons8.com/color/256/firebase.png" },
      { name: "Redis", icon: "https://img.icons8.com/color/256/redis.png" },
    ],
  },
];

// Reusable component for each technology icon
const TechIcon = ({ name, icon }) => (
  <div className="group flex flex-col items-center justify-center gap-2 text-center">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-700/50 p-3 transition-all duration-300 group-hover:bg-sky-500/80 group-hover:scale-110">
      <img src={icon} alt={`${name} logo`} className="h-full w-full object-contain" />
    </div>
    <p className="text-sm font-light text-gray-300 transition-colors duration-300 group-hover:text-white">
      {name}
    </p>
  </div>
);

// Reusable component for each skill category card
const SkillCard = ({ title, description, technologies }) => (
  <div className="flex flex-1 flex-col gap-6 rounded-xl border border-gray-700 bg-gray-800/40 p-6 backdrop-blur-sm">
    <h3 className="text-2xl font-semibold text-sky-400">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-6 pt-4">
      {technologies.map((tech) => (
        <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  </div>
);


const Skills = () => {
  let {skillsRef}=useElements()
  return (
    <div  ref={skillsRef} className="min-h-screen w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-sky-400">
            My Skills
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            My Technical Expertise
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-400">
            A look at the technologies I work with to bring ideas to life.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-8 lg:flex-row">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
              technologies={skill.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;