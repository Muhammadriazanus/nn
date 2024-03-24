import React, { useState } from 'react'

import styled from 'styled-components'

const Container = styled.div`
    max-width : 1180px;
    display:  flex;
    margin : 0 auto;
    align-items: center;
    height: 100vh;
    .Content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`
const Button = styled.button`
    padding: 10px 18px;
    background: #000000;
    border-radius : 5px;
    color : white;
    min-width : 220px;
    border : none;
    cursor: pointer;
    font-size : 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color : black;
        transition: 0.4s background ease-in;
    }
`
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="https://github.com/anshuopinion/React-10-Projects/blob/project-3/project-3/public/images/dices.png?raw=true" alt="dices img" />
        </div>
        <div className='Content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame
