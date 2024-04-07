"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const html = document.documentElement;
    if (theme === "light") {
      html.setAttribute("data-theme", "dark");
      html.classList.remove("light");
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
      html.classList.remove("dark");
      html.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    // console.log("Previous Theme:", theme);
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme") || "light";
    setTheme(localStorageTheme);
    const html = document.documentElement;
    html.setAttribute("data-theme", localStorageTheme);
    html.classList.add(localStorageTheme);
    // console.log("Local Storage Theme:", localStorageTheme);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"
        rel="noopener noreferrer"
      >
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold flex items-center gap-2`}>
            Login with <FaGithub /> Github
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* Toggle Theme Starts */}
          <div className="flex gap-1 justify-between items-center">
            <div
              onClick={toggleTheme}
              className={`p-1 my-1 rounded-2xl ${
                theme === "light" ? "bg-black" : "bg-white"
              }`}
            >
              <div
                className={`mr-3 rounded-full shadow-2xl w-3 h-3 bg-black ${
                  theme === "light" ? "hidden" : ""
                }`}
              ></div>
              <div
                className={`ml-3 rounded-full shadow-2xl w-3 h-3 bg-white ${
                  theme === "dark" ? "hidden" : ""
                }`}
              ></div>
            </div>
            <div>
              {theme == "light" ? <MdDarkMode></MdDarkMode> : <FiSun></FiSun>}
            </div>
          </div>
          {/* Toggle Theme Ends */}
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <span className="text=5xl md:text-7xl font-black">InterviewPro</span>
      </div>

      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 mx-auto">
        QA is coming..
      </div>
    </main>
  );
}
