import React from 'react'
import Typography from '@material-ui/core/Typography'

const BoldText = (props) => {
    let {size, color, title, variant} = props
    const secondary = `#a9a9a9`;
    return (
        <Typography
          variant={`${variant}`}
          style={{
            fontSize: `${size}px`,
            fontWeight: 'bold',
            textTransform: 'capitalize',
            color:`${ color ? secondary : '#112031'}`,
          }}
        >
         {title}
        </Typography>
    )
}

export default BoldText
