import React from 'react'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
const MainContainer = (props) => {
  return <PageRapper>{props.children}</PageRapper>
}

export default MainContainer

const PageRapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  min-width: 400px;
  overflow: scroll;
  height: 100vh;

  @media (max-width: 768px) {
    width: 90%;
  }`