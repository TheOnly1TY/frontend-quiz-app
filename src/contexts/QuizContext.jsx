import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const BASE_URL = "http://localhost:3000/quizzes";

function QuizProvider({ children }) {
  const initialState = {
    questions: [],
  };
  const [{ questions }, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "fetchData":
        return { ...state, questions: action.payload };
    }
  }
  useEffect(() => {
    async function name() {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      dispatch({ type: "fetchData", payload: data });
    }
    name();
  }, []);
  return (
    <QuizContext.Provider value={(dispatch, questions)}>
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
