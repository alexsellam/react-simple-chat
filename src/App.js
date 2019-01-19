import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
class App extends Component {
  state = {
    messages: {},
    pseudo : this.props.match.params.pseudo
  }

  addMessage = message => {
    const message = {...this.state.message}
    messages[`message${Date.now()}`] = message 
    this.setState({ messages })
  }
  render () {
    return (
      <div className='box'>
        <div className='messages'>
          <Message />
          <Message />
        </div>
        <Formulaire 
        addMessage={this.addMessage}
        pseudo={this.state.pseudo} />
      </div>
    )
  }
}

export default App
