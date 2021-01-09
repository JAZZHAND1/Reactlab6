import React from 'react'
import SignUp from './components/Signup';
import Signup from './components/Signup';
import {BrowserRouter,Link,Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UpdateProfile from './components/UpdateProfile';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <PrivateRoute path ='/' exact component={Dashboard}/>
    <Route path ='/login' exact component={Login}/>
    <Route path ='/signup' exact component={SignUp}/>
    <PrivateRoute path ="/update-profile" exact component={UpdateProfile} />
    </BrowserRouter>
  );
}

export default App;
