import React, { useContext } from "react";
import { contextProvider } from "../Store.jsx";

const GameStatus = () => {

  const {isGameWon,isGameOver,wrongCount} = useContext(contextProvider)

  const winObj = { head: "You win", para: "well done !",color:"green" };
  const lossObj = {
    head: "Game Over",
    para: "You lose! better luck next time!",
    color:"red"
  };

  return (

    <>
    
    <div className={` ${isGameWon ? "bg-green-500" : "bg-red-500"} rounded-lg flex flex-col justify-center items-center w-[100%] h-[12vh]  lg:w-[80%] `}>
      {isGameOver || isGameWon ? <h2>{isGameWon ? winObj.head : lossObj.head}</h2> : <h2> Only  { 9 - wrongCount }  Guess Left To Choose </h2>}
      {isGameOver || isGameWon ? <h2>{isGameWon ? winObj.para : lossObj.para}</h2> : undefined}
    </div>

    </>

  )
};

export default GameStatus;
