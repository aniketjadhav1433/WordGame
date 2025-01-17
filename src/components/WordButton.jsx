import { useContext, useEffect, useState } from "react";
import { buttObj} from "./button"
import { contextProvider } from "../Store";

const WordButton = () => {

  const {wrongCount} = useContext(contextProvider)


  return (
      <div className="flex flex-wrap justify-center gap-2 w-[90%] md:w-[80%] lg:w-[40%]  mx-auto">
        {buttObj.map((item, idx) => (

          <span
          style={{backgroundColor:item.color}}
            key={idx}
            className={` text-black w-fit p-[15px] ${idx < wrongCount ? "after:content-['💀']" : ""} relative rounded-md after:top-0 after:ml-1 after:justify-center after:items-center after:w-fit after:mx-auto `}
          >
            {item.text}
          </span>
        ))}
      </div>
  );
};

export default WordButton;

