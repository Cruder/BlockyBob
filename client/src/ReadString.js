import React from "react";

class ReadString extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Vote;

    // let drizzle know we want to watch the `myString` method
    if (drizzle.store.getState().drizzleStatus.initialized) {
      const dataKey = contract.methods.createElection.cacheSend(15623, {
        from: drizzleState.accounts[0]
      });

      // save the `dataKey` to local component state for later reference
      this.setState({ dataKey });
    }
  }

  render() {
    // get the contract state from drizzleState
    const { Vote } = this.props.drizzleState.contracts;
    //
    // // using the saved `dataKey`, get the variable we're interested in
    // const res = Vote.createElection[this.state.dataKey];
    // console.log(this.state.dataKey);
    // if it exists, then we display its value
    if (this.state.dataKey) {
      return <p>OK</p>
    }
    return <p>NOK</p>;
  }
}

export default ReadString;
