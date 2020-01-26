import React from "react";
import drizzle from "../../store";
import CandidateCard from "./CandidateCard";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataKey: null };
    }

    componentDidMount() {
        const Vote = drizzle.contracts.Vote;
        const dataKey = Vote.methods.getResult.cacheCall(this.props.electionId);
        this.setState({ dataKey });
    }

    render() {
        const {Vote} = drizzle.store.getState().contracts;
        const results = Vote.getResult[this.state.dataKey];
        console.log('results', results);

        // {this._renderCandidatesList(candidatesList)}
        return(
            <div>
                <h1>Résultats</h1>
            </div>
        );
    }

    // _renderCandidatesList(candidatesList) {
    //     console.log('candidate', candidatesList);
    //     if (candidatesList) {
    //         return(
    //             <div>
    //                 {candidatesList.value.map((candidate, i) => {
    //                     return (<CandidateCard key={i} candidate={candidate} />)
    //                 })}
    //             </div>
    //         );
    //     }
    // }
}

export default Result;
