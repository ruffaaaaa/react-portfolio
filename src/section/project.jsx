import React, { useEffect, useRef, useState } from "react";
import "../css/project.css";

function Project() {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Velit aliquet urna tincidunt; nunc bibendum eget ac. Erat convallis viverra; nullam habitant consequat tempor euismod aliquam.",
      tools: ["Laravel", "HTML", "CSS", "JS", "TailwindCSS"],
      image: "/images/project/3.png",
      titleButton: "View Website →",
      link: "https://gso-booking.lsu-ccsea.cloud/",
    },
    {
      title: "Pokemon Card",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Velit aliquet urna tincidunt; nunc bibendum eget ac. Erat convallis viverra; nullam habitant consequat tempor euismod aliquam.",
      tools: ["HTML", "CSS", "JS", "RestfulAPI"],
      image: "/images/project/4.png",
      titleButton: "View Source Code →",
      link: "https://gso-booking.lsu-ccsea.cloud/",
    },
  ];

  const [inView, setInView] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <div id="project">
      <div className="pt-24">
        <div className="items-center justify-center text-center mb-12">
          <h1
            className={`font-jersey text-[#3D9DC7] text-3xl uppercase lg:text-5xl animate-fade-in mb-8 ${
              inView ? "animate-fade-in" : ""
            }`}
          >
            Projects
          </h1>
          <p
            className={`text-white animate-fade-in delay-100 ${
              inView ? "animate-fade-in" : ""
            }`}
          >
            Here you will find some of the projects that I created.
          </p>
        </div>

        <div
          ref={projectRef}
          className={`w-full mx-auto px-8 lg:px-32 ${
            inView ? "animate-slide-in" : ""
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-7 gap-8 items-center mb-12 ${
                inView ? "animate-slide-in" : ""
              }`}
            >
              <div
                className={`flex justify-center lg:col-span-3 ${
                  inView ? "animate-slide-in-image" : ""
                } delay-200`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-1/2 rounded-lg shadow-lg"
                />
              </div>

              <div className="text-white lg:col-span-4">
                <div
                  className={`flex flex-col justify-center lg:pl-6 ${
                    inView ? "animate-fade-in" : ""
                  } delay-400`}
                >
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center flex-wrap space-x-2 mb-4">
                    <span className="text-sm font-semibold text-gray-400 uppercase">
                      Tools Used:
                    </span>
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-sm bg-gray-700 px-2 py-1 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-gradient-to-r from-[#53368A] to-[#3D9DC7] uppercase hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transform hover:scale-105 transition duration-300">
                      {project.titleButton}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
