import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const BASE_URL = "http://localhost:3000/quizzes";

function QuizProvider({ children }) {
  const initialState = {
    allQuestions: [],
    selectedQuestion: [],
    answer: null,
    currentQuestionindex: 0,
    isAnsweredSelected: false,
    hasAnswered: false,
    isSubmitted: false,
  };
  const [
    {
      allQuestions,
      selectedQuestion,
      currentQuestionindex,
      answer,
      isAnsweredSelected,
      hasAnswered,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "fetchQuestions":
        return { ...state, allQuestions: action.payload };
      case "selectedQuestion":
        return { ...state, selectedQuestion: action.payload };
      case "hasAnswered":
        return {
          ...state,
          hasAnswered: state.answer !== null,
          isSubmitted: true,
        };
      case "nextQuestion":
        return {
          ...state,
          answer: null,
          hasAnswered: false,
          isAnsweredSelected: false,
          currentQuestionindex: state.currentQuestionindex + 1,
        };
      case "warning":
        return {
          ...state,
          isAnsweredSelected: true,
        };
      case "answer":
        return { ...state, isAnsweredSelected: false, answer: action.payload };
      default:
        throw new Error("Action unknown");
    }
  }

  const bgColors = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };
  useEffect(() => {
    async function name() {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        dispatch({ type: "fetchQuestions", payload: data });
      } catch (error) {
        console.error(error.message);
      }
    }
    name();
  }, []);
  return (
    <QuizContext.Provider
      value={{
        dispatch,
        allQuestions,
        selectedQuestion,
        bgColors,
        currentQuestionindex,
        answer,
        isAnsweredSelected,
        hasAnswered,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Quiz Context must be used within a Quiz Provider");
  return context;
}

export { QuizProvider, useQuiz };
