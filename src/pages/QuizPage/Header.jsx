import { Theme } from "../../components/Theme";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-center items-center font-medium text-sm md:text-[28px] text-navy uppercase gap-4 md:gap-6">
        <figure className="flex justify-center items-center w-10 h-10 md:w-14 md:h-14 bg-[#F6E7FF] rounded-[9px] md:rounded-[0.75rem]">
          <img
            src="/images/icon-accessibility.svg"
            className="w-[28.57px] h-[28.57px] md:w-10 md:h-10"
          />
        </figure>
        accessibility
      </div>
      <Theme />
    </header>
  );
}
