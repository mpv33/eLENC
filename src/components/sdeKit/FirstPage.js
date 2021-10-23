import React from 'react'
import {
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SVG } from '../../assest/svg/javascript.svg'
import {MainLink} from './navigations'
import { Slider } from './components'
import LastPage from './LastPage'

const FirstPage = () => {
  let history = useHistory()
  let { pathname } = useLocation()
  let { path, url } = useRouteMatch()
  console.log(pathname === '/sde-kit')
  return (
    <>
      {pathname === '/sde-kit' ? null : (
        <MainLink path={path} url={url} course={course} />
      )}
      <Route exact path={path}>
        <>
          <CourseContainer>
            {course.map((item) => {
              return (
                <CourseCard
                  onClick={() => history.push(`${path}/${item.name}`)}
                >
                  <ImageLogo />
                  <CardBody>
                    <h2>{item.name}</h2>
                    <span>Level 2</span>
                  </CardBody>
                  <Slider value={item.per} />
                </CourseCard>
              )
            })}
          </CourseContainer>
          <h1>Course</h1>
          <CourseContainer>
            {course.map((item) => {
              return (
                <CourseList
                  onClick={() => history.push(`${path}/${item.name}`)}
                >
                  <ImageLogo />
                  <CardBody>
                    <h2>{item.name}</h2>
                    <span>
                      {item.completed}/{item.total} Lessons
                    </span>
                  </CardBody>
                </CourseList>
              )
            })}
          </CourseContainer>
        </>
      </Route>
      {course.map((item, index) => {
        return (
          <Route path={`${path}/${item.name}`}>
            <LastPage key={index} value={90} route={item.route} />
          </Route>
        )
      })}
    </>
  )
}

export default FirstPage

const CourseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px;
`
const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  min-height: 200px;
  padding: 10px;
  margin-left: 50px;
  margin-top: 40px;
  border-radius: 20px;
  box-shadow: 1px 2px 10px 8px rgba(194, 188, 194, 1);
  :hover {
    box-shadow: 0px 0px red;
    background-color: rgba(194, 188, 194, 1);
  }
`

const CourseList = styled.div`
  display: flex;
  min-width: 400px;
  height: 60px;
  border: 1px solid red;
  padding: 5px;
  margin: 30px;
  border-radius: 20px;
`

const ImageLogo = styled(SVG)`
  height: 50px;
  display: block;
`
const CardBody = styled.div`
  text-align: left;
`

const course = [
  {
    name: 'javascrip',
    total: 34,
    completed: 14,
    per: 60,
    logo: 'javascript.png',
    id: 22,
    route: [
      { name: 'Intro to javascript' },
      { name: 'Fundamental of javascript' },
      { name: 'Variable of javascript' },
      { name: 'Let vs Const' },
      { name: 'Function' },
      { name: 'Class' },
    ],
  },
  {
    name: 'python',
    total: 30,
    completed: 20,
    per: 66,
    logo: 'python.png',
    id: 33,
    route: [
      { name: 'Intro to python' },
      { name: 'Fundamental of python' },
      { name: 'Variable of python' },
      { name: 'Let vs Const' },
      { name: 'Function' },
      { name: 'Class' },
    ],
  },
  {
    name: 'react',
    total: 40,
    completed: 20,
    per: 50,
    logo: 'react.png',
    id: 44,
    route: [
      { name: 'Intro to react' },
      { name: 'Fundamental of react' },
      { name: 'Variable of react' },
      { name: 'Let vs Const' },
      { name: 'Function' },
      { name: 'Class' },
    ],
  },
  {
    name: 'html',
    total: 80,
    completed: 20,
    per: 25,
    logo: 'html.png',
    id: 55,
    route: [
      { name: 'Intro to html' },
      { name: 'Fundamental of html' },
      { name: 'Variable of html' },
      { name: 'Let vs Const' },
      { name: 'Function' },
      { name: 'Class' },
    ],
  },
]
