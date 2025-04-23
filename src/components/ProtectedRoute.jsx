import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../contexts/QuizContext";

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { selectedQuestion } = useQuiz();
  useEffect(
    function () {
      if (selectedQuestion.length === 0) navigate("/");
    },
    [selectedQuestion, navigate]
  );
  return selectedQuestion.length === 0 ? null : children;
}
