import React from "react";

class CandidateCard extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    // console.log(this.props.candidate);
    return <span>
      {this.props.candidate}&nbsp;&nbsp;

    </span>;
  }
}

export default CandidateCard;
