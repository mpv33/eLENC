import React from 'react';
import Button from '@material-ui/core/Button'

const SdkButton = (props) => {
    let { variant, title, onClick } = props
    return (
      <Button
        onClick={onClick}
        style={{ width: 200 }}
        variant={variant}
        color="primary"
      >
        {title}
      </Button>
    )
  }
export default SdkButton
  