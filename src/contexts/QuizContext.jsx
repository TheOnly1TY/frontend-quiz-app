import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const BASE_URL = "http://localhost:3000/quizzes";

function QuizProvider({ children }) {
  const initialState = {
    allQuestions: [],
    selectedQuestion: [],
    currentQuestionindex: 0,
  };
  const [{ allQuestions, selectedQuestion, currentQuestionindex }, dispatch] =
    useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "fetchQuestions":
        return { ...state, allQuestions: action.payload };
      case "selectedQuestion":
        return { ...state, selectedQuestion: action.payload };
      case "nextQuestion":
        return {
          ...state,
          currentQuestionindex: state.currentQuestionindex + 1,
        };
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
      const res = await fetch(BASE_URL);
      const data = await res.json();
      dispatch({ type: "fetchQuestions", payload: data });
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
