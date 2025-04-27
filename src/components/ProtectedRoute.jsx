import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../contexts/QuizContext";

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { selectedQuestion } = useQuiz();
  useEffect(
    function () {
      if (selectedQuestion.length === 0) navigate("/");
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = "";
      };
      const handlePopState = () => {
        const confirmLeave = window.confirm(
          "Are you sure you want to end the quiz?"
        );
        if (confirmLeave) {
          navigate("", { replace: true });
        } else {
          history.pushState(null, null, location.href);
        }
      };
      history.pushState(null, null, location.href);
      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.removeEventListener("popstate", handlePopState);
      };
    },
    [selectedQuestion, navigate]
  );
  return selectedQuestion.length === 0 ? null : children;
}
