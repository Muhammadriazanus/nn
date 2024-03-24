import React, { useState } from 'react'
import TotalScore from './TotalScore'
import RoleDice from './RoleDice'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import { Button } from './Button/Button'
import Role from './Role'



const MainContainer = styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`


const GamePlay = () => {
    const [currentDice, setCurrentDice] = useState(1)
    const [score,setScore] = useState(0)
    const [error,seterror] = useState("") 
    const [selectedNumber, setSeletedNumber] = useState()
    const [showRole,setshowrole] = useState(false)
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);

    }
    const roleDice = () => {
        if(!selectedNumber) {
            seterror("You have not selected any number ")
            return
        }

        const randomNumber = generateRandomNumber(1, 7)
        setCurrentDice((prev) => randomNumber)


        if(selectedNumber === randomNumber){
            setScore((prev)=> prev + randomNumber)
        }else{
            setScore((prev)=> prev-2)
        }
        setSeletedNumber(undefined)
    }

const resetSocre = ()=>{
    setScore(0)
}

    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score}/>
                <NumberSelector error={error} seterror={seterror} selectedNumber={selectedNumber} setSeletedNumber={setSeletedNumber}/>
            </div>
            {/* <RoleDice /> */}
            <RoleDice currentDice={currentDice} roleDice={roleDice}  />
            <div className="btn">
                <Button onClick={resetSocre}>Reset</Button>
                <Button onClick={()=> setshowrole((prev)=> !prev)}>{showRole ? "Hide" : "Show"}</Button>
            </div>
            {showRole && <Role/>}
        </MainContainer>
    )
}

export default GamePlay
