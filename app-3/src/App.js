import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      stuff: ["dog", "cat", "log", "potato"],
      empty: ""
    };
  }

  containerFind(val) {
    this.setState({
      empty: val
    });
    // alert(val);
  }

  render() {
    console.log(this.state.empty);
    let allStuff = this.state.stuff
      .filter(e => e.includes(this.state.empty))
      .map((e, i) => {
        return (
          <div key={i}>
            <h2>{e}</h2>
          </div>
        );
      });
    return (
      <div>
        <input onChange={event => this.containerFind(event.target.value)} />
        {allStuff}
      </div>
    );
  }
}

export default App;
