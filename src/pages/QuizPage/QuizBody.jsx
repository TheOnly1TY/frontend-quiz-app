import { useQuiz } from "../../contexts/QuizContext";
import { Options } from "./Options";
import { motion } from "motion/react";

export function QuizBody() {
  const { selectedQuestion, currentQuestionindex, points } = useQuiz();
  const { questions } = selectedQuestion;

  return (
    <motion.div
      key={currentQuestionindex}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
      className={`grid lg:grid-cols-2 lg:py-16 md:mx-4 lg:mx-0 pb-12 transition-opacity duration-500`}
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
          className="w-full h-3 col-span-full  mt-6 mb-10 lg:mt-40"
          max={questions.length}
          value={points}
        />
      </div>
      <Options />
    </motion.div>
  );
}
