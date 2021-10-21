import { Redirect, Route, Switch ,BrowserRouter as Router, } from 'react-router-dom';
import { ROUTER_URL_CONSTANT } from './constants/routerUrlConstant';
import { getItem, } from './utils/storage';
import Home from './components/home/Home'
import FAHome from './components/funAcademy/FAHome'
import SKHome from './components/sdeKit/SKHome'
import EHome from './components/entertainment/EHome'
import LogIn from './components/auth/Login'
import SignUp from './components/auth/Signup'
import MBHome from './components/mBook/MBHome'
import SHome from './components/shopping/SHome'
import GameHome from './components/games/GameHome';




const CheckAuth = () => {
  const session = getItem('token')
  if (session) {
    return true
  }
  return true
}
const AuthGuardRoute = () => {
  return ({ component: Component, ...rest }) => {
    return (
      <div>
        <Route
          {...rest}
          render={(props) =>
            CheckAuth() ? <Component {...props} /> : <Redirect to="/login" />
          }
        />
      </div>
    )
  }
}


function RootRouter() {
  const AuthGuard = AuthGuardRoute()
  return (
    
    

    <Switch>
      <Route exact path={ROUTER_URL_CONSTANT.MAIN} component={Home}/>
      <Route  path={ROUTER_URL_CONSTANT.LOGIN} component={LogIn} />
      <Route  path={ROUTER_URL_CONSTANT.SIGNUP} component={SignUp} />
      <AuthGuard  path={ROUTER_URL_CONSTANT.ENTERTAINMENT} component={EHome} />
      <AuthGuard  path={ROUTER_URL_CONSTANT.FUNACADEMY} component={FAHome} />
      <AuthGuard  path={ROUTER_URL_CONSTANT.SDEKIT} component={SKHome} />
      <AuthGuard  path={ROUTER_URL_CONSTANT.SHOPPING} component={SHome} />
      <AuthGuard  path={ROUTER_URL_CONSTANT.SOCIALNETWORK} component={MBHome} />
      <AuthGuard  path={ROUTER_URL_CONSTANT.Games} component={GameHome} />
     
    </Switch>
 
  
   
   


  );
}

export default RootRouter;
