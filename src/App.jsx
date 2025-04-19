export default function App() {
  return (
    <section className="bg-[url(/public/images/pattern-background-desktop-light.svg)] bg-cloud  h-screen bg-center bg-cover bg-no-repeat ">
      <Home />
    </section>
  );
}

function Theme() {
  return (
    <div className="flex justify-end items-center gap-2 lg:gap-4">
      <img src="/images/icon-sun-dark.svg" />
      <label class="relative w-8 h-5 lg:w-12 lg:h-7 block bg-violet rounded-full cursor-pointer">
        <div class="absolute w-3 h-3 lg:w-5 lg:h-5 bg-white rounded-full m-1"></div>
      </label>
      <img src="/images/icon-moon-dark.svg" />
    </div>
  );
}
function Home() {
  return (
    <section className="max-w-[1160px] lg:mx-auto px-6 py-4">
      <Theme />
      <div className="flex flex-col lg:flex-row justify-between font-display mt-8">
        <div>
          <h1 className="max-w-[310px] lg:max-w-[470px] pb-4 lg:pb-12 text-[2.5rem] lg:text-[4rem] text-navy font-light leading-[100%]">
            Welcome to the{" "}
            <span className="font-medium lg:font-bold pt-2">
              Frontend Quiz!
            </span>
          </h1>
          <p className="text-sm lg:text-[1.25rem] text-steel italic pb-10 leading-[150%]">
            Pick a subject to get started.
          </p>
        </div>
        <Buttons />
      </div>
    </section>
  );
}

function Buttons() {
  return (
    <div className="flex flex-col gap-3 lg:gap-6">
      <button className="w-full lg:w-[564px] h-16 lg:h-24 bg-white flex items-center uppercase gap-4 lg:gap-8 p-3 lg:p-5 rounded-[12px] lg:rounded-3xl shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)]">
        <img src="/images/icon-html.svg" />
        html
      </button>
      <button className="w-full lg:w-[564px] h-16 lg:h-24 bg-white flex items-center uppercase gap-4 lg:gap-8 p-3 lg:p-5 rounded-[12px] lg:rounded-3xl shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)]">
        <img src="/images/icon-css.svg" />
        css
      </button>
      <button className="w-full lg:w-[564px] h-16 lg:h-24 bg-white flex items-center uppercase gap-4 lg:gap-8 p-3 lg:p-5 rounded-[12px] lg:rounded-3xl shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)]">
        <img src="/images/icon-js.svg" />
        javascript
      </button>
      <button className="w-full lg:w-[564px] h-16 lg:h-24 bg-white flex items-center uppercase gap-4 lg:gap-8 p-3 lg:p-5 rounded-[12px] lg:rounded-3xl shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)]">
        <img src="/images/icon-accessibility.svg" />
        accessibility
      </button>
    </div>
  );
}
