import * as Type from './constants';

const notificationsListContainsId = (notifications, id) => {
    notifications.forEach(notification => {
        if (notification.id === id) return true;
    })

    return false;
}

const removeNotification = (notifications, id) => {
    const updatedNotifications = [];

    notifications.forEach(notification => {
        if (notification.id !== id) updatedNotifications.push(notification);
    })

    return updatedNotifications;
}

export default (state = [], action) => {
    switch (action.type) {
        case Type.ADD_NOTIFICATION:
            console.log("State received", state);
            if (notificationsListContainsId(state, action.payload.id)) return state;

            return [...state, action.payload];
        case Type.REMOVE_NOTIFICATION:
            if (!notificationsListContainsId(state, action.payload)) return state;

            return removeNotification(state, action.payload);
        default: 
            return state;
    }
}