import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import Root from "./Root";


class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                <p>Hello react!</p>
            </Fragment>
        )
    }
}

export default Home