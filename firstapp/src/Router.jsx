import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Contactus from './components/Contactus';
import {Router,Route,Switch} from 'react-router-dom';
import App from "./App";
const RouterApp =()=> {

    return (
      <div>
          <Header></Header>
          <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/registration" component={Register} exact/>
                <Route exact path="/login" component={Login} />
                <Route path="/contactus" component={Contactus} exact/>
            </Switch>
        </App>
      </div>
    );
}
export default RouterApp;
