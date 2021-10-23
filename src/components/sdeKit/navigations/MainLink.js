import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MainLink = ({ url, course }) => {
  return (
    <div style={{backgroundColor:'#282A35', padding: '10px 0px',display:'flex', justifyContent: 'flex-start', width:'100%',paddingRight:'200px'}}>
      <ul>
        {course.map((item) => {
          return <Links activeStyle={{backgroundColor:'#04AA6D'}} to={`${url}/${item.name}`}>{item.name}</Links>
        })}
      </ul>
    </div>
  )
}

export default MainLink

const Links = styled(NavLink)`
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    padding: 10px 20px;
    text-transform: uppercase;
    color: white;
    :hover{
      background-color: black;
      text-decoration: none;
  }
`