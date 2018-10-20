import React from 'react';

import NavBar from '../components/common/top_nav_bar';

export default class BandDiscovery extends React.Component {

    render() {

        return (
            <div
                className="view"
                style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                }}>
                <div
                    style={{
                        width: "100%",
                        height: "10rem",
                        backgroundColor: "#3cb15f"
                    }}></div>
                <NavBar>
                    {"Bands"}
                    {"About"}
                </NavBar>
            </div>
        )
    }
}