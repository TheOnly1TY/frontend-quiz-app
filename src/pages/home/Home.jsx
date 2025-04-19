import { Buttons } from "./Buttons";
import { Theme } from "./Theme";

export function Home() {
  return (
    <section className="max-w-[1160px] md:mx-auto p-6 md:p-16 lg:px-4 pb-12">
      <Theme />
      <div className="flex flex-col lg:flex-row justify-between font-display mt-8 lg:mt-12 lg:gap-2">
        <div className="max-w-[310px] md:max-w-[470px]">
          <h1 className=" pb-4 md:pb-12 text-[2.5rem] md:text-[4rem] text-navy font-light leading-[100%]">
            Welcome to the{" "}
            <span className="font-medium lg:font-bold pt-2">
              Frontend Quiz!
            </span>
          </h1>
          <p className="text-sm md:text-[1.25rem] text-steel italic pb-10 leading-[150%]">
            Pick a subject to get started.
          </p>
        </div>
        <Buttons />
      </div>
    </section>
  );
}
