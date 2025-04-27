import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Theme() {
  const getTheme = () => {
    const theme = localStorage.getItem("Theme");
    return theme ? true : false;
  };
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    document.body.classList.toggle("dark", theme);
    localStorage.setItem("Theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (!prevTheme ? true : false));
  };
  return (
    <div className="flex justify-end items-center gap-2 lg:gap-4 py-4">
      <img
        src={theme ? "/images/icon-sun-light.svg" : "/images/icon-sun-dark.svg"}
        alt="sun_icon"
      />
      <label
        className="relative w-8 h-5 md:w-12 md:h-7 block bg-violet rounded-full cursor-pointer"
        onClick={handleThemeSwitch}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
          className={`absolute w-3 h-3 md:w-5 md:h-5 bg-white rounded-full m-1 ${
            !theme && "ml-4 md:ml-6"
          }`}
          role="circle"
        />
      </label>
      <img
        src={
          theme ? "/images/icon-moon-light.svg" : "/images/icon-moon-dark.svg"
        }
        alt="moon_icon"
      />
    </div>
  );
}
