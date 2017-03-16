import React, { Component } from 'react';
import './App.css';
import CreateThought from './createThought/createThought';
import { ThoughtList } from './thoughtList/thoughtList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: []
    };
  }

  createThought(thought) {
    Object.assign(thought, { id: this.state.thoughts.length });
    this.state.thoughts.push(thought);
    this.setState({ thoughts: this.state.thoughts });
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>ThoughtBox</h2>
        </div>
        <CreateThought createThought={this.createThought.bind(this)} />
        <div>
          <ThoughtList thoughtList={this.state.thoughts} />
        </div>
      </div>
    );
  }
}

export default App;
