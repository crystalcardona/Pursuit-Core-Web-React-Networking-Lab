import React, { Component } from 'react'
import axios from 'axios';
import Hand from './Hand'

class DeckOfCards extends Component {
    state = {deck: [], deckId: "", img: []}

    componentDidMount() {
        this.fetchId()
    }

    fetchId =  async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            this.setState({deckId: res.data.deck_id})
        } catch (error) {
            this.setState({deckID: ""})
            console.log(error)  
        }
    }
    
    fetchCards = async (deckId) => {
        try {
            deckId = this.state.deckId
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
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
            <input type="text"></input>
            <Hand img={this.state.img} alt={""}/>
            <button onClick={this.fetchCards}>Generate Deck</button>
            </div>
        )
    }
}


export default DeckOfCards;