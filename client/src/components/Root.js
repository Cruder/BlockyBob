import * as React from 'react'
import * as PropTypes from 'prop-types'
import { DrizzleProvider, DrizzleContext } from '@drizzle/react-plugin'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import App from "./App";
import Home from "../Pages/Home";
import Home2 from "../Pages/Home2";
import { LoadingContainer } from "@drizzle/react-components";



const Root = (props, context) => {
    console.log("Root comp", props);
    console.log("Root comp", context);
    return (
    <LoadingContainer>
        <Router>
            <App>
                <Route exact path="/" component={Home}/>
                <Route exact path="/dudu" component={Home2} />
            </App>
        </Router>
    </LoadingContainer>
    )
}


export default Root

