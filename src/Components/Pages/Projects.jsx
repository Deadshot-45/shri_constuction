import React from "react";
import { projects } from "../../assets/AppAssests.js"; // Assuming you have a data file with project details

const Projects = () => {
  

  return (
    <div className="min-h-screen py-20 w-[80%] mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center min-w-[250px] uppercase mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">OUR Projects</h2>
          <div className="bg-amber-500 w-[100px] mx-auto h-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="pop-up-animation bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 relative">
                <img lazyload="true"
          loading="lazy" 
                  src={project.image.src}
                  alt={project.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {project.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
