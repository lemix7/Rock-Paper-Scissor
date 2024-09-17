import React, { useEffect } from 'react'
import Buttons from './buttons'
import Rock from '../Assets/Rock icon.png'
import Paper from '../Assets/Paper icon.png'
import Scissors from '../Assets/Scissor icon.png'
import { useState } from 'react'

const Game = () => {
    const [aiChoice, setAiChoice] = useState(null)
    const [playerChoice, setPlayerChoice] = useState(null)
    const [playerWins, setPlayerWins] = useState('')
    const [Wins, setWins] = useState(0)
    const [Draw, setDraw] = useState(0)
    const [Loss, setLoss] = useState(0)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        const savedWins = localStorage.getItem('Wins')
        const savedDraw = localStorage.getItem('Draw')
        const savedLoss = localStorage.getItem('Loss')

        if(savedWins) setWins(JSON.parse(savedWins))
        if(savedDraw) setDraw(JSON.parse(savedDraw))
        if(savedLoss) setLoss(JSON.parse(savedLoss))
    },[])

    useEffect(() => {
        localStorage.setItem('Wins', JSON.stringify(Wins))
    }, [Wins])

    useEffect(() => {
        localStorage.setItem('Draw', JSON.stringify(Draw))
    },[Draw])

    useEffect(() => {
        localStorage.setItem('Loss', JSON.stringify(Loss))
    }, [Loss])

    const randomChoice = () => {
        const choice = Math.floor(Math.random()*3)

        switch(choice){
            case 0:
                setAiChoice('Rock')
                break
            case 1:
                setAiChoice('Paper')
                break
            case 2:
                setAiChoice('Scissors')
                break
            default:
                setAiChoice(null)
        }
      
    }

    const handleClick = (m) =>{
        setPlayerChoice(m)
        setTrigger(!trigger)
        randomChoice()
    }
    
    const playGame = () => {
        const outcomes = {
          Rock: { Scissors: 'You Won', Paper: 'You Lost' },
          Paper: { Rock: 'You Won', Scissors: 'You Lost' },
          Scissors: { Paper: 'You Won', Rock: 'You Lost' }
        }
      
        if (playerChoice === aiChoice) {
          setPlayerWins('Draw')
          setDraw(Draw + 1)
        } else {
          const result = outcomes[playerChoice][aiChoice]
          if (result === 'You Won') {
            setPlayerWins(result)
            setWins(Wins + 1)
          } else {
            setPlayerWins(result)
            setLoss(Loss + 1)
          }
        }
      }
      
      

    useEffect(() => {
        if (playerChoice && aiChoice) {
            playGame()
        }
    }, [aiChoice, playerChoice])
    
    const reset = () => {
        setWins(0)
        setDraw(0)
        setLoss(0)
        setPlayerWins('')
    }

    
    
  return (
    <div className="game flex items-center flex-col justify-center gap-4 text-blue-950">
        <h1 className='text-3xl font-bold lg:text-5xl md:text-4xl'>Rocks , Paper , Scissors</h1>
        <h3 className='text-2xl text-white md:my-4 uppercase font-bold'>{playerWins}</h3>
        <div className="btns flex gap-8">

            <Buttons icon={Rock} key={1} clickF={() => {handleClick('Rock')}} />

            <Buttons icon={Paper} key={2} clickF={() => {handleClick('Paper')}}/>

            <Buttons icon={Scissors} key={3} clickF={() => {handleClick('Scissors')}}/>

        </div>
        <div className='flex gap-5 mt-10 text-2xl font-bold'>
            <p>Wins:{Wins}</p>
            <p>Draws:{Draw}</p>
            <p>Loss:{Loss}</p>
        </div>

        <button className='text-xl font-bold text-blue-400 bg-blue-950 py-2 px-4 rounded-full  transition-all ease-in hover:text-white mt-5'onClick={() =>{reset()}}>Reset</button>
    </div>
  )
}

export default Game