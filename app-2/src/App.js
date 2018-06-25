import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stuff: ["Hammer", "Desk", "Plant", "Dog"]
    };
  }
  render() {
    let theDisplay = this.state.stuff.map((elem, indx) => {
      return <h2 key={indx}>{elem} </h2>;
    });
    return <div className="App">{theDisplay}</div>;
  }
}

export default App;
