import { useNavigate } from "react-router-dom";
import { CtaButton } from "../../components/CtaButton";
import { Header } from "../../components/Header";
import { useQuiz } from "../../contexts/QuizContext";

export function ResultPage() {
  return (
    <section className="max-w-[72.5rem] md:mx-auto p-6 md:p-16 lg:px-4 pb-12 font-display">
      <Header />
      <Result />
    </section>
  );
}

function Result() {
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
          <h1 className=" pb-4 md:pb-12 text-[2.5rem] md:text-[4rem] text-navy font-light leading-[100%]">
            Quiz completed{" "}
            <span className="font-medium lg:font-bold pt-2">You Scored...</span>
          </h1>
        </div>
        <div className="lg:max-w-[564px] w-full">
          <div className="h-[242px] md:h-[388px] bg-white shadow-default p-8 md:p-12 rounded-3xl ">
            <div className="flex justify-center items-center font-medium text-sm md:text-[28px] text-navy uppercase gap-4 md:gap-6 mb-4 md:mb-10">
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
            <h2 className="flex justify-center items-center flex-col gap-y-4 text-[144px] text-navy font-medium leading-[100%]">
              {points}
              <span className="text-2xl text-steel leading-[150%] font-normal">
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
