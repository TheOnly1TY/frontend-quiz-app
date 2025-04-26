import { useNavigate } from "react-router-dom";
import { CtaButton } from "../../components/CtaButton";
import { useQuiz } from "../../contexts/QuizContext";

export function Options() {
  const {
    selectedQuestion,
    dispatch,
    currentQuestionindex,
    answer,
    isAnsweredSelected,
    hasAnswered,
  } = useQuiz();
  const { questions } = selectedQuestion;
  const currentQuestion = questions[currentQuestionindex];
  const isLastQuestion = currentQuestionindex === questions.length - 1;
  const navigate = useNavigate();

  const handleSubmitAnswer = () => {
    answer === null
      ? dispatch({ type: "warning" })
      : dispatch({ type: "hasAnswered", payload: currentQuestion });
  };

  const handleFinishQuiz = () => {
    dispatch({ type: "finishQuiz", payload: currentQuestion });
    navigate("/result");
  };

  const handleUserAnswer = (answer) => {
    dispatch({ type: "answer", payload: answer });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "nextQuestion" });
  };

  const getOptionClass = (option) => {
    if (!hasAnswered) {
      return option === answer ? "border-3 border-violet " : "";
    }

    if (option === currentQuestion.answer) {
      return "border-3 border-green z-10";
    }

    if (option === answer && option !== currentQuestion.answer) {
      return "border-3 border-red z-10";
    }

    return "";
  };

  return (
    <div className="lg:max-w-[564px]">
      <div className="grid gap-y-3 md:gap-y-6">
        {currentQuestion.options.map((option, index) => (
          <button
            onClick={() => handleUserAnswer(option)}
            disabled={hasAnswered}
            key={option}
            className={` group flex items-center justify-between w-full min-h-16 md:h-20 lg:h-[5.75rem] leading-[100%] p-3 lg:p-8 text-lg md:text-[28px] text-navy dark:text-white font-medium bg-white dark:bg-slate shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)] rounded-[12px] lg:rounded-3xl gap-x-4 md:gap-x-8 
                ${getOptionClass(option)}
                ${hasAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            <div className="flex items-center  gap-x-3 lg:gap-x-5">
              <span
                className={`min-w-10 min-h-10 md:min-w-14 md:min-h-14 flex justify-center items-center rounded-[6px] lg:rounded-[8px] md:rounded-[12px] transition-all duration-150 ease-in-out ${
                  hasAnswered
                    ? option === currentQuestion.answer
                      ? "bg-green text-white"
                      : option === answer && option !== currentQuestion.answer
                      ? "bg-red text-white"
                      : "bg-cloud text-steel"
                    : option === answer
                    ? "bg-violet text-white"
                    : "bg-cloud  text-steel group-hover:text-violet group-hover:bg-[#F6E7FF]"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </div>
            <figure>
              {hasAnswered ? (
                option === currentQuestion.answer ? (
                  <img
                    src="/images/icon-correct.svg"
                    className="max-w-10"
                    alt="correct_icon"
                  />
                ) : option === answer && option !== currentQuestion.answer ? (
                  <img
                    src="/images/icon-error.svg"
                    className="max-w-10"
                    alt="wrong_icon"
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </figure>
          </button>
        ))}
      </div>

      {!hasAnswered ? (
        <CtaButton callback={handleSubmitAnswer} message="Submit Answer" />
      ) : isLastQuestion ? (
        <CtaButton callback={handleFinishQuiz} message="Submit Quiz" />
      ) : (
        <CtaButton callback={handleNextQuestion} message="Next Question" />
      )}

      {isAnsweredSelected && (
        <p className="flex items-center justify-center text-2xl text-red dark:text-white font-normal font-display gap-2">
          <img src="/images/icon-error.svg" />
          Please select an answer
        </p>
      )}
    </div>
  );
}
