import React, { useEffect } from 'react'
import { getItem, setItem } from '../../utils/storage';
import { useHistory } from "react-router-dom";
import { ReadyToStartAction } from '../../services/login/readyToStartApicall';

import {useDispatch} from 'react-redux'
function Password() {
  const token = getItem('token')
  const [password,setPassword]=React.useState({data:''});
  const [email,setEmail]=React.useState('');
  const history= useHistory();
  const CryptoJS = require('crypto-js')
 const dispatch = useDispatch()

  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('final password:',password.data)
    const ciphertext = CryptoJS.AES.encrypt(
      password.data,
      'imavatar'
    ).toString()
    const loginData = {
      userName: email,
      password: ciphertext,
      userType: 3,
    }
    // ReadyToStartAction(loginData, history)
     dispatch(ReadyToStartAction(loginData, history))
      setPassword({data:''})
   // history.push('/dashboard')

  }
  const handlechange =(e)=>{
        //console.log(e.target.value)
        setPassword({data:e.target.value})
  }
  useEffect(() => {
    const data = getItem('loginData')
    console.log(data[0].email)
    if (data[0].email) {
    setEmail(data[0].email)
    }
  }, [])

  return (

    <div className='container'>
      <div className="headline_text">
        <h3> Ready to start</h3>
      </div>
      <div className=' text-center form'>
        <form onSubmit={handleSubmit} className="">
              <input
                type="password"
                required
                placeholder="Enter password"
                name="password"
                value={password.data}
                maxLength={30}
                onChange={handlechange}
                autoFocus
              />

          <div className="next_btn">
          <Button variant="primary" type='submit'>Login</Button>{' '}
          </div>
        </form>
      </div>
    </div>

  )
}

export default Password
