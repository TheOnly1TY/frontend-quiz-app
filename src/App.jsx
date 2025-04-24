import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { QuizPage } from "./pages/QuizPage/QuizPage";
import { ResultPage } from "./pages/Result/ResultPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  return (
    <section className="bg-[url(/images/pattern-background-mobile-light.svg)] md:bg-[url(/images/pattern-background-tablet-light.svg)] lg:bg-[url(/images/pattern-background-desktop-light.svg)] dark:bg-[url(/images/pattern-background-mobile-dark.svg)] dark:md:bg-[url(/images/pattern-background-tablet-dark.svg)] dark:lg:bg-[url(/images/pattern-background-desktop-dark.svg)] bg-cloud dark:bg-navy  min-h-screen bg-center bg-cover bg-no-repeat transition-all duration-200 ease-in-out">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <QuizPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <ResultPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </section>
  );
}
