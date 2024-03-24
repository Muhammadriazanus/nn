import React, { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    place-items: center;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
    
    `
const NumberSelectedContainer = styled.div`
.error{
    color : red;
}
      
display: flex;
flex-direction: column;
align-items: end;
 

    .flex{
        display: flex;
        gap: 24px;

    }
    p{
        font-size: 24px;
        font-weight : 700px
    }
`
const NumberSelector = ({ seterror,error, selectedNumber, setSeletedNumber }) => {

    const handleError = (val)=>{
        setSeletedNumber(val)
        seterror('')

    }

    // console.log(selectedNumber);
    const ArrayNumber = [1, 2, 3, 4, 5, 6]
    return (
        <NumberSelectedContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {ArrayNumber.map((val, i) => (
                    <Box
                        isSelected={val === selectedNumber}
                        key={i} onClick={()=> handleError(val)}>{val}
                    </Box>
                ))}
            </div>
            <p>Selected Number</p>

        </NumberSelectedContainer>
    )
}

export default NumberSelector
