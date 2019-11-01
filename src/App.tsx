
import React from 'react';
import './App.css';
import { AppRoot } from './Activities/Index';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {AppContext} from "./Context";

interface State{
 
}

class App extends React.Component<{}, State>{

  render(){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/">
              <AppContext.Provider value={{store:{email: "", token:"", id: ""}}}>
                <AppRoot/>
              </AppContext.Provider>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
