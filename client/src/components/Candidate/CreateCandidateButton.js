import React from "react";
import drizzle from "../../store";

class CreateCandidateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stackId: null };
    this.createCandidate = this.createCandidate.bind(this);
  }

  createCandidate() {
    console.log("create candidate", this.props);
    const { status, accounts } = this.props;
    const contract = drizzle.contracts.Vote;
    const electionId = this.props.electionId;

    const stackId = contract.methods.pushCandidate.cacheSend(Date.now(), electionId, {
      from: this.props.accounts[0]
    });

    this.setState({ stackId });
    console.log("create end", stackId);

  }

  render() {
    return <button onClick={this.createCandidate}>Ajouter un candidat</button>

  }
}

export default CreateCandidateButton;
