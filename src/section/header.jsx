import React, { useState, useEffect } from "react";

function Header() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const name = "Ruffa Mae Arañez";

  useEffect(() => {
    const typingEffect = setInterval(
      () => {
        if (!isDeleting) {
          if (text.length < name.length) {
            setText(name.substring(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          if (text.length > 0) {
            setText(name.substring(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setLoopIndex((prev) => prev + 1);
          }
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearInterval(typingEffect);
  }, [text, isDeleting]);

  return (
    <>
      <header
        className="header text-white py-[17.5rem] px-6 text-center animate-background fade-in"
        style={{
          backgroundImage: "url('/src/images/bg-header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "-4rem",
        }}
        id="home"
      >
        <div className="max-w-5xl mx-auto">
          {/* Title with Typing Effect */}
          <h1 className="font-jersey font-extrabold text-3xl lg:text-[90px] lg:mt-[4rem] mt-16 scale-up">
            Hi, I'm{" "}
            <span className="pl-2 uppercase underline text-[#3D9DC7]">
              {text}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>

          <p className="text-sm lg:text-xl mb-8 lg:mt-2">
            A designer and developer who loves turning ideas into reality
            through code. I specialize in creating visually appealing and
            functional solutions that blend creativity with technology.
          </p>

          <a
            href="#get-in-touch"
            className="bg-gradient-to-r from-[#53368A] to-[#CA60B8] text-[15px] lg:text-[20px] text-white uppercase font-bold py-3 px-8 rounded-2xl shadow-lg font-jersey transition-all duration-300 hover:scale-105"
          >
            GET IN TOUCH→
          </a>
        </div>
      </header>

      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 10px;
          height: 1em;
          background-color: #3d9dc7;
          animation: blink 0.7s step-start infinite;
        }

        @keyframes blink {
          50% {
            background-color: transparent;
          }
        }

        /* Background animation */
        @keyframes background-animation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .animate-background {
          animation: background-animation 20s ease infinite;
        }

        /* Fade-in effect */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 2s ease-out;
        }

        /* Scale effect for title */
        @keyframes scaleUp {
          0% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        .scale-up {
          animation: scaleUp 1s ease-out;
        }
      `}</style>
    </>
  );
}

export default Header;
