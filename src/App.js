import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Navbar'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} ></Route>
        </Switch>
    </Router>
    )
  }
}

export default App;
