import * as React from 'react';

const App = ({children}) => {
    return (
        <React.Fragment>
            <div className={"grid-container"}>
                {children}
            </div>
        </React.Fragment>
    )
}

export default App;
