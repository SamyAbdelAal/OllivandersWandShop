import React, { Component } from "react";
import WandCard from "./WandCard";

class WandList extends Component {
  render() {
    let wandRows = this.props.wands.map(wand => <WandCard wand={wand} />);
    return (
      <div className="content col-10">
        <div className="wands">
          <h3>Wands</h3>
          <div className="row">{wandRows}</div>
        </div>
      </div>
    );
  }
}
export default WandList;
