import React from 'react';
import './App.css';
import DeckOfCards from './components/DeckOfCards'

class App extends React.Component {
  state =  {deckId: ""}
  render () {
    return (
      <div className="App">
      <DeckOfCards />   
      </div>
    );

  }
}

export default App;
