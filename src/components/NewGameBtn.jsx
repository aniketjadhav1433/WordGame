import React, { useContext } from 'react'
import { contextProvider } from '../Store'

const NewGameBtn = () => {

  const {isGameOver,setGuessedWord,setIsDisabled,isGameWon,setIsGameOver,setIsGameWon,setWrongWordsButton,setIsNewGame} = useContext(contextProvider)

  const reset = ()=>{
    setGuessedWord([])
    setIsDisabled(false)
    setIsGameOver(false)
    setIsGameWon(false)
    setWrongWordsButton([])
    setIsNewGame((prev)=> !prev)
  }

  return (
    <>
    {isGameOver || isGameWon === true ? <button onClick={reset} className="p-[10px_30px] bg-blue-400 rounded-md "> New Game </button> : undefined}
    </>
  )
}

export default NewGameBtn