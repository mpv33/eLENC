import React from 'react'
import BoldText from './BoldText'
import LastPageContainer from './LastPageContainer'
import ProgressCircle from './ProgressCircle'

const PageHeader = () => {
    return (
        <LastPageContainer
        border={true}
        justifyContent="center"
        alignItems="space-between"
        minHeight="100px"
      >
        <LastPageContainer
          justifyContent="flex-start"
          alignItems="flex-start"
          column={true}
        >
          <BoldText
            variant="subheading"
            size={16}
            color={true}
            title=" Learning notes"
          />
          <BoldText variant="h2" size={24} title="Introduction to javascript" />
        </LastPageContainer>
        <ProgressCircle value={10} />
      </LastPageContainer>
    )
}

export default PageHeader
