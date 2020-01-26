import React from "react";
import drizzle from "../../store";

class CloseElectionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stackId: null };
        this.closeElection = this.closeElection.bind(this);
    }

    closeElection() {
        const { status, accounts } = this.props;
        const contract = drizzle.contracts.Vote;
        const electionId = this.props.electionId;

        const stackId = contract.methods.closeElection.cacheSend(electionId, {
            from: this.props.accounts[0]
        });

        this.setState({ stackId });
    }

    render() {
        return <button onClick={this.closeElection}>Clôturer l'élection</button>
    }
}

export default CloseElectionButton;
