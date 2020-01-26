import * as React from 'react';
import {Link} from 'react-router-dom'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <React.Fragment>
                <div><Link to={'/'}>Home</Link></div>
                <div className={"grid-container"}>
                        {this.props.children}
                </div>
            </React.Fragment>
        )
    }

}


export default App;
