import React from 'react'
import LastPageContainer from './LastPageContainer'
import SdkButton from './SdkButton'
const PageFooter = () => {
    return (
        <LastPageContainer
        justifyContent="space-around"
        alignItems="center"
        height="50px"
        style={{
          position: 'absolute',
        }}
      >
        <SdkButton variant="outlined" title="Practice Questions" />
        <SdkButton variant="contained" title="Quiz" />
      </LastPageContainer>
    )
}

export default PageFooter
