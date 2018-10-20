import React from 'react';

import Team from '../containers/team';

export default class Home extends React.Component {

    // state = {
    //     isFocused: false,
    // }

    // onEnter = () => {
    //     if (!this.state.isFocused) {
    //         this.setState({isFocused: true});
    //     }
    // }

    // onLeave = () => {
    //     if (this.state.isFocused) {
    //         this.setState({isFocused: false});
    //     }
    // }

    render() {

        return (
            <div
                style={{
                    backgroundColor: "#333",
                    width: "100%",
                    height: "100%",
                }}>
                <Team 
                    width="100%"
                    height="100%" />
                </div>
        )
    }
}
