// @ts-nocheck
import {createContext, useEffect, useRef, useState} from "react";
import { registerForPushNotificationsAsync } from "../utils/register-for-push-async-function";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


// Configure the notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const NotificationContext = createContext({});

export type NotificationProviderProps = {
  children: React.ReactNode;
}

export default function NotificationProvider({children}: NotificationProviderProps) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if(notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }

      if(responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  useEffect(() => {
    if(!expoPushToken) return;
    schedulePushNotification();
  }, [expoPushToken]);

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: {
        weekday: 1,
        hour: 12,
        minute: 0,
        repeats: true
      }
    });
  }

  return (
    <NotificationContext.Provider value={{}}>
      {children}
    </NotificationContext.Provider>
  )
}


