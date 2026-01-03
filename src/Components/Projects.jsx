import React from "react";
import buymart from "../assets/buymart.png";
import eventify from "../assets/eventify.png";
import NicheCommunity from "../assets/NicheCommunity.png";
import { useElements } from "../Context/ContextAPI";
import { DownloadIcon, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  let { projectRef } = useElements();
  return (
    <div ref={projectRef} className="bg-black text-white py-15">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl ">Featured Projects</h1>
        <p className="mx-auto mt-5 text-center text-xl text-gray-400 py-10">
          Here are some of the projects I've built, showcasing my skills in
          full-stack development, problem solving, and real-world application
          design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Buymart */}
          <div className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={buymart}
              alt="Buymart"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">Buymart</h1>
              <p className="text-sm text-white font-semibold mb-4">
                BuyMart is a multi-vendor e-commerce platform that empowers
                vendors to manage their products, track orders, monitor profits,
                and receive smart recommendations for top-selling items. Users
                can browse products, add to cart, and place orders seamlessly,
                while admins oversee users, vendors, and product listings.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Redux Toolkit
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  JWT Authentication
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Express
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  MongoDB
                </span>
              </div>
              <div className="flex gap-4 text-md">
                <a href="https://github.com/PraveenKumar-Katta/BuyMart" className="text-blue-200 flex p-1 hover:text-pink-500 cursor-pointer"><Github/>  View Code</a>
                <a href="https://buymart-shop.netlify.app//" className="text-green-600 flex p-1 hover:text-green-300 cursor-pointer"> <ExternalLink />Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 2: Eventify */}
          <div className="bg-gray-800 text-white-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={eventify}
              alt="Eventify"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">Eventify</h1>
              <p className="text-sm text-white font-semibold mb-4">
                Eventify is a smart event management platform where users can
                create fully customized events, send email invites and
                reminders, and enable real-time group chat among invitees.
                Easily search events, manage guests, and keep everyone connected
                — all in one place.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Redux Toolkit
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Firebase
                </span>
              </div>
              <div className="flex gap-4 text-md">
                <a href="https://github.com/PraveenKumar-Katta/Event-Management-App" target="_blank" className="text-blue-200 flex p-1 hover:text-pink-500 cursor-pointer"><Github/>  View Code</a>
                <a href="https://eventifybypk.netlify.app/" target="_blank" className="text-green-600 flex p-1 hover:text-green-300 cursor-pointer"> <ExternalLink />Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 3: NicheHood */}
          <div className="bg-gray-800 text-white-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={NicheCommunity}
              alt="NicheHood"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">NicheHood</h1>
              <p className="text-sm text-white font-semibold mb-4">
                NicheHood is an interest-based community platform where users
                can join communities, share posts, and engage through comments.
                Admins can create new communities, manage members, and keep
                discussions organized and meaningful.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  HTML
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  CSS
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  JavaScript
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Firebase Firestore
                </span>
                <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  Firebase Auth
                </span>
              </div>
              <div className="flex gap-4 text-md">
                <a href="https://github.com/PraveenKumar-Katta/Niche-Community" className="text-blue-200 flex p-1 hover:text-pink-500 cursor-pointer"><Github/>  View Code</a>
                <a href="https://nichehoodbypk.netlify.app/" className="text-green-600 flex p-1 hover:text-green-300 cursor-pointer"> <ExternalLink />Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
