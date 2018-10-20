import React from 'react';
import { connect } from 'react-redux';

import './notification_system.css';

export default class NotificationSystem extends React.Component {

    componentDidMount() {
        console.log("Notification System mounted");
    }

    componentWillUnmount() {
    }
    
    render() {
        const numNotifications = this.props.notifications.length;
        console.log("NumNotifications", numNotifications);
        
        return (
            <div
                id="notification-system"
                style={{
                    height: `${numNotifications}rem`,
                    backgroundColor: "red",
                }} />
        )
    }
}

NotificationSystem.defaultProps = {
    notifications: [],
}

const mapStateToProps = ({
    notifications,
}) => ({
    notifications,
})

export const ConnectedNotificationSystem = connect(
    mapStateToProps,
)(NotificationSystem)