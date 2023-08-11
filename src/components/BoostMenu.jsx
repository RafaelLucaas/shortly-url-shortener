import Link from "next/link";
import { Button } from "./Button";

export function BoostMenu() {
  return (
    <div className="h-72 flex items-center justify-center bg-primarydarkviolet bg-[url('./../../public/bg-boost-mobile.svg')] bg-no-repeat bg-right lg:bg-[url('./../../public/bg-boost-desktop.svg')] lg:bg-cover">
      <div className="flex flex-col items-center">
        <span className="text-white text-[27px] font-[700] text-center">
          Boost your links today
        </span>
        <div className="w-48 mt-4">
          <Link href="#">
            <Button type="button">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
