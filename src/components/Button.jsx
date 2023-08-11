export function Button({ props, className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`${className} w-full rounded-full font-[700] h-14 text-white text-xl py-2 bg-primarycyan hover:bg-[#9BE3E2] transition-all duration-150 hover:text-[#E8F7FF]`}
    >
      {children}
    </button>
  );
}
