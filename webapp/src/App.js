import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      name: ''
    }
  }

  componentDidMount() {

    fetch('http://localhost:8080/lessons/1', {
    	method: 'get'
    }).then(function(response) {
      return response.json();
    }).then((json) => {
    	this.setState({
        id: json.id,
        name: json.name
      })
    }).catch((err) => {
      this.setState({
        id: 'ID cannot be retrieved!',
        name: 'Name cannot be retrieved!'
      })
    });

  }

  render() {
    const { id, name } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to a React App running on Docker!</h2>
        </div>
        <p className="App-intro">
          This app will try to get Id and Name from "http://localhost:8080/lesson/1"!
          <br></br>
          <br></br>
          id: <i>{id}</i>
          <br></br>
          lesson: <i>{name}</i>
        </p>
      </div>
    );
  }
}

export default App;
