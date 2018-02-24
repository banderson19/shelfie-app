import React, { Component } from 'react';
import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src='./../img/download.shelfie.logo.png'className="img" alt=''></img>
          <h1 className="App-title">SHELFIE APP</h1>
        </header>
        
        {routes}
      </div>
    );
  }
}

export default App;