
import React from 'react'
import axios from 'axios';
import Hand from './Hand'
import './Menu.css'

class Menu extends React.Component {
    state = { deckId: "", img: [], }


    fetchId =  async () => {
        try {
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            this.setState({deckId: res.data.deck_id})
        } catch (error) {
            this.setState({deckId: ""})
            console.log(error)  
        }
    }
    
    fetchCards = async (deckId, drawCount = 2) => {
        try {
            deckId = this.state.deckId
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawCount}`)
            this.setState({img: res.data.cards})
            debugger         
        } catch (error) {
            this.setState({img:[]})
            console.log(error)         
        }
        
    }


    handleChange = async (e) => {
        this.setState({deckId: e.target.value})

    }

    handleClick = async (deckId, drawCount = 2) =>{
        this.fetchId()
        debugger
        this.fetchCards(deckId, drawCount)
        debugger
    } 

    handleSubmit = async (e, deckId, drawCount = 2) => {
        e.preventDefault()
        this.fetchCards(deckId, drawCount)
    }


    render () {
        console.log(this.state.deckId)
        const {deckId} = this.state
        let cards = this.state.img.map(card => {
            debugger
            return <Hand img={card.image} key={card}/>
        })
        return (
            <div className="menu">
            <h2>BlackJack</h2>
            <button onClick={this.handleClick}>Generate Deck</button>
            <p>Deck Id:{deckId} </p>
            <label>
            Input Existing Deck
            </label>
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={deckId} onChange={this.handleChange} placeholder={"Insert Deck ID Here"}></input>
            <button>Draw</button>
            </form>
            <div className="displayCard">
            {cards}
            </div>
            <div className="hit">
            <button onClick={(e) => this.fetchCards(deckId, this.drawCount = 1)}>Hit Me</button>
            </div>
            </div>
        )
    }
}




export default Menu;