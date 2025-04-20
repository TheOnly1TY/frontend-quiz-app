import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts/QuizContext";
import { CtaButton } from "../../components/CtaButton";

export function QuizBody() {
  const { selectedQuestion, currentQuestionindex } = useQuiz();
  const { questions } = selectedQuestion;
  return (
    <div
      className="grid lg:grid-cols-2 lg:py-16 md:mx-4 lg:mx-0 pb-12"
      role="quizContent"
    >
      <div className="lg:max-w-[465px]  flex flex-col">
        <div className="mr-auto">
          <p className="text-sm md:text-lg italic text-steel pb-3 pt-8 lg:pt-0 md:pb-[27px]">
            {` Question ${currentQuestionindex + 1} of ${questions.length}`}
          </p>
          <h3 className="text-xl md:text-4xl text-navy leading-[120%] font-medium">
            {questions[currentQuestionindex].question}
          </h3>
        </div>
        <progress
          className="mt-6 mb-10 lg:mt-40"
          max={questions.length}
          value={currentQuestionindex}
        />
      </div>
      <Options />
    </div>
  );
}
function Options() {
  const { selectedQuestion, dispatch, currentQuestionindex } = useQuiz();
  const { questions } = selectedQuestion;
  const currentOption = questions[currentQuestionindex].options;
  const navigate = useNavigate();
  function handleAnswer() {
    console.log(questions.length, currentQuestionindex);
    if (questions.length === currentQuestionindex + 1) {
      navigate("/result");
    } else {
      dispatch({ type: "nextQuestion" });
    }
  }

  return (
    <div className="lg:max-w-[564px]">
      <div className="grid gap-y-3 md:gap-y-6">
        {currentOption.map((option, index) => (
          <button
            key={option}
            className="group flex items-center w-full h-16 md:h-20 lg:h-[5.75rem] leading-[100%] p-3 lg:p-8 text-lg md:text-[28px] text-navy font-medium bg-white shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] rounded-[12px] lg:rounded-3xl cursor-pointer gap-x-4 md:gap-x-8"
          >
            <span className=" w-10 h-10 md:w-14 md:h-14 group-hover:text-violet group-hover:bg-[#F6E7FF] group-hover:duration-150 group-hover:ease-in-out text-steel bg-cloud flex justify-center items-center rounded-[6px] lg:rounded-[8px] md:rounded-[12px]">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
      <CtaButton callback={handleAnswer} message="Submit Answer" />
    </div>
  );
}
