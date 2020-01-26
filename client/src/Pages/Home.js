import React, {Component, Fragment} from 'react'
import ElectionList from "../components/ElectionList";
import CreateElectionButton from "../components/CreateElectionButton";
import {drizzleConnect} from "@drizzle/react-plugin";


class Home extends Component{
    constructor(props, context){
        super(props);
        console.log("home",props);
        console.log("home",context);
    }

    render() {
        return (
            <div className="App">
                <ElectionList
                    accounts={this.props.accounts}
                    // contract={this.props.drizzle.contracts.Vote}
                    state={this.props.Vote}
                    status={this.props.drizzleStatus}
                />

                <CreateElectionButton
                    accounts={this.props.accounts}
                    // contract={this.props.drizzle.contracts.Vote}
                    status={this.props.drizzleStatus}
                />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    // console.log("try connect slug", state);
    // console.log("try connect plug", ownProps);
    // const t = ownProps.store.getState();
    // console.log("try connect clug", t);
    return {
        accounts: state.accounts,
        Vote: state.contracts.Vote,
        drizzleStatus: state.drizzleStatus,
        web3: state.web3
    };
};

const HomeContainer = drizzleConnect(Home, mapStateToProps);

export default HomeContainer