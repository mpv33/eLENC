import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { loginReducer } from './login'


const appReducer = combineReducers({
 
  user: loginReducer,
  
})

const allStoreEhancers= compose(
  applyMiddleware(thunk),
  devToolsEnhancer({})
)


const rootReducer = (state, action) => {
 
  return appReducer(state, action);
};


const store = createStore(rootReducer, allStoreEhancers)


export default store
