import React, { useState } from "react";
import { useEffect } from "react";
import lightImg from "../../assets/toggler/moon.png";
import darkImg from "../../assets/toggler/moon (1).png";

const DarkMode = () => {
  const [theme, setTheme] = useState("null");

  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setStateChange(!stateChange);
  };

  return (
    <button className=" " onClick={handleThemeSwitch}>
      {stateChange ? (
        <img className="w-8" src={darkImg} alt="Dark Theme" />
      ) : (
        <img className="w-8 dark:bg-white" src={lightImg} alt="Light Theme" />
      )}
    </button>
  );
};
export default DarkMode;
