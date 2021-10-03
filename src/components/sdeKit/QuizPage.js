import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { LastPageContainer, OptionButton, SdkButton } from './SdkLastPage'

const questions = [
  {
    questionText: 'What is the method inside the class in python language?',
    answerOption: [
      { answerText: 'Object', isCurrect: false },
      { answerText: 'Function', isCurrect: true },
      { answerText: 'Attribute', isCurrect: false },
      { answerText: 'Argument', isCurrect: false },
    ],
    explantion: 'The method inside class in python language is Function',
  },
  {
    questionText: 'What is the method inside the class in python language?1',
    answerOption: [
      { answerText: 'Object', isCurrect: false },
      { answerText: 'Function', isCurrect: true },
      { answerText: 'Attribute', isCurrect: false },
      { answerText: 'Argument', isCurrect: false },
    ],
    explantion: 'The method inside class in python language is Function',
  },
  {
    questionText: 'What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2What is the method inside the class in python language?2',
    answerOption: [
      { answerText: 'Object', isCurrect: false },
      { answerText: 'Function', isCurrect: true },
      { answerText: 'Attribute', isCurrect: false },
      { answerText: 'Argument', isCurrect: false },
    ],
    explantion: 'The method inside class in python language is Function',
  },
]
const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [nextClick, setNextClick] = useState(false)
  const handleNextQuestion = () => {
      setCurrentQuestion(prev => prev+1)
    //   setNextClick(true)
  }
  useEffect(()=> {

  }, [currentQuestion])
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '93vh',
        margin: '0px',
      }}
    >
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
          <Typography
            variant="subheading"
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              color: '#a9a9a9',
            }}
          >
            Practice Questions
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              color: '#112031',
            }}
          >
            Question {currentQuestion + 1}/ <sapm>35</sapm>
          </Typography>
        </LastPageContainer>
      </LastPageContainer>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '76vh',
          width:'100vw',
          overflowY: 'scroll',
          marginTop: '20px'
        }}
      >
        <Typography
          style={{
            color: '#345B63',
            wordWrap: 'break-word',
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '20px',
            width: '100%'
          }}
          variant="body1"
          component="div"
        >
          {questions[currentQuestion].questionText}
        </Typography>
        {questions[currentQuestion].answerOption.map((items, i) => {
          return <OptionButton answer={items.answerText} value={items.isCurrect} />
        })}
      </Container>
      <LastPageContainer
          justifyContent= 'space-around'
          alignItems= 'center'
          height='50px'
        style={{
          bottom: 35,
        }}
      >
        <SdkButton variant="outlined" title="Answer" />
        <SdkButton
          onClick={handleNextQuestion}
          variant="contained"
          title="Next"
        />
      </LastPageContainer>
    </div>
  )
}

export default QuizPage



