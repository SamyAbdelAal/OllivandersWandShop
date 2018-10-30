import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import wands from "./wands";
import WandList from "./WandList";

class App extends Component {
  render() {
    return (
      <div className="container container-fluid">
        <div id="app" className="container-fluid">
          <div className="row">
            <WandList wands={wands} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
