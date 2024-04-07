"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import logo from "@/assets/interviewproLogo.png";
import star from "@/assets/Star.png";

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
    <main>
      <div className="px-10 py-5">
        {/* Header[Navbar] Starts */}
        <header className="bg-slate-950/5 p-5 rounded-xl shadow-lg">
          {/* SIDEBAR FOR TABLET AND MOBILE DEVICES STARTS */}
          <div className="lg:hidden drawer justify-start items-center pl-5">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                <GiHamburgerMenu className="w-7 h-7" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <div className="py-7">
                  {/* Toggle Theme Starts */}
                  <div className="flex gap-1 justify-start items-center">
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
                      {theme == "light" ? (
                        <MdDarkMode></MdDarkMode>
                      ) : (
                        <FiSun></FiSun>
                      )}
                    </div>
                  </div>
                  {/* Toggle Theme Ends */}
                </div>
                <div className="pb-7">
                  <span className="text-2xl md:text-4xl font-black before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
                    InterviewPro
                  </span>
                </div>
                <hr />
                <li>
                  <div className="py-7">
                    <h2 className="text-base md:text-lg font-bold flex items-center gap-1 hover:underline">
                      <FaGithub /> Github Login
                    </h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* SIDEBAR FOR TABLET AND MOBILE DEVICES ENDS */}

          <div className="hidden lg:flex justify-between items-center">
            {/* Navbar Start */}
            <div className="flex-1 flex justify-start items-center">
              <Image src={logo} width={54} height={54} alt="logo" />
              <span className="text-2xl md:text-4xl font-black before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
                InterviewPro
              </span>
            </div>

            {/* Navbar Ends */}
            <div className="flex-1 flex justify-end items-center gap-2">
              <div>
                <h2 className="font-semibold text-sm flex items-center gap-3 hover:underline uppercase">
                  Github Login <FaGithub className="w-9 h-9" />
                </h2>
              </div>
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
                  {theme == "light" ? (
                    <MdDarkMode></MdDarkMode>
                  ) : (
                    <FiSun></FiSun>
                  )}
                </div>
              </div>
              {/* Toggle Theme Ends */}
            </div>
          </div>
        </header>
        {/* Header[Navbar] Ends */}
        <div className="p-10 lg:p-20">
          {/* Title and Searchbar Starts */}
          <section>
            <div
              className="text-left flex items-center justify-start gap-2
          "
            >
              <span className="text-xl pb-8 font-bold">
                Web Development Interview Questions And Answers
              </span>
              <Image
                src={star}
                width={50}
                height={50}
                alt="star"
                className={theme === "light" ? "bg-black rounded-full" : ""}
              />
            </div>
            <div className="text-left">
              <span className="text-xl pb-8">Choose a Category:</span>
              <span></span>
            </div>

            <hr />
          </section>
          {/* Title and Searchbar Ends */}
          {/* QA Part Starts */}
          <section className="h-screen overflow-auto">
            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 mx-auto">
              QA is coming..
            </div>
          </section>
          {/* QA Part Ends */}
        </div>
      </div>
      {/* Footer Starts */}
      <footer className="bg-slate-950/10 py-7">
        <div className="text-center text-xs font-bold">
          @2024 - All rights reserved by team #4{" "}
        </div>
      </footer>
      {/* Footer Ends */}
    </main>
  );
}
