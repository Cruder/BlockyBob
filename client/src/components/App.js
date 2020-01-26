import * as React from 'react';
import {Link} from 'react-router-dom'
import * as PropTypes from "prop-types";
import Root from "./Root";

const StoreContext = React.createContext();

const App = ({children}) => {
    // console.log("popo");
    // console.log("child", children);

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