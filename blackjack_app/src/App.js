import React from 'react';
import './App.css';
import Menu from './components/Menu'

class App extends React.Component {
  state =  {deckId: ""}
  render () {
    return (
      <div className="App">
      <Menu />   
      </div>
    );

  }
}

export default App;
