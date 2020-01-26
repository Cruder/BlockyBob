import React from "react";
import ElectionCard from "./ElectionCard";

class ElectionList extends React.Component {
  constructor(props) {
    super(props);
    console.log("list", props);
    this.state = { dataKey: null };
  }

  componentDidMount() {
    // const { drizzle, drizzleState } = this.props;
    // const contract = this.props.contract;
    //
    // if (this.props.status.initialized) {
    //   const dataKey = contract.methods.listElections.cacheCall();
    //   console.log(dataKey);
    //   this.setState({ dataKey });
    // }
  }

  render() {
    // const Vote  = this.props.contract;

    // let electionList = Vote.listElections[this.state.dataKey];
    // if (electionList && false) {
    //   return(
    //     <div>
    //       {electionList.value.map((election, i) => {
    //         return (<ElectionCard key={i} election={election} />)
    //       })}
    //     </div>
    //   );
    // }
    return "Elections";
  }
}

export default ElectionList;
