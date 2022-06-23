import PushNotificationIOS from '@react-native-community/push-notification-ios'
 
const showNotifications = (title, message) => {
    PushNotificationIOS.presentLocalNotification({
        alertTitle: title,
        alertBody: message,
    });
};
 
const handleScheduleNotifications = (title, message) => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + 5)
    PushNotification.localNotification({
        alertTitle: title,
        alertBody: message,
        fireDate: date.toISOString,
    });
};
 
const handleCancel = () => {
    PushNotificationIOS.removeAllDeliveredNotifications();
} 
 
export { showNotifications, handleScheduleNotifications , handleCancel };