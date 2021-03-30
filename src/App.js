import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SystemData from './components/SystemData';
import SystemDiagnosticsManager  from './components/SystemDiagnosticsManager ';
import SystemState  from './components/SystemState ';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={SystemData} exact/>
             <Route path="/SystemDiagnosticsManager " component={SystemDiagnosticsManager }/>
             <Route path="/systemstate " component={SystemState }/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
