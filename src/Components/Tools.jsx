import React from "react";

const Tools = () => {
  return (
    <div className="bg-black flex flex-col gap-10 py-50">
      <h1 className="text-center font-bold text-4xl text-white">Tools</h1>
      <p className="mx-auto  text-xl text-gray-400">A glimpse into the toolkit I use to craft high-performance full-stack applications</p>
      <div className="flex flex-wrap justify-center items-center gap-15 ">
        <div className="bg-white flex flex-col justify-center items-center rounded-xl transform hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out">
          <img
            src="https://img.icons8.com/color/256/git.png"
            width={80}
            alt="Git"
          />
          <p>Git</p>
        </div>
        <div className="bg-white p-2 flex flex-col justify-center items-center rounded-xl transform hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.R0mq9v3bT9FydwgoZPpWkwHaHa?r=0&pid=Api&h=220&P=0"
            width={80}
            alt="Sublime Merge"
          />
          <p>Sublime Merge</p>
        </div>
        <div className="bg-white p-2 flex flex-col justify-center items-center rounded-xl transform hover:scale-110 hover:-rotate-6 transition-transform duration-300 ease-in-out">
          <img
            src="https://iconape.com/wp-content/files/ie/112455/png/visual-studio-code-1.png"
            width={80}
            alt="VsCode"
          />
          <p>VsCode</p>
        </div>
        <div className="bg-white p-2 flex flex-col justify-center items-center rounded-xl transform hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out">
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
            width={80}
            alt="Postman"
          />
          <p>Postman</p>
        </div>
        <div className="bg-white p-2 flex flex-col justify-center items-center rounded-xl transform hover:scale-110 hover:-rotate-6 transition-transform duration-300 ease-in-out">
          <img
            src="https://img.icons8.com/color/256/npm.png"
            width={80}
            alt="npm"
          />
          <p>npm</p>
        </div>
        <div className="bg-white p-2 flex flex-col justify-center items-center rounded-xl transform hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out">
          <img
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png"
            width={80}
            alt="Netlify"
          />
          <p>Netlify</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
