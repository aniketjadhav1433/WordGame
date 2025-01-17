import { useEffect, useState } from "react"
import Alphabets from "./components//Alphabets"
import GameStatus from "./components/GameStatus"
import Header from "./components/Header"
import NewGameBtn from "./components/NewGameBtn"
import UserInput from "./components/UserInput"
import WordButton from "./components/WordButton"
import { ContextProviderWrapper } from "./Store"


function App() {

  return (
    <ContextProviderWrapper>

      <div className="bg-black text-white min-h-screen flex py-1 items-center flex-col gap-8 ">

        <div className="w-[90vw] text-center items-center flex flex-col gap-6">

        <Header />
        <GameStatus/>
        <WordButton  />
        <UserInput />

        </div>

      <Alphabets />
      <NewGameBtn/>

    </div>
    </ContextProviderWrapper>
   

  )
}

export default App
