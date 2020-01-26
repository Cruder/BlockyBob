import React from "react";
import drizzle from "../store";

class CreateElectionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stackId: null };
    this.createElection = this.createElection.bind(this);
  }

  createElection() {
    console.log("create elec", this.props);
    const { status, accounts } = this.props;
    const contract = drizzle.contracts.Vote;

    const stackId = contract.methods.createElection.cacheSend(Date.now(), {
      from: this.props.accounts[0]
    });

    this.setState({ stackId });
console.log("create end", stackId);

  }

  render() {
    return <button onClick={this.createElection}>New Elections</button>

  }
}

export default CreateElectionButton;
