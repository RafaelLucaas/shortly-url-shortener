"use client";

import { Button } from "./Button";
import { useState } from "react";

export function ShortedLinkMenu({
  originalLink,
  shorteredLink,
  copyToClipboard
}) {
  const [buttonCopied, setButtonCopied] = useState(false);

  const handleCopyClick = () => {
    copyToClipboard(shorteredLink);
    setButtonCopied(true);
    setTimeout(function() {
      setButtonCopied(false);
    }, 5000);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm max-w-[950px] w-[950px] max-lg:w-full">
        <div className="flex items-center px-5 pt-4 pb-3 text-gray-700 font-[500] border-b border-gray-200">
          <span>
            {originalLink}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-5">
          <div className="w-full py-4 text-start text-primarycyan">
            <a
              href={`https://${shorteredLink}`}
              target="_blank"
              className="transition-all duration-150 hover:brightness-90"
            >
              {`https://${shorteredLink}`}
            </a>
          </div>
          <div className="w-full mb-5">
            <Button
              type="button"
              onClick={handleCopyClick}
              className={`rounded-md ${buttonCopied
                ? "bg-primarydarkviolet hover:bg-primarydarkviolet hover:"
                : "bg-primarycyan"}`}
            >
              {!buttonCopied ? "Copy" : "Copied!"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
