import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Navbar'
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} ></Route>
        </Switch>
    </Router>
    )
  }
}

export default App;
