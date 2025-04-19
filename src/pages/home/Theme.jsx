export function Theme() {
  return (
    <div className="flex justify-end items-center gap-2 lg:gap-4 py-4">
      <img src="/images/icon-sun-dark.svg" alt="sun_icon" />
      <label className="relative w-8 h-5 md:w-12 md:h-7 block bg-violet rounded-full cursor-pointer">
        <div className="absolute w-3 h-3 md:w-5 md:h-5 bg-white rounded-full m-1"></div>
      </label>
      <img src="/images/icon-moon-dark.svg" alt="moon_icon" />
    </div>
  );
}
