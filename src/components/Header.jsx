import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div id="header-container" className="row">
                <div className="col-md-4"></div>
                <h1 id="header-title" className="col-md-4">
                    Chirper
                </h1>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

export default Header;