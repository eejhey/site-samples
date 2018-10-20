import React from 'react';

export default function Card(props) {

    return (
        <div
            style={{
                backgroundColor: props.color,
                ...props.style,
            }} />
    )
}