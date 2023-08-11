"use client";

import Image from "next/image";
import Link from "next/link";
import { BsList, BsXLg } from "react-icons/bs";
import { Button } from "./Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const [changeShowNavButton, setChangeShowNavButton] = useState(false);

  const btnShowNavMobile = () => {
    setShowNavMobile(!showNavMobile);
    setChangeShowNavButton(!changeShowNavButton);
  };

  return (
    <header>
      <div className="flex items-center justify-around pb-5 pt-9 max-lg:px-5 max-lg:justify-between">
        <div className="flex items-center h-8">
          <Link href="/">
            <Image
              priority={true}
              src="logo.svg"
              width="140"
              height="36"
              alt="Shortly logo"
              className="w-auto h-auto"
            />
          </Link>
          <nav className="flex justify-between ml-14 max-lg:hidden">
            <div>
              <ul className="flex items-center gap-9 text-gray-400 font-[700] py-10 text-xl">
                <Link
                  href="#"
                  className="transition-all duration-150 hover:text-gray-700"
                >
                  <li>Features</li>
                </Link>
                <Link
                  href="#"
                  className="transition-all duration-150 hover:text-gray-700"
                >
                  <li>Pricing</li>
                </Link>
                <Link
                  href="#"
                  className="transition-all duration-150 hover:text-gray-700"
                >
                  <li>Resources</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex items-center w-64 gap-9 max-lg:hidden">
          <Link
            href="#"
            className="text-gray-400 font-[700] text-xl transition-all duration-150 hover:text-gray-700"
          >
            Login
          </Link>
          <Button type="button">Sign Up</Button>
        </div>
        <div className="items-center justify-center hidden w-12 h-12 max-lg:flex">
          <button onClick={btnShowNavMobile}>
            <AnimatePresence mode="wait">
              <motion.div
                key={changeShowNavButton ? "close" : "open"}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.1 }}
              >
                {changeShowNavButton
                  ? <BsXLg className="w-10 h-10 text-gray-400" />
                  : <BsList className="w-12 h-12 text-gray-400" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showNavMobile &&
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0, translateY: -40 },
              animate: { translateY: 0, opacity: 1 },
              exit: { opacity: 0, translateY: -40 }
            }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 w-full px-6"
          >
            <nav className="flex flex-col items-center justify-center w-full px-6 text-center rounded-lg bg-primarydarkviolet">
              <div>
                <ul className="flex flex-col gap-7 text-white font-[700] py-10 text-xl">
                  <Link
                    href="#"
                    className="transition-all duration-150 hover:brightness-75"
                  >
                    <li>Features</li>
                  </Link>
                  <Link
                    href="#"
                    className="transition-all duration-150 hover:brightness-75"
                  >
                    <li>Pricing</li>
                  </Link>
                  <Link
                    href="#"
                    className="transition-all duration-150 hover:brightness-75"
                  >
                    <li>Resources</li>
                  </Link>
                </ul>
              </div>
              <div className="flex flex-col w-full pt-8 pb-10 border-t border-gray-500 gap-7">
                <Link
                  href="#"
                  className="text-white font-[700] text-xl transition-all duration-150 hover:brightness-75"
                >
                  Login
                </Link>
                <Button type="button">Sign Up</Button>
              </div>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>
  );
}
