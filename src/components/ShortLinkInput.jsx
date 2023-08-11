"use client";

import { Button } from "./Button";
import { useState, useEffect } from "react";
import { ShortedLinkMenu } from "./ShortedLinkMenu";

export function ShortLinkInput({ className }) {
  const [inputLink, setInputLink] = useState("");
  const [inputLinkError, setInputLinkError] = useState(false);
  const [originalLink, setOriginalLink] = useState("");
  const [shorteredLink, setShorteredLink] = useState("");
  const [linkHistory, setLinkHistory] = useState([]);

  useEffect(
    () => {
      if (originalLink) {
        shortenLink();
      }
    },
    [originalLink]
  );

  const shortenLink = async () => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${originalLink}`
      );
      const data = await response.json();
      if (data.ok) {
        const newLink = {
          original: originalLink,
          shortened: data.result.short_link
        };
        setLinkHistory([newLink, ...linkHistory]); // Adiciona o novo link ao topo da lista
        setShorteredLink(data.result.short_link);
      }
    } catch (error) {
      setInputLinkError(true);
    }
  };

  const shortUrl = async e => {
    e.preventDefault();
    setOriginalLink(inputLink);

    if (
      !inputLink ||
      !inputLink.startsWith("https://") ||
      !inputLink.includes(".")
    ) {
      setInputLinkError(true);
      return;
    } else {
      setInputLinkError(false);
    }

    await shortenLink();
  };

  const grabOriginalUrl = e => {
    const newInputLink = e.target.value;
    setInputLink(newInputLink);

    if (
      !newInputLink ||
      !newInputLink.startsWith("https://") ||
      !newInputLink.includes(".")
    ) {
      setInputLinkError(true);
    } else {
      setInputLinkError(false);
    }
  };

  const copyToClipboard = linkIndex => {
    const newLinkHistory = [...linkHistory];
    const link = newLinkHistory[linkIndex];

    if (link) {
      navigator.clipboard.writeText(link.shortened);
      newLinkHistory[linkIndex] = { ...link, buttonCopied: true };
      setLinkHistory(newLinkHistory);

      setTimeout(function() {
        newLinkHistory[linkIndex] = { ...link, buttonCopied: false };
        setLinkHistory(newLinkHistory);
      }, 5000);
    }
  };

  return (
    <div className="max-w-[920px] w-[920px] max-lg:w-full flex flex-col gap-6">
      <div className="p-6 lg:p-14 rounded-xl bg-primarydarkviolet bg-[url('./../../public/bg-shorten-mobile.svg')] lg:bg-[url('./../../public/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top ${className} max-w-[1024px] w-[1024px] max-lg:w-full lg:bg-cover shadow-sm">
        <form className="flex flex-col items-center justify-center lg:flex-row lg:gap-6">
          <div className="relative flex flex-col items-center justify-center w-full">
            <input
              type="text"
              value={inputLink}
              onChange={grabOriginalUrl}
              placeholder="Shorten a link here..."
              className={`w-full px-4 rounded-md h-14 focus:outline-none ${inputLinkError
                ? "border-2 border-b-[3px] border-red-500"
                : "border border-transparent"}`}
            />
            {inputLinkError &&
              <div className="w-full mt-1 text-sm italic text-red-500 text-start lg:absolute lg:-bottom-6">
                <span>Please add a link</span>
              </div>}
          </div>
          <div className="w-full lg:w-[30%]">
            <Button
              type="submit"
              onClick={shortUrl}
              className="mt-4 rounded-md lg:mt-0"
            >
              Shorten It!
            </Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-6">
        {linkHistory.map((link, index) =>
          <ShortedLinkMenu
            key={index}
            shorteredLink={link.shortened}
            originalLink={link.original}
            buttonCopied={link.buttonCopied}
            copyToClipboard={() => copyToClipboard(index)}
          />
        )}
      </div>
    </div>
  );
}
