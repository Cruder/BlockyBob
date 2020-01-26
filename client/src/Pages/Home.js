import React, {Component, Fragment} from 'react'
import ElectionList from "../components/ElectionList";
import CreateElectionButton from "../components/CreateElectionButton";
import {drizzleConnect} from "@drizzle/react-plugin";
import drizzle from "../store";

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
                />

                <CreateElectionButton
                    accounts={this.props.accounts}
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