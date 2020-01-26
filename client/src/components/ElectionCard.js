import React from "react";
import {Link} from 'react-router-dom'

class ElectionCard extends React.Component {
    render() {
        const id = this.props.election;
        const link = '/elections/' + id
        return(
            <p>
                <Link to={link}>{id}</Link>
            </p>
        );
    }
}

export default ElectionCard;
