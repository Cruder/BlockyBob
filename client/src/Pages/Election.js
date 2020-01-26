import React, {Component, Fragment} from 'react'
import CandidateList from "../components/Candidate/CandidateList";
import {drizzleConnect} from "@drizzle/react-plugin";


class Election extends Component{
    render () {
        const id = this.props.match.params.id;
        return(
            <div className="App">
              <h1>Election {id}</h1>
              <CandidateList
                  electionId={id}
                  accounts={this.props.accounts}
                  state={this.props.Vote}
                  status={this.props.drizzleStatus}
              />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        accounts: state.accounts,
        Vote: state.contracts.Vote,
        drizzleStatus: state.drizzleStatus,
        web3: state.web3
    };
};

const ElectionContainer = drizzleConnect(Election, mapStateToProps);

export default ElectionContainer
