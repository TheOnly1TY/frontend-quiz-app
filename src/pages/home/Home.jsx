import { Buttons } from "./Buttons";
import { Theme } from "../../components/Theme";
import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className="max-w-[72.5rem] md:mx-auto p-6 md:p-16 lg:px-4 pb-12"
    >
      <Theme />
      <div className="flex flex-col lg:flex-row justify-between font-display mt-8 lg:mt-12 lg:gap-2">
        <div className="max-w-[19.375rem] md:max-w-[29.375rem]">
          <h1 className=" pb-4 md:pb-12 text-[2.5rem] md:text-[4rem] text-navy dark:text-white font-light leading-[100%]">
            Welcome to the{" "}
            <span className="font-medium \ lg:font-bold pt-2">
              Frontend Quiz!
            </span>
          </h1>
          <p className="text-sm md:text-[1.25rem] text-steel dark:text-mist italic pb-10 leading-[150%]">
            Pick a subject to get started.
          </p>
        </div>
        <Buttons />
      </div>
    </motion.section>
  );
}
