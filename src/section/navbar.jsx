import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="z-50 animated-navbar text-white mx-8 my-4 p-4 rounded-2xl shadow-md fixed top-0 right-0 left-0">
        <div className="flex justify-between items-center mx-4">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center">
            <a href="#" className="flex items-center">
              <img
                src="/images/ruffa-logo.png"
                alt="Logo"
                className="h-8 pr-1"
              />
              <p className="hidden lg:block font-bold uppercase text-xs pl-2 border-l-2 border-white">
                Ruffa Mae Arañez
              </p>
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="justify-center text-center block lg:hidden" onClick={toggleMenu}>
            <button>
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`lg:flex transition-transform duration-300 ${
              isMenuOpen
                ? "flex flex-col items-center absolute rounded-md top-20 right-0 w-full z-20 bg-white text-black animate-slide-down"
                : "hidden lg:flex"
            }`}
          >
            <li className="py-2 lg:py-0 px-4 ">
              <a
                href="#home"
                className="font-bold text-xs uppercase transition-transform duration-300 hover:scale-105"
              >
                Home
              </a>
            </li>
            <li className="py-2 lg:py-0 px-4">
              <a
                href="#project"
                className="font-bold text-xs uppercase transition-transform duration-300 hover:scale-105"
              >
                Project
              </a>
            </li>
            <li className="py-2 lg:py-0 pl-4 pr-6">
              <a
                href="#about-me"
                className="font-bold text-xs uppercase transition-transform duration-300 hover:scale-105"
              >
                About Me
              </a>
            </li>
            <li className="py-2 lg:py-0">
              <a
                href="#get-in-touch"
                className="font-bold text-xs uppercase bg-white text-black p-2 rounded transition-transform duration-300 hover:scale-105"
              >
                Get in Touch→
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-navbar {
          background: linear-gradient(90deg, #53368a, #ca60b8, #3d9dc7);
          background-size: 300% 300%;
          animation: gradient-animation 6s ease infinite;
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;
