import * as Type from './constants';

export const addNotification = (notification) => ({
    type: Type.ADD_NOTIFICATION,
    payload: notification,
})

export const removeNotification = (notificationId) => ({
    type: Type.REMOVE_NOTIFICATION,
    payload: notificationId,
})