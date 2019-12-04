import React, { Component } from 'react';
import CreateElectionButton from "../Elections/CreateElectionButton";
import ElectionList from "../Elections/ElectionList";
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, drizzleState: null };
  }

  render() {
    if (this.state.loading) return "";
    return (
      <div className="App">
        <ElectionList
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
          />

        <CreateElectionButton
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    );
  }

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

}

export default Home;
