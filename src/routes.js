 import { BrowserRouter, Switch, Route} from 'react-router-dom';
 import React from 'react'

import Login from './pages/Login/Login'
import Feed from './pages/Feed/Feed'


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </BrowserRouter>
  );
}