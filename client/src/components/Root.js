import * as React from 'react'
import * as PropTypes from 'prop-types'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import App from "./App";
import Home from "./Home";
import Home2 from "./Home2";

const Root = ({ store }) => (
    // <Provider store={store}>

        <Router>
            <App>
                <Route exact path="/" component={Home} store={store}/>
                <Route exact path="/dudu" component={Home2} store={store}/>
            </App>
        </Router>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root

