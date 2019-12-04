import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import App from "./App";
import Home from "../pages/Home";


const Root = ({ drizzle }) => (
    <Provider drizzle={drizzle}>
        <Router>
            <App>
                <Route exact path={"/"} component={Home} />
            </App>
        </Router>
    </Provider>
)




Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root