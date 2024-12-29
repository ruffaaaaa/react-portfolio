import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/aboutme.css";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "TAILWINDCSS",
    "BOOTSTRAP",
    "REACTJS",
    "BLADE",
    "MARKDOWN",
    "LARAVEL",
    "PHP",
    "C++",
    "C#",
    "PowerBI",
    "SQL",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="about-me"
      className="pt-24 pb-12"
      style={{
        backgroundImage: "url('/src/images/bg-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          data-aos="fade-up"
          className="font-jersey text-[#3D9DC7] text-3xl uppercase lg:text-5xl mb-8"
        >
          About Me
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-white max-w-2xl px-6"
        >
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="w-full mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-6">
          <div data-aos="fade-up" className="lg:col-span-1 text-white">
            <h2 className="text-xl font-bold mb-4 mt-10 uppercase text-white">
              Get to know me!
            </h2>
            <p className="mb-6">
              Hi, I’m Ruffa—both a designer and developer passionate about
              bringing ideas to life through creativity and code. With a knack
              for blending aesthetics with functionality, I create projects that
              are not just visually appealing but also highly efficient. Outside
              of coding, I love exploring new technologies and continuously
              learning to sharpen my skills.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:col-span-1 text-white"
          >
            <h2 className="text-xl font-bold mb-4 lg:mt-10 uppercase">
              Skills
            </h2>
            <div className="flex flex-wrap text-center justify-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="mb-2 mr-2 text-md bg-gray-700 px-3 py-2 rounded-md"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center text-white"
          >
            I'm currently looking for a new role and would love to be a part of
            your team! If you think I could be a good fit for your company,
            don't hesitate to reach out.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
