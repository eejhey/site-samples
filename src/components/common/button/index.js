import React from 'react';
import './button.css';

export default function(props) {
    return (
        <button
            className="button">
            {props.children}   
        </button>
    )
}