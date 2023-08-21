"use client";

import { useEffect, useState } from "react";
import generateCompoundNames from "@/components/namesGenerator";

export default function Generator() {
  const [compoundWords, setCompoundWords] = useState<string[]>([]);

  const getNames = () => {
    let words: string[] = generateCompoundNames();
    setCompoundWords(words);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <main className="flex flex-col font-mono text-lg text-redish items-center p-10 bg-blueish overflow-hidden max-h-screen">
      <h1 className="text-3xl lg:w-full text-center border-b border-redish pb-4">
        {compoundWords.length} unique names generated
      </h1>
      <div className="flex justify-center h-mobile lg:w-full lg:h-desktop overflow-y-auto">
        <div className="w-full grid grid-cols-2 lg:grid-cols-5">
          {compoundWords.map((word, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">
              {word}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={getNames}
          className="bg-blueish border-solid flex border-2 border-redish text-center my-10 p-4 lg:my-5
      rounded-lg hover:bg-redish hover:text-blueish transition duration-300 ease-in-out"
        >
          Run Again
          <span className="ml-4">
            <img src="/againIcon.png" alt="Icon" className="w-6 h-6" />
          </span>
        </button>
      </div>
    </main>
  );
}
