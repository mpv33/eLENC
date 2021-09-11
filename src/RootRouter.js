import { Redirect, Route, Switch ,BrowserRouter as Router, } from 'react-router-dom';
import { ROUTER_URL_CONSTANT } from './constants/routerUrlConstant';
import { getItem, } from './utils/storage';
import Home from './components/home/Home'
import FAHome from './components/funAcademy/FAHome'
import SKHome from './components/sdeKit/SKHome'
import EHome from './components/entertainment/EHome'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import MBHome from './components/mBook/MBHome'
import SHome from './components/shopping/SHome'




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
      <Route exact path={ROUTER_URL_CONSTANT.LOGIN} component={Login} />
      <Route exact path={ROUTER_URL_CONSTANT.SIGNUP} component={Signup} />
      <AuthGuard exact path={ROUTER_URL_CONSTANT.ENTERTAINMENT} component={EHome} />
      <AuthGuard exact path={ROUTER_URL_CONSTANT.FUNACADEMY} component={FAHome} />
      <AuthGuard exact path={ROUTER_URL_CONSTANT.SDEKIT} component={SKHome} />
      <AuthGuard exact path={ROUTER_URL_CONSTANT.SHOPPING} component={SHome} />
      <AuthGuard exact path={ROUTER_URL_CONSTANT.SOCIALNETWORK} component={MBHome} />
     
    </Switch>
 
  
   
   


  );
}

export default RootRouter;
