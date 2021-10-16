import { camelCase } from 'lodash';

export const countTabNotification = (tab, notifications) => {
    const numberOfNotificationPerPages = Object.values(notifications[tab]);
    const summerReducer = (accumulator, curr) => accumulator + curr;
    return numberOfNotificationPerPages.reduce(summerReducer);
};
export const fromHrefToCamelCase = (href) => {
    return camelCase(href.substring(1));
};