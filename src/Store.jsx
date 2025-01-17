import { createContext, useEffect, useState } from "react";
import {words} from "./components/words"



let contextProvider = createContext("")


const ContextProviderWrapper = ({children})=>{

    
  const [currentWord, setCurrentWord] = useState("")
  const [guessedWord, setGuessedWord] = useState([])
  const [wrongCount, setWrongCount] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isGameWon, setIsGameWon] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [wrongWordsButton, setWrongWordsButton] = useState([])
  const [isNewGame, setIsNewGame] = useState(false)

  const randomNumber = Math.floor(Math.random() * words.length - 1)

  useEffect(()=>{
    setCurrentWord(words[randomNumber])
  },[isNewGame])



 return   <contextProvider.Provider value={{currentWord,setCurrentWord,guessedWord,setGuessedWord,wrongCount,setWrongCount,isGameOver,setIsGameOver,isGameWon,setIsGameWon,isDisabled,setIsDisabled,wrongWordsButton,setWrongWordsButton,setIsNewGame,isNewGame}}>
        {children}
    </contextProvider.Provider>
}

export {contextProvider,ContextProviderWrapper}