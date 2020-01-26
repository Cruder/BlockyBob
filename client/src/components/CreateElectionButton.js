import React from "react";
import {ContractForm} from "@drizzle/react-components";

class CreateElectionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stackId: null };
    this.createElection = this.createElection.bind(this);
  }

  createElection() {
    console.log("create elec", this.props);
    const { contract, status, accounts } = this.props;

    if (status.initialized) {
      const stackId = contract.methods.createElection.cacheSend(Date.now(), {
        from: this.props.accounts[0]
      });

      this.setState({ stackId });
    }
  }

  render() {
    return <p>create elections</p>;

  }
}

export default CreateElectionButton;
