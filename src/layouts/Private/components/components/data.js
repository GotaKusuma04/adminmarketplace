import { NotificationType, NotificationAlertType } from "./types";

export const notificationsData = [
    {
        id: 'notification-1',
        type: NotificationType.Alert,
        alertType: NotificationAlertType.NewOrder,
    },
    {
        id: 'notification-2',
        type: NotificationType.Message,
        userFullName: 'John Doe',
    },
    {
        id: 'notification-3',
        type: NotificationType.Alert,
        alertType: NotificationAlertType.NewReview,
        username: 'John Doe',
        productName: 'Product 1',
    },
];
