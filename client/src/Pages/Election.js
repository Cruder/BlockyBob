import React, {Component, Fragment} from 'react'
import CandidateList from "../components/Candidate/CandidateList";
import {drizzleConnect} from "@drizzle/react-plugin";
import drizzle from "../store";

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

    componentDidMount() {
        // subscribe to changes in the store
        this.unsubscribe = drizzle.store.subscribe(() => {

            // every time the store updates, grab the state from drizzle
            const drizzleState = drizzle.store.getState();

            // check to see if it's ready, if so, update local component state
            this.setState({drizzleState});
            console.log("sub state", drizzleState);
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
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
