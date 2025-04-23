import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts/QuizContext";

export function Buttons() {
  const { allQuestions, bgColors, dispatch } = useQuiz();
  const navigate = useNavigate();

  function handleToggle(i) {
    dispatch({ type: "selectedQuestion", payload: allQuestions[i] });
    navigate("/quiz");
  }
  return (
    <div className="flex flex-col gap-3 md:gap-6">
      {allQuestions.map((question, index) => (
        <button
          onClick={() => handleToggle(index)}
          key={index}
          className="w-full lg:w-[564px] h-16 md:h-20 lg:h-24 text-lg md:text-[1.75rem] font-medium text-navy dark:text-white bg-white dark:bg-slate flex items-center uppercase gap-4 lg:gap-8 p-3 lg:p-5 rounded-[0.75rem] shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] dark:shadow-[0px_16px_40px_0px_rgba(49,62,81,0.14)] lg:rounded-3xl cursor-pointer"
        >
          <figure
            style={{ backgroundColor: bgColors[question.title] }}
            className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-[9px] md:rounded-[12px]"
          >
            <img
              src={question.icon}
              className="w-[28.57px] h-[28.57px] md:w-10 md:h-10"
            />
          </figure>

          {question.title}
        </button>
      ))}
    </div>
  );
}
