import React from 'react';
import PropTypes from 'prop-types';

import PlayerCard from '../components/common/info_card';
import Margin from '../components/common/margin';

import { DefaultAvatar } from '../images/stock';

export default class Team extends React.Component {

    players = [
        {
            name: "Player A",
            photo: DefaultAvatar,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Player B",
            photo: DefaultAvatar,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Player C",
            photo: DefaultAvatar,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Player D",
            photo: DefaultAvatar,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            name: "Player E",
            photo: DefaultAvatar,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ]

    state = {
        focusedIndex: -1,
    }

    generateDescription = (player) => {
        return (
            <div
                style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                }}>
                <div
                    style={{
                        display: "flex",
                        alignSelf: "center",
                    }}>
                    {player.name}
                </div>
                <Margin
                    height="2rem" />
                {player.description}
            </div>
        )
    }

    onPlayerCardActive = (index) => {
        if (this.state.focusedIndex < 0) {
            this.setState({focusedIndex: index});
        }
    }

    onPlayerCardActiveLeave = () => {
        if (this.state.focusedIndex > -1) {
            this.setState({focusedIndex: -1});
        }
    }

    onPlayerCardClicked = (index) => {
        const { focusedIndex } = this.state;

        if (focusedIndex === index) {
            this.setState({focusedIndex: -1});
        } else {
            this.setState({focusedIndex: index});
        }
    }

    render() {
        const {
            width,
            height,
        } = this.props;

        const players = this.players.map((player, index) => {
            const {
                focusedIndex,
            } = this.state;

            const focused = focusedIndex === index;

            return (
                <PlayerCard
                    key={`card-${index}`}
                    name={player.name}
                    image={player.photo}
                    focused={focused}
                    onMouseEnter={() => this.onPlayerCardActive(index)}
                    onMouseLeave={this.onPlayerCardActiveLeave}
                    onClick={() => this.onPlayerCardClicked(index)}
                    text={this.generateDescription(player)}
                    style={{
                        margin: "1rem",
                    }} />
            )
        });

        return (
            <div
                style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    width,
                    height,
                }}>
                {players}
            </div>
        )
    }
}

Team.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
}