import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import drizzle, {drizzleStore} from "../store";

class Provider extends Component {

    // you must specify what you’re adding to the context
    static childContextTypes = {
        drizzle: PropTypes.object.isRequired,
        drizzleStore: PropTypes.object.isRequired
    }

    constructor(context, props) {
        super(context, props)
    }

    getChildContext() {

        return { drizzle, drizzleStore }
    }

    render() {
        // `Children.only` enables us not to add a <div /> for nothing
        return Children.only(this.props.children)
    }
}

export default Provider