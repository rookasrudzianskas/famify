import {createContext, useEffect, useState} from "react";


const NotificationContext = createContext({});

export type NotificationProviderProps = {
  children: React.ReactNode;
}

export default function NotificationProvider({children}: NotificationProviderProps) {
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  return (
    <NotificationContext.Provider value={{}}>
      {children}
    </NotificationContext.Provider>
  )
}


