import React from "react";
import ElectionCard from "./ElectionCard";
import drizzle from "../store";

class ElectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataKey: null };
    }

    componentDidMount() {
            const Vote = drizzle.contracts.Vote;
            const dataKey = Vote.methods.listElections.cacheCall();
            this.setState({ dataKey });
    }

    render() {
        const {Vote} = drizzle.store.getState().contracts;
        const electionList = Vote.listElections[this.state.dataKey];

        return(
            <div>
                <h1>Toutes les élections</h1>
                {this._renderElectionList(electionList)}
            </div>
        );
    }

    _renderElectionList(electionList) {
        if (electionList) {
            return(
                <div>
                    {electionList.value.map((election, i) => {
                        return (<ElectionCard key={i} election={election} />)
                    })}
                </div>
            );
        }
    }
}

export default ElectionList;
