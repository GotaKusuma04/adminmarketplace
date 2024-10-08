export const ActiveNotificationFilter = {
  All: "All",
  Messages: "Messages",
  Alerts: "Alerts",
};

export const NotificationType = {
  Message: "Message",
  Alert: "Alert",
};

export const NotificationAlertType = {
  NewOrder: "NewOrder",
  NewReview: "NewReview",
};

export const NotificationFilters = [
  { label: "All", filter: ActiveNotificationFilter.All },
  { label: "Messages", filter: ActiveNotificationFilter.Messages },
  { label: "Alerts", filter: ActiveNotificationFilter.Alerts },
];

export const Notification = (id, type, additionalProps) => ({
  id,
  type,
  ...additionalProps,
});
