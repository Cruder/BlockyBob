import React from "react";

class CreateElectionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stackId: null };
    this.createElection = this.createElection.bind(this);
  }

  createElection() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Vote;

    if (drizzle.store.getState().drizzleStatus.initialized) {
      const stackId = contract.methods.createElection.cacheSend(Date.now(), {
        from: drizzleState.accounts[0]
      });

      this.setState({ stackId });
    }
  }

  render() {
    return <button onClick={this.createElection}>New election</button>;
  }
}

export default CreateElectionButton;
