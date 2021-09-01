import { toast } from 'react-toastify'
import { API_URL_CONSTANT } from '../../constants/apiConstant'
import { postReqParam } from '../apiCall'
import { ROUTER_URL_CONSTANT } from '../../constants/routerUrlConstant'

import { deleteItem, setItem } from '../../utils/storage'
import { actionTypes } from '../../store/login'

export function ReadyToStartAction(params, history) {
  //deleteItem('token')
  //deleteItem('guideid')
  const url = API_URL_CONSTANT.login + API_URL_CONSTANT.login
  const regs = params
  return (dispatch) => {
    postReqParam(url, regs)
      .then((response) => {
     
        if (response.status === 200) {
          if (response.data.status === 'SUCCESS') {
            setItem('token', response.data.data)
            dispatch({
              type: actionTypes.READY_TO_START_ACTION,
              payload: response.data.data,
            })
            history.push(ROUTER_URL_CONSTANT.DASHBOARD)
          } else {
            toast.error(response.data.statusMessage)
            alert(response.data.statusMessage)
          }
        }
      })
      .catch((error) => {
      
        toast.error('Something went wrong..!')
        alert('Something went wrong..!')
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
}
