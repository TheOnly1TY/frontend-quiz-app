import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { QuizPage } from "./pages/QuizPage/QuizPage";
import { ResultPage } from "./pages/Result/ResultPage";

export default function App() {
  return (
    <section className="bg-[url(/images/pattern-background-mobile-light.svg)] md:bg-[url(/images/pattern-background-tablet-light.svg)] lg:bg-[url(/images/pattern-background-desktop-light.svg)] bg-cloud  min-h-screen bg-center bg-cover bg-no-repeat ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}
