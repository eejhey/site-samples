import React from 'react';
import PropTypes from 'prop-types';

import { random } from '../../../utils/utils';

import Card from '../card';

import './info_card.css';

export default function InfoCard (props) {
    const {
        name,
        image,
        text,
        focused,
        onMouseEnter,
        onMouseLeave,
        onClick,
    } = props;

    return (
        <div
            id={`info-card-${name}-${random()}`}
            className="info-card-container"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            style={{
                ...props.style,
            }}>
            <Card
                color="black"
                style={{
                    position: "absolute",
                    top: "0px",
                    width: "100%",
                    height: "100%",
                    zIndex: "-1",
                }} />
            <Image
                focused={focused}
                src={image}
                alt={name} />
            <Description
                focused={focused}
                text={text} />
        </div>
    )
}


const Description = (props) => {
    const focused = props.focused ? "focused" : "";

    return (
        <div
            className={`info-card-description ${focused}`}>
            {props.text}
        </div>
    )
}

const Image = (props) => {
    const focused = props.focused ? "focused" : "";

    return (
        <img 
            className={`info-card-img ${focused}`}
            alt={props.alt}
            src={props.src} />
    )
}

InfoCard.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
}