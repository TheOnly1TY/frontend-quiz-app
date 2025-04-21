export function CtaButton({ callback, message }) {
  return (
    <button
      onClick={() => callback()}
      className="flex justify-center items-center w-full h-14 md:h-[92px] my-3 md:my-8 p-3 md:p-8 text-sm md:text-[28px] text-white font-medium bg-violet hover:bg-[#d394fa] hover:ease-in-out hover:transition-all shadow-[0px_16px_40px_0px_rgba(143,16,0,193,0.14)] rounded-[12px] md:rounded-3xl cursor-pointer"
    >
      {message}
    </button>
  );
}
