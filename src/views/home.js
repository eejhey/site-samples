import React from 'react';

import Button from '../components/common/button';

export default class Home extends React.Component {

    onBandDiscoveryClick = (event) => {
        this.props.history.push("/band-discovery");
    }

    render() {

        return (
            <div
                className="view"
                style={{
                    backgroundColor: "#333",
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <div
                    style={{
                        width: "50",
                    }}>
                    <div
                        style={{
                            margin: "1rem",
                        }}>{"Choose a sample site"}</div>
                    <Button
                        onClick={this.onBandDiscoveryClick}>
                        Band Discovery
                    </Button>   
                </div>
            </div>
        )
    }
}
