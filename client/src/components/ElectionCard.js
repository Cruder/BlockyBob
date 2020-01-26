import React from "react";

class ElectionCard extends React.Component {
    render() {
        const id = this.props.election;
        const link = '/elections/' + id
        return(
            <p>
                <a href={link}>{id}</a>
            </p>
        );
    }
}

export default ElectionCard;
