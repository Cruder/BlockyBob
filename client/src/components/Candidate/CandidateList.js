import React from "react";
import drizzle from "../../store";
import CandidateCard from "./CandidateCard";

class ElectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataKey: null };
    }

    componentDidMount() {
        const Vote = drizzle.contracts.Vote;
        const dataKey = Vote.methods.getCandidates.cacheCall(this.props.electionId);
        this.setState({ dataKey });
    }

    render() {
        const {Vote} = drizzle.store.getState().contracts;
        const candidatesList = Vote.getCandidates[this.state.dataKey];

        return(
            <div>
                <h1>Liste éléctorale</h1>
                {this._renderCandidatesList(candidatesList)}
            </div>
        );
    }

    _renderCandidatesList(candidatesList) {
        console.log(candidatesList);
        if (candidatesList) {
            return(
                <div>
                    {candidatesList.value.map((candidate, i) => {
                        return (<CandidateCard key={i} candidate={candidate} />)
                    })}
                </div>
            );
        }
    }
}

export default ElectionList;
