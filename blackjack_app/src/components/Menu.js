import React, { Component } from 'react'
import axios from 'axios';
import Hand from './Hand'

class DeckOfCards extends Component {
    state = {deck: [], deckId: "", img: [], inputId: ""}


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
            this.setState({img: res.data.cards})
            debugger         
        } catch (error) {
            this.setState({deck: []})
            console.log(error)         
        }
        
    }

    handleChange = async (e) => {
        this.setState({deckId: e.target.value})

    }

    handleClick = async (deckId) =>{
        this.fetchId()
        this.fetchCards(deckId)
        debugger
    } 

    handleSubmit = async (e, deckId) => {
        e.preventDefault()
        this.fetchCards(deckId)
    }


    render () {
        console.log(this.state.deckId)
        let cards = this.state.img.map(card => {
            debugger
            return <Hand img={card.image} key={card}/>
        })
        return (
            <div>
            <h2>BlackJack</h2>
            <button onClick={this.handleClick}>Generate Deck</button>
            <p>Deck Id:{this.state.deckId} </p>
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.deckId} onChange={this.handleChange} placeholder={"Insert Deck ID Here"}></input>
            <button>Draw</button>
            </form>
            <div className="displayCard">
            {cards}
            </div>
            </div>
        )
    }
}


export default DeckOfCards;