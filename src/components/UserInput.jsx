import React, { useContext, useState } from "react";
import { contextProvider } from "../Store";

const UserInput = () => {

 const {currentWord,guessedWord,isGameOver}= useContext(contextProvider)

  return (
    <div className="flex gap-2 w-[100%] flex-wrap sm:flex-nowrap justify-center">

      {currentWord.split("").map((item, id) => {
        const missedLetter = !guessedWord.join("").toLowerCase().includes(item)

        return (
          <button
            key={id}
            className={` ${
              missedLetter ? "text-red-400" : "text-white"
            } capitalize size-[50px] border-b-4 border-b-gray-400  bg-[#444242] rounded-sm`}
          >
            {guessedWord && guessedWord.join("").toLowerCase().includes(item)
              ? item
              : isGameOver === true
              ? item
              : ""}
          </button>
        )
      })}
    </div>
  );
};

export default UserInput;
