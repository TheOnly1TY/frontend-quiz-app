import { Theme } from "./Theme";
import { useQuiz } from "../contexts/QuizContext";

export function Header() {
  const { selectedQuestion, bgColors } = useQuiz();
  const { title, icon } = selectedQuestion;
  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-center items-center font-medium text-sm md:text-[28px] text-navy uppercase gap-4 md:gap-6">
        <figure
          style={{ backgroundColor: bgColors[title] }}
          className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14  rounded-[9px] md:rounded-[0.75rem]"
        >
          <img src={icon} className="w-[28.57px] h-[28.57px] md:w-10 md:h-10" />
        </figure>
        {title}
      </div>
      <Theme />
    </header>
  );
}
