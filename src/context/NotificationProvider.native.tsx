import { createContext } from "react";


const NotificationContext = createContext({});

export default function NotificationProvider({children}: any) {
    return (
        <NotificationContext.Provider value={{}}>
            {children}
        </NotificationContext.Provider>
    )
}
