import { Header } from "../../components/Header";
import { QuizBody } from "./QuizBody";

export function QuizPage() {
  return (
    <section className="max-w-[72.5rem] md:mx-auto p-6 md:p-16 lg:px-4 pb-12 font-display">
      <Header />
      <QuizBody />
    </section>
  );
}
