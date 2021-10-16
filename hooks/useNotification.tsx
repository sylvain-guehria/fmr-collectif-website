import React, { useState, useContext, createContext } from 'react';

type ContextProps = {
  notifications: Notifications;
  addNotification: (tab: Tab, page: Page) => void;
  setShoppingCartNotifications: (cartNotificationCount: number) => void;
};
interface ProviderProps {
  children?: React.ReactNode;
}
const notificationContext = createContext<Partial<ContextProps>>({});

export const ProvideNotification: React.FC<ProviderProps> = ({ children }): React.ReactElement => {
  const notifs = useProvideNotification();
  return <notificationContext.Provider value={notifs}>{children}</notificationContext.Provider>;
};

export const useNotification = (): Partial<ContextProps> => {
  return useContext(notificationContext);
};

const useProvideNotification = (): Partial<ContextProps> => {
  const [notifications, setNotifications] = useState(defaultNotifications);

  const addNotification = (tab: Tab, page: Page): void => {
    const localNotif = { ...notifications };
    // eslint-disable-next-line
    // @ts-ignore
    localNotif[tab][page] = localNotif[tab][page] + 1;
    setNotifications(localNotif);
  };

  const setShoppingCartNotifications = (cartNotificationCount: number): void => {
    const localNotif = { ...notifications };
    localNotif['boutique']['shoppingCart'] = cartNotificationCount;
    setNotifications(localNotif);
  };

  return {
    notifications,
    addNotification,
    setShoppingCartNotifications,
  };
};

const defaultNotifications: Notifications = {
  association: {
    aboutUs: 0,
    becomeAmbassador: 0,
    contactUs: 0,
  },
  evenements: {
    blogPosts: 0,
    events: 0,
  },
  boutique: {
    ticketOffice: 0,
    shop: 0,
    shoppingCart: 0,
  },
  compte: {
    profile: 0,
    orders: 0,
  },
  admin: {
    users: 0,
    stocks: 0,
  },
};

type Notifications = {
  association: {
    aboutUs: number;
    becomeAmbassador: number;
    contactUs: number;
  };
  evenements: {
    blogPosts: number;
    events: number;
  };
  boutique: {
    ticketOffice: number;
    shop: number;
    shoppingCart: number;
  };
  compte: {
    profile: number;
    orders: number;
  };
  admin: {
    users: number;
    stocks: number;
  };
};

type Tab = 'association' | 'evenements' | 'boutique' | 'compte' | 'admin';
type Page =
  | 'aboutUs'
  | 'becomeAmbassador'
  | 'contactUs'
  | 'blogPosts'
  | 'events'
  | 'ticketOffice'
  | 'shop'
  | 'shoppingCart'
  | 'profile'
  | 'orders'
  | 'users'
  | 'stocks';
