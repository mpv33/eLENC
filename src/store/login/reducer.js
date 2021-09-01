import {
  LOGIN_ACTION,
  READY_TO_START_ACTION,
} from './actionTypes'


export const initialLoginState = {
  userDetails: {},
  loginDetails: {},
 
}

export default (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, userDetails: action.payload }
    case READY_TO_START_ACTION:
      return { ...state, loginDetails: action.payload }

    default:
      return state
  }
}
