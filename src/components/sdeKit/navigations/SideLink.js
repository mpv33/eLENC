import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SideLink = ({ url, course }) => {
  return (
    <div style={{backgroundColor:'lightgrey', minHeight:'90vh'}}>
      <Ul>
        {course.map((item) => {
          return <Links activeStyle={{backgroundColor:'#04AA6D'}} to={`${url}/${item.name}`}>{item.name}</Links>
        })}
      </Ul>
    </div>
  )
}

export default SideLink

const Links = styled(NavLink)`
  display: block;
  font-size: 15px;
  padding: 5px 10px;
  text-transform: uppercase;
  color: black;
  text-decoration: none;

  :hover{
    background-color: grey;
    text-decoration: none;
  }
`
const Ul = styled.ul`
  display: block;
  width: 250px;
  text-align: left;
`
