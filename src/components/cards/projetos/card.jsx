import React from 'react';

const card = props => {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-image">
                    <img src="images/sample-1.jpg"></img>
                    <span className="card-title">Card Title</span>

                    <div className="card-content">
                        <p>Texto</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card;