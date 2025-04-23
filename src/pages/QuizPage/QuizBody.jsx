import { useQuiz } from "../../contexts/QuizContext";
import { Options } from "./Options";

export function QuizBody() {
  const { selectedQuestion, currentQuestionindex, points } = useQuiz();
  const { questions } = selectedQuestion;
  return (
    <div
      className="grid lg:grid-cols-2 lg:py-16 md:mx-4 lg:mx-0 pb-12"
      role="quizContent"
    >
      <div className="lg:max-w-[465px] flex flex-col">
        <div className="mr-auto">
          <p className="text-sm md:text-lg italic text-steel dark:text-mist pb-3 pt-8 lg:pt-0 md:pb-[27px]">
            {` Question ${currentQuestionindex + 1} of ${questions.length}`}
          </p>
          <h3 className="text-xl md:text-4xl text-navy dark:text-white leading-[120%] font-medium">
            {questions[currentQuestionindex].question}
          </h3>
        </div>
        <progress
          className="w-full h-3 col-span-full [&::-webkit-progress-bar]:bg-white dark:[&::-webkit-progress-bar]:bg-slate [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:p-1 [&::-webkit-progress-value]:bg-[#a729f5] [&::-webkit-progress-value]:rounded-full mt-6 mb-10 lg:mt-40"
          max={questions.length}
          value={points}
        />
      </div>
      <Options />
    </div>
  );
}
