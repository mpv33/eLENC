import React from 'react'
import Container from '@material-ui/core/Container'

const LastPageContainer = (props) => {
    let {justifyContent, alignItems, height, column, border} = props
    return (
        <Container
        style={{
          background: 'white',
          display: 'flex',
          justifyContent: `${justifyContent}`,
          alignItems: `${alignItems}`,
          flexDirection: `${column ? 'column' : 'row'}`,
          height: `${height}`,
          position: 'relative',
          padding:'10px',
          boxShadow: `${border ? '0px 25px 20px -20px lightgrey' : '-2px -11px 27px -4px lightgrey'}`,
        }}
      >
        {props.children}
      </Container>
    )
}

export default LastPageContainer
