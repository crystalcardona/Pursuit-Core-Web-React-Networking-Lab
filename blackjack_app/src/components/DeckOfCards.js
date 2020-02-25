import React, { Component } from 'react'
import axios from 'axios';

class DeckOfCards extends Component {
    state = {deck: [], deckId: ""}
    fetchId =  async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            this.setState({deckId: res.data.deck_id})
            debugger     
        } catch (error) {
            
        }
    }
    fetchCards = async (deckId) => {
        try {
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/shuffle/`)
            debugger         
        } catch (error) {
            this.setState({deck: []})
            console.log(error)         
        }
        
    }

    render () {
        return (
            <div>
            <h2>BlackJack</h2>
            <input></input>
            <button onClick={this.fetchId}>Generate Deck</button>
            </div>
        )
    }
}



export default DeckOfCards;