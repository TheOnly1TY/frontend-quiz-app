import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts/QuizContext";
import { CtaButton } from "../../components/CtaButton";

export function Result() {
  const navigate = useNavigate();
  const { selectedQuestion, bgColors, points, dispatch } = useQuiz();
  const { title, icon } = selectedQuestion;

  function handlePlayAgain() {
    navigate("/");
    dispatch({ type: "restart" });
  }
  return (
    <section className=" md:mx-auto pb-12 font-display">
      <div className="flex flex-col lg:flex-row justify-between font-display mt-8 lg:mt-12 lg:gap-2">
        <div className="max-w-[19.375rem] md:max-w-[29.375rem]">
          <h1 className=" pb-4 md:pb-12 text-[2.5rem] md:text-[4rem] text-navy dark:text-white font-light leading-[100%]">
            Quiz completed{" "}
            <span className="font-medium lg:font-bold pt-2">You Scored...</span>
          </h1>
        </div>
        <div className="lg:max-w-[564px] w-full">
          <div className="h-[327px] md:h-[640px] lg:h-[388px] bg-white dark:bg-slate shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)] p-8 md:p-12 rounded-3xl ">
            <div className="flex justify-center items-center font-medium text-sm md:text-[28px] text-navy dark:text-white uppercase gap-4 md:gap-6 mb-4 md:mb-10">
              <figure
                style={{ backgroundColor: bgColors[title] }}
                className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14  rounded-[9px] md:rounded-[0.75rem]"
              >
                <img
                  src={icon}
                  className="w-[28.57px] h-[28.57px] md:w-10 md:h-10"
                />
              </figure>
              {title}
            </div>
            <h2 className="flex justify-center items-center flex-col gap-y-4 text-[144px] text-navy dark:text-white font-medium leading-[100%]">
              {points}
              <span className="text-2xl text-steel dark:text-mist leading-[150%] font-normal">
                out of {selectedQuestion.questions.length}
              </span>
            </h2>
          </div>
          <CtaButton callback={handlePlayAgain} message="Play Again" />
        </div>
      </div>
    </section>
  );
}
