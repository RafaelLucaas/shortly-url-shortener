export function CardInfo({ title, text, icon }) {
  return (
    <div className="shadow-sm w-80">
      <div className="relative flex flex-col items-center px-10 pb-8 bg-white rounded-lg h-[236px]">
        <div className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-primarydarkviolet text-primarycyan -top-10">
          {icon}
        </div>
        <div className="mt-16 text-center">
          <span className="text-xl font-[700] text-neutralverydarkblue">
            {title}
          </span>
          <p className="text-sm font-[500] text-neutralgray mt-3">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
