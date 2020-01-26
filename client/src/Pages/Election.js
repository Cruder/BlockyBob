import React, {Component, Fragment} from 'react'
import CandidateList from "../components/Candidate/CandidateList";
import CreateCandidateButton from "../components/Candidate/CreateCandidateButton";
import {drizzleConnect} from "@drizzle/react-plugin";
import drizzle from "../store";
import CloseElectionButton from "../components/Candidate/CloseElectionButton";
import Result from "../components/Candidate/Result";

class Election extends Component{
    constructor(props, context){
        super(props);
        this.state = { isActive: null, elector: null};
        this.selectElector = this.selectElector.bind(this)
    }

    selectElector(event){
        if(event.target.value !== "")
            this.setState({elector: event.target.value})
    }

    render () {
        const id = this.props.match.params.id;
        return(
            <div className="App">
              <h1>Election {id}</h1>

                <p>I am
                    <select onChange={this.selectElector}>
                        <option value="">-- Choose an elector --</option>
                          {Object.values(this.props.accounts).map((account, i) => (
                              <option value={account} key={i}>{account}</option>
                          ))}
                    </select>
                </p>

                <CandidateList
                    electionId={id}
                    accounts={this.props.accounts}
                    state={this.props.Vote}
                    status={this.props.drizzleStatus}
                    elector={this.state.elector}
                />
                {this._renderActions(id)}

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
        console.log('drizzle', drizzle);
        const Vote = drizzle.contracts.Vote;
        const dataKey = Vote.methods.isElecttionActive.cacheCall(this.props.match.params.id);
        console.log('dataKey', dataKey);
        this.setState({ dataKey });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    _renderActions(id) {
        const {Vote} = drizzle.store.getState().contracts;
        this.state.isActive = Vote.isElecttionActive[this.state.dataKey];
        console.log('isActive', this.state.isActive);
        if (this.state.isActive === undefined)
            return '';

        if (this.state.isActive.value) {
            return(
                <div>
                      <CreateCandidateButton
                          accounts={this.props.accounts}
                          electionId={id}
                      />

                      <CloseElectionButton
                          accounts={this.props.accounts}
                          electionId={id}
                      />
                </div>
            );
        }

        return(
            <Result electionId={id} />
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
