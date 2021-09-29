import React from 'react'
import { ToggleButton } from 'ui-neumorphism'
import { useState } from 'react'
import python from './387.svg'
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const data=[


    {
        question:'Basic Fundamental',
        answer:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts". Content can be delivered via many different media including the Interne'
    },
    {
        question:'Loops and Variables',
        answer:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts". Content can be delivered via many different media including the Interne'
    },
    {
        question:'Condition Statements',
        answer:'This Is AnswerIn publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts". Content can be delivered via many different media including the Interne'
    },
    {
        question:'List And Arrays',
        answer:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts". Content can be delivered via many different media including the Interne'
    },
    {
        question:'Functions and class',
        answer:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts". Content can be delivered via many different media including the Interne'
    },
    {
        question:'Opps Concept',
        answer:'This Is AnswerIn publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts". Content can be delivered via many different media including the Interne'
    }
]
function Course() {
    var k=0
    const percentage = 66;
    const [selected,setSelect]=useState(null)

    const toggle=(i)=>{
     if(selected==i)
     {
         return setSelect(null)
     }
     setSelect(i)
    }
    return (
        <div>
           <div className="header-part">
               <div className="heading">
                 <h1>Python Language</h1>
                 <img src={python} height='80px' />
                 <CircularProgressbar className="process" value={percentage} text={`${percentage}%`} 
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,
                
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    
                
                    // Text size
                    textSize: '26px',
                    
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                
                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#4e73df',
                    trailColor: '#d6d6d6',
                 
   
                    backgroundColor: '#3e98c7',
                  })}
                  />
        
               </div>
               <div>
               
               </div>

           </div>
           <div className="course-container">
          
             <div className="accordian">
               {data.map((item,i)=>(
                <div className="item">
                      <div className="title" onClick={()=>toggle(i)}>
                      <h2>{++k}. {item.question}</h2>
                      <span>{selected===i ? <i class="fa fa-chevron-down" aria-hidden="true"></i>: <i class="fa fa-chevron-right" aria-hidden="true"></i>}</span>
                      </div>
                     <div className={selected===i ? "content show":"content"}><p>{item.answer}</p></div>
                </div>
               

               ))}
             </div>
           </div>
        </div>
    )
}

export default Course
