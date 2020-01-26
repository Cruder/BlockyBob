import React from "react";
import ElectionCard from "./ElectionCard";

class ElectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataKey: null };
  }

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.Vote;

    if (drizzle.store.getState().drizzleStatus.initialized) {
      const dataKey = contract.methods.listElections.cacheCall();
      this.setState({ dataKey });
    }
  }

  render() {
    const { Vote } = this.props.drizzleState.contracts;

    let electionList = Vote.listElections[this.state.dataKey];
    if (electionList) {
      return(
        <div>
          {electionList.value.map((election, i) => {
            return (<ElectionCard key={i} election={election} />)
          })}
        </div>
      );
    }

    return "Elections";
  }
}

export default ElectionList;
