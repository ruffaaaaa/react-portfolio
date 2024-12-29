import React, { useState } from "react";

function Sidepanel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed top-1/3 left-0 z-50 flex flex-col transition-all duration-300 ${
        isHovered ? "w-[3.5rem]" : "w-3"
      } bg-gradient-to-b from-[#53368A] to-[#CA60B8] rounded-r-lg shadow-md`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expandable Content */}
      <div
        className={`flex flex-col space-y-4 p-3 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2"
        >
          <img
            src="/images/icon/facebook.png"
            alt="Facebook"
            className="h-8 w-8 hover:scale-110 transition-transform"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://github.com/ruffaaaaa"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2"
        >
          <img
            src="/images/icon/github.png"
            alt="Github"
            className="h-8 w-8 hover:scale-110 transition-transform"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ruffa-mae-ara%C3%B1ez-01a07a232/"
          className="py-2"
        >
          <img
            src="/images/icon/linkedin.png"
            alt="LinkedIn"
            className="h-8 w-8 hover:scale-110 transition-transform"
          />
        </a>

        {/* Email */}
        <a href="mailto:aranez.ruffa@gmail.com" className="py-2">
          <img
            src="/images/icon/email.png"
            alt="Email"
            className="h-6 w-8 hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}

export default Sidepanel;
