import React, { useContext, useEffect, useState } from "react";
import { alphabets ,buttObj} from "./button";
import { contextProvider } from "../Store";

const Alphabets = () => {


  const {setGuessedWord,setWrongWordsButton,guessedWord,currentWord,wrongCount,setWrongCount,setIsGameOver,setIsGameWon,setIsDisabled,isDisabled} = useContext(contextProvider)


  const userInput = (alphabet) => {
    
    setGuessedWord((prev) => { 

      const updatedGuessedWord = prev.includes(alphabet) ? prev : [...prev,alphabet]
         
      if(currentWord.split("").every((letter)=> updatedGuessedWord.join().toLowerCase().includes(letter))){
        setIsGameWon(true)
        setIsDisabled(true)
        setWrongWordsButton('')
      }

      
      if(!currentWord.includes(updatedGuessedWord.join("").toLowerCase())){
        setWrongWordsButton(buttObj[wrongCount].text)
      }


    return updatedGuessedWord 
    })


  };

  useEffect(()=>{

    let wrongGuessed = guessedWord.filter((letter)=>{
      return !currentWord.split("").includes(letter.toLowerCase())
    })

    setWrongCount(wrongGuessed.length )

  },[guessedWord])


  useEffect(()=>{

    if (wrongCount >= 9 ) {
      setIsGameOver(true)
      setIsGameWon(false)
      setIsDisabled(true)
      setWrongWordsButton("")
    }
  
  },[wrongCount])


  return (
    <div className="w-[90%] md:w-[70%] lg:w-[50%]  flex gap-2 justify-center items-center flex-wrap">

      {alphabets.map((alphabet, id) => {

      let isGuessed = guessedWord.includes(alphabet)
      let isCorrect = isGuessed &&  currentWord.includes(alphabet.toLowerCase())
      let isWrong = isGuessed && !currentWord.includes(alphabet.toLowerCase())


       return <button
       key={id}
       disabled={isDisabled}
       className={ `${isCorrect ? "bg-green-500" : isWrong ? "bg-red-600" : "bg-yellow-400"} disabled:cursor-not-allowed disabled:bg-opacity-60 rounded-md p-6 text-black`}
       onClick={(e) => userInput(alphabet)}
        >
        {alphabet}
      
        </button>
      })}


    </div>
  );
};

export default Alphabets;
