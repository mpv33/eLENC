import { toast } from 'react-toastify'
import { API_URL_CONSTANT } from '../../constants/apiConstant'
import { getReqParam } from '../apiCall'
import { ROUTER_URL_CONSTANT } from '../../constants/routerUrlConstant'

import { setItem } from '../../utils/storage'
import { actionTypes } from '../../store/login'

export function LoginAction(params, history) {
  console.log(':::::::::::',params.email)
  const url =API_URL_CONSTANT.baseUrl + API_URL_CONSTANT.login
  return (dispatch) => {
   
    getReqParam(url)
      .then((response) => {
    
        if (response.status === 200) {
         
          const responseData = response.data.data
          console.log(responseData)

          if (!responseData) {
            toast.error(response.data.statusMessage)
            alert(response.data.statusMessage)
          }
       
          if (responseData) {
            setItem('loginData', responseData)
            dispatch({
              type: actionTypes.LOGIN_ACTION,
              payload: response.data.data,
            })
            dispatch({ type: actionTypes.LOGIN_ACTION, payload: params.email })
            history.push(ROUTER_URL_CONSTANT.MAIN)
          }
        }
      })
      .catch((error) => {
        toast.error(error)
        // eslint-disable-next-line no-console
        console.log(error)
        // ErrorAlert(error, null);
      })
    }
}




