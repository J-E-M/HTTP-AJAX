import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor() {
      super();
      this.state = {
        friends: []
      }
    }

    componentDidMount() {
        axios
          .get("http://localhost:5000/friends")
          .then(res => this.setState({ friends: res.data }))
          .catch(err => console.log(err));
      }

  render() {
    return (
      <div className="App">
      {this.state.friends.map(friend => (<div key={friend.id}><h1>{friend.name}</h1><h2>{friend.age}</h2><h2>{friend.email}</h2></div>))}
      </div>
    );
  }
}

export default App;
