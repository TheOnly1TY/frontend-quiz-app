import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

function QuizProvider({ children }) {
  const initialState = {
    allQuestions: [],
    selectedQuestion: [],
    answer: null,
    currentQuestionindex: 0,
    isAnsweredSelected: false,
    hasAnswered: false,
    points: 0,
  };

  const [
    {
      allQuestions,
      selectedQuestion,
      currentQuestionindex,
      answer,
      isAnsweredSelected,
      hasAnswered,
      points,
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
          points:
            action.payload.answer === state.answer
              ? state.points + 1
              : state.points,
        };
      case "finishQuiz":
        return {
          ...state,
          hasAnswered: state.answer !== null,
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

      case "restart":
        return { ...initialState, allQuestions: state.allQuestions };
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
    async function fetchQuestions() {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        dispatch({ type: "fetchQuestions", payload: data });
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchQuestions();
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
        points,
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
