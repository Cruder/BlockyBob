import React from "react";

class CandidateCard extends React.Component {
  render() {
    console.log(this.props.candidate);
    return <p>{this.props.candidate}</p>;
  }
}

export default CandidateCard;
