import React from "react";
import drizzle from "../../store";
import CandidateCard from "./CandidateCard";

class ElectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataKey: null, orderCandidate: 0, orderVote: {} };
        this.voteFor = this.voteFor.bind(this);
        this.renderCandidatesList = this.renderCandidatesList.bind(this);
    }

    voteFor(event){
        console.log("voteFor before", this.state.orderVote);
        const candidateSelected = event.target.getAttribute("candidate");
        let {orderCandidate} = this.state;
        const {orderVote} = this.state;
        const {elector} = this.props;
        let newOrderVote = orderVote;
        if(!orderVote[elector]){
            newOrderVote[elector] = [];
        }
        // console.table("lolo", newOrderVote, elector, newOrderVote[elector]);
        newOrderVote = Object.assign(newOrderVote, {
            [elector]: [...newOrderVote[elector] ,candidateSelected]
        });
        ++orderCandidate;
        this.setState({orderCandidate, orderVote: newOrderVote});
        console.log("voteFor after", this.state.orderVote);
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
                {this.renderCandidatesList(candidatesList)}
            </div>
        );
    }



    renderCandidatesList(candidatesList) {
        // console.log('candidate', candidatesList);
        const voteFor = this.props.elector ? this.state.orderVote[this.props.elector] : null;
        if (candidatesList) {
            return(
                <div>
                    {candidatesList.value.map((candidate, i) => {
                        return <div key={i}>
                            <CandidateCard key={i} candidate={candidate} />
                            {this.props.elector
                                ? voteFor
                                    ? !voteFor.find(itCandidate => itCandidate === candidate)
                                        ? <button onClick={this.voteFor} candidate={candidate}>Voter pour lui en {this.state.orderCandidate+1}e</button>
                                        : <span>Déjà voté en {voteFor.indexOf(candidate)+1}e</span>
                                    : <button onClick={this.voteFor} candidate={candidate}>Voter pour lui en {this.state.orderCandidate+1}e</button>
                                : <span>Choisissez un électeur dans un premier temps</span>
                            }
                        </div>
                    })}
                </div>
            );
        }
    }
}

export default ElectionList;
