import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { QuizPage } from "./pages/QuizPage/QuizPage";
import { ResultPage } from "./pages/Result/ResultPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );

  function AnimatedRoutes() {
    const location = useLocation();

    return (
      <section className="bg-[url(/images/pattern-background-mobile-light.svg)] md:bg-[url(/images/pattern-background-tablet-light.svg)] lg:bg-[url(/images/pattern-background-desktop-light.svg)] dark:bg-[url(/images/pattern-background-mobile-dark.svg)] dark:md:bg-[url(/images/pattern-background-tablet-dark.svg)] dark:lg:bg-[url(/images/pattern-background-desktop-dark.svg)] bg-cloud dark:bg-navy  min-h-screen bg-center bg-cover bg-no-repeat transition-all duration-200 ease-in-out">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
      </section>
    );
  }
}
