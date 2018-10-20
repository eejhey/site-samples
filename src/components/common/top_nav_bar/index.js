import React from 'react';

import './top_nav_bar.css';

export default function TopNavBar(props) {

    const options = props.children;

    console.log("typeof options", typeof(options));

    const optionsLayout = typeof(options) === "string"
        ? (
            <div
                key={`nav-${options}`}
                className="top-nav-option">
                {options}
            </div>
        ) : options.map((opt) => (
            <div
                key={`nav-${opt}`}
                className="top-nav-option">
                {opt}
            </div>
    ))

    return (
        <div
            id="top-nav-bar">
            {optionsLayout}
        </div>
    )
}