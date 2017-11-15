import React, { Component } from 'react';
import './App.css';
import InteractiveRating from './components/interactiveRating';
import NonInteractiveRating from './components/noninteractiveRating';
import Waterfall from './components/waterfall';
import TodoContainer from './components/TodoContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InteractiveRating starRange={5} inActiveColor="#E3E6E9" activeColor="#4A90E2"/>
        <NonInteractiveRating starRange={5} starNumbers={4} inActiveColor="#E3E6E9" activeColor="#4A90E2"/>
        <Waterfall/>
        <TodoContainer/>
      </div>
    );
  }
}

export default App;
