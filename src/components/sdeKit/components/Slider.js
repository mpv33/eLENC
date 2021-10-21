import React from 'react'
import styled from 'styled-components'
const Slider = (props) => {
    return (
        <Track>
            <Value value={`${props.value}%`}></Value>
        </Track>
    )
}

export default Slider

const Track = styled.div`
width: 100%;
height: 10px;
border-radius: 20px;
background-color: grey;
`

const Value = styled.div`
width: ${props => props.value || '0%'};
height: 10px;
border-radius: 20px;
background-color: red;
`