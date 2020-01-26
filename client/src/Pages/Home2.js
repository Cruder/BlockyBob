import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import Root from "../components/Root";
import * as PropTypes from "prop-types";
import { drizzleConnect } from "@drizzle/react-plugin";

class Home2 extends Component{

    render(){
        return (
            <Fragment>
                <p>Hello guy!</p>
            </Fragment>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log("try connect", state);
    return {
        // accounts: state.accounts,
        Vote: state.contracts.Vote,
        drizzleStatus: state.drizzleStatus,
    };
};

const Home2Container = drizzleConnect(Home2, mapStateToProps);


export default Home2Container