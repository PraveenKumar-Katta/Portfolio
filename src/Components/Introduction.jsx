import React from "react";
import { DownloadIcon, Github } from "lucide-react";
import { useElements } from "../Context/ContextAPI";
import profile from "../assets/pk.png";

const Introduction = () => {
  let { aboutRef } = useElements();

  return (
    <div
      ref={aboutRef}
      className="flex flex-col justify-center mt-30 items-center min-h-screen bg-gradient-to-br min-w-[360px] from-black via-black-900 to-black px-4"
    >
      {/* Profile Image */}
      <div className="relative group mb-8">
        <img
          src={profile}
          alt="Profile"
          className="w-80 h-80 mt-10 rounded-full border-4 border-pink-500 shadow-lg shadow-pink-500/40 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-xl opacity-0 transition-opacity duration-500"></div>
      </div>

      {/* Title & Name */}
      <h2 className="text-lg md:text-xl text-pink-400 tracking-widest animate-pulse">
        FULL STACK DEVELOPER
      </h2>
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent mt-2">
        Hey, I'm Praveen Kumar
      </h1>

      {/* About Me Card */}
      <div className="max-w-3xl mt-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
        <h3 className="text-2xl text-white font-semibold mb-4">About Me</h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          I craft exceptional digital experiences through elegant code and
          innovative solutions.  
          A passionate <span className="text-pink-400">MERN Stack Developer</span> dedicated to creating scalable
          and high-performance web applications using MongoDB, Express.js, React, and Node.js.
          With strong problem-solving skills and hands-on experience in projects like
          e-commerce platforms, real-time chat apps, and dashboards, I focus on clean code,
          modular architecture, and responsive UI design.
          Always exploring new technologies, I aim to build products that are impactful,
          efficient, and maintainable. Let's build something awesome together!
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          className="bg-gradient-to-r from-pink-500 to-violet-600 text-white flex items-center gap-2 px-6 py-3 rounded-xl 
          shadow-lg hover:scale-105 transition-transform duration-300"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const fileUrl = "/Praveen_Kumar_Resume.pdf";
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "Praveen_Kumar_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.open(fileUrl, "_blank");
          }}
        >
          <DownloadIcon /> Resume
        </a>

        <a
          href="https://github.com/PraveenKumar-Katta"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <Github /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Introduction;
