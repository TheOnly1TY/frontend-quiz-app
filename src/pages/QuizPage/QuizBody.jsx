export function QuizBody() {
  return (
    <div
      className="grid lg:grid-cols-2 lg:py-16 md:mx-4 lg:mx-0 pb-12"
      role="quizContent"
    >
      <div className="lg:max-w-[465px]  flex flex-col">
        <div className="mr-auto">
          <p className="text-sm md:text-lg italic text-steel pb-3 pt-8 lg:pt-0 md:pb-[27px]">
            Question 6 of 10
          </p>
          <h3 className="text-xl md:text-4xl text-navy leading-[120%] font-medium">
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
          </h3>
        </div>
        <progress className="mt-6 mb-10 lg:mt-40" max={10} value={6} />
      </div>
      <div className="lg:max-w-[564px]">
        <div className="grid gap-y-3 md:gap-y-6">
          <button className="group flex items-center w-full h-16 md:h-20 lg:h-[5.75rem] p-3 lg:p-8 text-lg md:text-[28px] text-navy font-medium bg-white shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] rounded-[12px] lg:rounded-3xl cursor-pointer gap-x-4 md:gap-x-8">
            <span className="group-hover:text-violet group-hover:bg-[#F6E7FF] group-hover:duration-150 group-hover:ease-in-out text-steel bg-cloud flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-[6px] lg:rounded-[8px] md:rounded-[12px]">
              A
            </span>
            4.5 : 1
          </button>
          <button className="group flex items-center w-full h-16 md:h-20 lg:h-[5.75rem] p-3 lg:p-8 text-lg md:text-[28px] text-navy font-medium bg-white shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] rounded-[12px] lg:rounded-3xl cursor-pointer gap-x-4 md:gap-x-8">
            <span className="group-hover:text-violet group-hover:bg-[#F6E7FF] group-hover:duration-150 group-hover:ease-in-out text-steel bg-cloud flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-[6px] lg:rounded-[8px] md:rounded-[12px]">
              B
            </span>{" "}
            3 : 1
          </button>
          <button className="group flex items-center w-full h-16 md:h-20 lg:h-[5.75rem] p-3 lg:p-8 text-lg md:text-[28px] text-navy font-medium bg-white shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] rounded-[12px] lg:rounded-3xl cursor-pointer gap-x-4 md:gap-x-8">
            <span className="group-hover:text-violet group-hover:bg-[#F6E7FF] group-hover:duration-150 group-hover:ease-in-out text-steel bg-cloud flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-[6px] lg:rounded-[8px] md:rounded-[12px]">
              C
            </span>
            2.5 : 1
          </button>
          <button className="group flex items-center w-full h-16 md:h-20 lg:h-[5.75rem] p-3 lg:p-8 text-lg md:text-[28px] text-navy font-medium bg-white shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] rounded-[12px] lg:rounded-3xl cursor-pointer gap-x-4 md:gap-x-8">
            <span className="group-hover:text-violet group-hover:bg-[#F6E7FF] group-hover:duration-150 group-hover:ease-in-out text-steel bg-cloud flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-[6px] lg:rounded-[8px] md:rounded-[12px]">
              D
            </span>{" "}
            5 : 1
          </button>
        </div>
        <button className="flex justify-center items-center w-full h-14 md:h-[92px] mt-3 md:mt-8 p-3 md:p-8 text-sm md:text-[28px] text-white font-medium bg-violet hover:bg-[#d394fa] hover:ease-in-out hover:transition-all shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] rounded-[12px] md:rounded-3xl cursor-pointer">
          Submit Answer
        </button>
      </div>
    </div>
  );
}
