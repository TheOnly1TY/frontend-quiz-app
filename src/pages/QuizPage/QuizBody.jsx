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
      <div className="lg:max-w-[465px] flex flex-col">
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
  const navigate = useNavigate();

  function handleAnswer() {
    if (questions.length !== currentQuestionindex + 1) {
      answer === null
        ? dispatch({ type: "warning" })
        : dispatch({ type: "hasAnswered" });
    } else {
      navigate("/result");
    }
  }

  function handleUserAnswer(answer) {
    dispatch({ type: "answer", payload: answer });
  }
  function getOptionClass(option) {
    console.log(option);
    if (!hasAnswered) {
      return option === answer ? "border-3 border-violet" : "";
    }

    if (option === currentQuestion.answer) {
      return "border-3 border-green z-10";
    }

    if (option === answer && option !== currentQuestion.answer) {
      return "border-3 border-red z-10";
    }

    return "";
  }

  function handleNextQuestion() {
    dispatch({ type: "nextQuestion" });
  }
  return (
    <div className="lg:max-w-[564px]">
      <div className="grid gap-y-3 md:gap-y-6">
        {currentQuestion.options.map((option, index) => (
          <button
            onClick={() => handleUserAnswer(option)}
            disabled={hasAnswered}
            key={option}
            className={`group flex items-center justify-between w-full h-16 md:h-20 lg:h-[5.75rem] leading-[100%] p-3 lg:p-8 text-lg md:text-[28px] text-navy font-medium bg-white shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] rounded-[12px] lg:rounded-3xl gap-x-4 md:gap-x-8
              ${getOptionClass(option)}
              ${hasAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            <div className="flex items-center gap-x-3 lg:gap-x-5">
              <span
                className={`w-10 h-10 md:w-14 md:h-14 flex justify-center items-center rounded-[6px] lg:rounded-[8px] md:rounded-[12px] ${
                  hasAnswered
                    ? option === currentQuestion.answer
                      ? "bg-green text-white"
                      : option === answer && option !== currentQuestion.answer
                      ? "bg-red text-white"
                      : "bg-cloud text-steel"
                    : option === answer
                    ? "bg-violet text-white"
                    : "bg-cloud text-steel group-hover:text-violet group-hover:bg-[#F6E7FF]"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </div>
            <figure className="">
              {hasAnswered ? (
                option === currentQuestion.answer ? (
                  <img src="/images/icon-correct.svg" />
                ) : option === answer && option !== currentQuestion.answer ? (
                  <img src="/images/icon-error.svg" />
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
        <CtaButton callback={handleAnswer} message="Submit Answer" />
      ) : (
        <CtaButton callback={handleNextQuestion} message="Next Question" />
      )}

      {isAnsweredSelected && (
        <p className="flex items-center justify-center text-2xl text-red font-normal font-display gap-2">
          <img src="/images/icon-error.svg" />
          Please select an answer
        </p>
      )}
    </div>
  );
}
