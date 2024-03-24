import React, { useState } from 'react'
import styled from 'styled-components'

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:  column;
    margin-top: 48px;
    P{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
`
const RoleDice = ({currentDice,roleDice}) => {

  
    return (
        <DiceContainer >
            <div className='dice' onClick={roleDice}>
                <img src={`/image/dice/dice_${currentDice}.png`} alt="Dice" />
            </div>
            <p>Click On Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice
