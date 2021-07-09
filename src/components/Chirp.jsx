import React from 'react';

class Chirp extends React.Component {

    render() {
        return (
            <>
                <div className="chirp">
                    <img src={this.props.chirp.image}
                        alt="egg" width="75px" height="75px" />
                    <h3>@{this.props.chirp.username}</h3>
                    <p>{this.props.chirp.chirpText}</p>
                </div>
            </>
        );
    }


}

export default Chirp;