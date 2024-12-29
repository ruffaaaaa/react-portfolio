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
        className="header text-white pt-[17.5rem] pb-[17rem] px-6 justify-center text-center animate-background"
        style={{
          backgroundImage: "url('/images/bg-header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "-4rem",
          height: "100vh",
        }}
        id="home"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="font-jersey font-extrabold text-[35px] lg:text-[90px] lg:mt-[4rem] mt-16">
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
            className="bg-gradient-to-r from-[#53368A] to-[#CA60B8] text-[15px] lg:text-[25px] text-xl text-white uppercase  py-3 px-8 rounded-2xl shadow-lg font-jersey transition-all duration-300 hover:scale-105"
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

        /* Horizontal background animation */
        @keyframes background-animation {
          0% {
            background-position: 0% 60%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-background {
          animation: background-animation 20s ease infinite;
          background-size: 120% 120%; /* Scale the background to make movement visible */
        }
      `}</style>
    </>
  );
}

export default Header;
