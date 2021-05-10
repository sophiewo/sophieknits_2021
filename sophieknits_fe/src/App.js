import './App.css';
import axios from 'axios';
import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      knittings: [],
      error: null,
    };
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/knittings');
      this.setState({ knittings: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, knitting } = this.state;

    if (error) {
      return <div> An error occured: {error.message} </div>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.knittings.map(knitting => (
            <li key={knitting.id}>{knitting.name}</li>
          ))}
        </ul>
      </div>
    );
  }

}

export default App;
