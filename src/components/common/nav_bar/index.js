import React from 'react';

export default function NavBar(props) {

    const options = props.children;

    const optionsLayout = options.map((opt) => (
        <div
            key={`nav-${opt}`}
            className="nav-option">
            {opt}
        </div>
    ))

    return (
        <div
            id="nav-bar">
            {optionsLayout}
        </div>
    )
}