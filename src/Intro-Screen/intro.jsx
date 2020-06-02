import React from 'react';

const Intro = () => {

    let present = ['${', '}','`','`']


    return (
        <div className="greeting-screen">

            <div className="before-text">{present[2]}</div>

            <div className="container-text">
                <p className="hello">Hello</p>
            </div>

    <div className="container-symbol-1">{present[0]}</div>

            <ul className="container-list">
                <li className="list-item">Future job</li>
                <li className="list-item">Co-Worker</li>
                <li className="list-item">Friend</li>
                <li className="list-item">User</li>
                <li className="list-item">World</li>
            </ul>

            <div className="container-symbol-2">{present[1]}</div>

            <div className="after-text">{present[2]}</div>

        </div>
    )
}

export default Intro;