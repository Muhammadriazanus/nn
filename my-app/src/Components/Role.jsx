import React from 'react'
import styled from 'styled-components'
const RuleContainer = styled.div`
max-width: 800px;
margin : 0 auto;
margin-top: 40px;
border-radius: 10px;
    background-color: #fbf1f1;
    padding : 20px;
    h2{
        font-size: 24px ;
        font-weight : bold
    }
    .text{
        margin-top: 24px;
    }
` 
const Role = () => {
    return (
        <RuleContainer>
            <h2>How to play Dice game</h2>
            <div className="text">
                <p>Selected any Number</p>
                <p>Click an Dice image</p>
                <p>After click on dice If Selected number is equal to dice number will get same point of as dice</p>
                <p>If you get Wrong guset will two point will be deducted</p>
            </div>

        </RuleContainer>
    )
}

export default Role
