import React, { useState } from 'react';
import Button from '@material-ui/core/Button'

const OptionButton = (props) => {
    let { answer, value } = props
    const [click, setClick] = useState(false)
    const handleAnswerClick = () => {
        setClick(true)
    }
    return (
      <Button
        key={Math.random()}
        onClick={handleAnswerClick}
        style={{
          textAlign: 'left',
          marginTop: '30px',
          wordWrap: 'break-word',
          color: `${click ? (value ? 'green' : 'red'): 'black'}`,
          border: '2px solid',
          width: '90%',
          borderRadius: '10px',
        }}
        variant="outlined"
        // color="primary"
      >
        {answer}
      </Button>
    )
  }
  export default OptionButton