import React, {Component} from "react";
import "./Card.css";
export class Card extends Component {
  constructor(props) {
    super(props);
    let engle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transformStyle = `translate(${xPos}px , ${yPos}px) rotate(${engle}deg)`;
  }

  

  render() {
    return (
      <img
        style={{transform: this._transformStyle}}
        className="Card"
        src={this.props.image}
        alt={this.props.name}
      />
    );
  }
}

export default Card;
