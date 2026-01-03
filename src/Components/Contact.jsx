import React from "react";
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { useElements } from "../Context/ContextAPI";

const Contact = () => {
  let {contactRef}=useElements()
  
  return (
    <div ref={contactRef} className="bg-black text-gray-100 pb-16 font-inter">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400 flex items-center justify-center space-x-4">
          <Phone size={36} />
          <span>Let's Connect</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a
            href="mailto:praveenkumar5500u@gmail.com"
            className="group flex flex-col items-center justify-center p-6 w-48 h-48 bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-700"
          >
            <Mail
              className="text-teal-400 group-hover:text-amber-400 transition-colors duration-300"
              size={48}
            />
            <h4 className="font-semibold text-lg mt-4 group-hover:text-amber-400 transition-colors duration-300">
              E-mail
            </h4>
          </a>

          <a
            href="https://github.com/PraveenKumar-Katta"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-6 w-48 h-48 bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-700"
          >
            <Github
              className="text-teal-400 group-hover:text-amber-400 transition-colors duration-300"
              size={48}
            />
            <h4 className="font-semibold text-lg mt-4 group-hover:text-amber-400 transition-colors duration-300">
              GitHub
            </h4>
          </a>

          <a
            href="https://www.linkedin.com/in/praveen5500u/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-6 w-48 h-48 bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-700"
          >
            <Linkedin
              className="text-teal-400 group-hover:text-amber-400 transition-colors duration-300"
              size={48}
            />
            <h4 className="font-semibold text-lg mt-4 group-hover:text-amber-400 transition-colors duration-300">
              LinkedIn
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
