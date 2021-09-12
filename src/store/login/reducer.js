import {
  LOGIN_ACTION,
} from './actionTypes'


export const initialLoginState = {
  userDetails: {},
  loginDetails: {},
 
}

export default (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, userDetails: action.payload }

    default:
      return state
  }
}
