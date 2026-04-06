import React, { useState } from "react";
import "./App.css"
const App = ()=>{
  let [computerScore,setInitailState] = useState(0)
  let [yourScore,setInitailState2] = useState(0)
  let [computerMove,setInitailState3] = useState(0)
  function generateComputerMove(){ 
    let a = Math.floor(Math.random() * 3) + 1
    if (a==1){
      return "Rock"
    }else if (a==2){
      return "Paper"
    }else{
      return "Scissors"
    }
  
  }

  return(
    <div>
      <h1>Computer : You</h1>
      <h1>ComputerScore : {computerScore} YourScore : {yourScore}</h1>
      <h1>ComputerMove : {computerMove}</h1>
      <button onClick={()=>{
        let b = generateComputerMove()
        setInitailState3(b)
        if (b=="Paper"){
          setInitailState(computerScore+1)
        }else if (b=="Scissors"){
          setInitailState2(yourScore+1)
        }
      }}>Rock</button>
      <button onClick={()=>{
        let b = generateComputerMove()
        setInitailState3(b)
        if (b=="Rock"){
          setInitailState2(yourScore+1)
        }else if (b=="Scissors"){
          setInitailState(computerScore+1)
        }
      }}>Paper</button>
      <button onClick={()=>{
        let b = generateComputerMove()
        setInitailState3(b)
        if (b=="Paper"){
          setInitailState2(yourScore+1)
        }else if (b=="Rock"){
          setInitailState(computerScore+1)
        }
      }}>Scissors</button>
    </div>
  )
}

export default App