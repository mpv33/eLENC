import React from 'react'
import { getItem, setItem } from '../../utils/storage';
import { useHistory } from "react-router-dom";
import { LoginAction } from '../../services/login/loginApicall';

import { useDispatch } from 'react-redux'

function Login() {
  const token = getItem('token')
  const [email,setEmail]=React.useState({email:''})
  const history= useHistory();
   const dispatch = useDispatch()

 
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('final email:',email);
    dispatch(LoginAction(email, history) )
   // LoginAction(email, history) ;
    setEmail({email:''})
    
    //history.push('/ready-to-start')

  }
  const handlechange =(e)=>{
        //console.log(e.target.value)
        setEmail({email:e.target.value})
  }

  return (

    <div className='container'>
      <div className="headline_text">
        <h3> Welcome back</h3> <br />
        <h3> Sign In to ImAvatar</h3>
      </div>
      <div className=' text-center form'>
        <form onSubmit={handleSubmit} className="">
              <input
                type="email"
                required
                placeholder="Email id / User ID"
                name="email"
                value={email.email}
                maxLength={60}
                onChange={handlechange}
                autoFocus
              />

          <div className="next_btn">
          <Button variant="primary" type='submit'>Next</Button>{' '}
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login




