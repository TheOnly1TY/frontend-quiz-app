import { Header } from "../../components/Header";
import { Result } from "./Result";

export function ResultPage() {
  return (
    <section className="max-w-[72.5rem] md:mx-auto p-6 md:p-16 lg:px-4 pb-12 font-display">
      <Header />
      <Result />
    </section>
  );
}
