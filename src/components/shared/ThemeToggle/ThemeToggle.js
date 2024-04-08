"use client";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";

import { MdDarkMode } from "react-icons/md";
const ThemeToggle = () => {
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
    <div>
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
    </div>
  );
};

export default ThemeToggle;
