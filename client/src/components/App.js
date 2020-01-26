import * as React from 'react';
import {Link} from 'react-router-dom'

const App = ({children}) => {

    return (
        <React.Fragment>
            <div><Link to={'/'}>Home</Link>[]<Link to={'/dudu'}>Dudu</Link></div>
            <div className={"grid-container"}>
                    {children}
            </div>
        </React.Fragment>
    )
}


export default App;