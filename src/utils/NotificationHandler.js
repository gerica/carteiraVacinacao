import { DeviceEventEmitter } from 'react-native';
import PushNotificationAndroid from 'react-native-push-notification';
import * as notification from './Notification';

export default function Handler() {
    // Register all the valid actions for notifications here and add the action handler for each action
    PushNotificationAndroid.registerNotificationActions(['Ok']);
    DeviceEventEmitter.addListener('notificationActionReceived', (action) => {
        console.log(action);
        const info = JSON.parse(action.dataJSON);
        // this.onCancelNotification();
        if (info.action === 'Ok') {
            notification.onCancelNotification({ id: '123' });
        }
        // Add all the required actions handlers
    });
}
