import React from 'react';

const Chirp = (props) => {
    return (
        <>
            <div className="chirp">
                <img src={props.chirp.image}
                    alt="egg" width="75px" height="75px" />
                <h3>@{props.chirp.username}</h3>
                <p>{props.chirp.chirpText}</p>
            </div>
        </>
    );
};

export default Chirp;