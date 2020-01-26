import React, {Component, Fragment} from 'react'
import ElectionList from "../components/ElectionList";
import CreateElectionButton from "../components/CreateElectionButton";
import {drizzleConnect} from "@drizzle/react-plugin";


class Election extends Component{
    render () {
        const id = this.props.match.params.id;
        return(
            <div>
              <h1>Election {id}</h1>
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
