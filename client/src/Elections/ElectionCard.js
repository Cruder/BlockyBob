import React from "react";

class ElectionCard extends React.Component {
  render() {
    console.log(this.props.election);
    return <p>{this.props.election}</p>;
  }
}

export default ElectionCard;
