import React, { Component } from "react";

class WandCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.wand.imageUrl}
              alt={this.props.wand.core + " " + this.props.wand.wood}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{this.props.wand.core + " " + this.props.wand.wood}</span>
            </h5>
            <small className="card-text">
              length: {this.props.wand.length}
            </small>
          </div>
        </div>
      </div>
    );
  }
}
export default WandCard;
