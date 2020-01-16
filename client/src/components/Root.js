import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./App";
import Home from "../pages/Home";


const Root = ({ store }) => (
    <Provider store={store}>
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