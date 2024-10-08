import { useState, useMemo } from "react";
import { HiOutlineBell, HiOutlineMail } from "react-icons/hi";
import { DropdownWrapper } from "../../../../components";
import { cn } from "../../../../helpers";
import { useGlobalProvider } from "../../../../hooks";
import { notificationsData } from "./data";
import { NotificationAlertType, NotificationType } from "./types";

export const Notifications = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [notifications, setNotifications] = useState(notificationsData);
    const { isDarkTheme } = useGlobalProvider();

    const notificationFilters = useMemo(() => [
        { label: 'All', filter: 'All' },
        { label: 'Messages', filter: 'Messages' },
        { label: 'Alerts', filter: 'Alerts' },
    ], []);

    const onActiveFilterChange = (filter) => {
        setActiveFilter(filter);
        if (filter === 'Alerts') {
            setNotifications([...notificationsData].filter((n) => n.type === 'Alert'));
        } else if (filter === 'xMessages') {
            setNotifications([...notificationsData].filter((n) => n.type === 'Message'));
        } else {
            setNotifications([...notificationsData]);
        }
    };

    return (
        <DropdownWrapper buttonContent={<HiOutlineBell />} buttonClassname="block" dropdownClassname={cn('bg-white border-2 border-primary rounded-[10px] w-[200px] mt-3 overflow-hidden shadow-md', {'bg-dark': isDarkTheme})} dropdownPlacement="bottom">
            <header className="bg-primary">
                <p className="uppercase px-2 py-2.5 text-sm font-Montserrat text-white">Notification</p>
                <div className="flex items-center gap-1 text-xs">
                    {notificationFilters.map(({ label, filter }) => (
                        <button key={filter} className={cn('rounded-t px-2 py-1 uppercase text-white', {'bg-white text-dark-default': !isDarkTheme && filter === activeFilter, 'bg-hover': isDarkTheme && filter === activeFilter})} onClick={() => onActiveFilterChange(filter)}>
                            {label}
                        </button>
                    ))}
                </div>
            </header>
            <div className="bg-white p-2">
                <ul className="divide-y divide-primary/50 max-h-[300px] overflow-y-auto">
                    {notifications.map((notification) => {
                        return (
                            <li key={notification.id} className="text-xs">
                                <div className="flex gap-2 py-2 text-primary">
                                    {notification.type === NotificationType.Alert ? (
                                        <HiOutlineBell className="text-base shrink-0" />
                                    ) : (
                                        <HiOutlineMail className="text-base shrink-0" />
                                    )}
                                    {notification.type === NotificationType.Message && (
                                        <p className="text-sm font-bold text-gray-600">You have 1 new message from {notification.userFullName}</p>
                                    )}
                                    {notification.type === NotificationType.Alert && notification.alertType === NotificationAlertType.NewOrder && (
                                        <p>A new order has been placed</p>
                                    )}
                                    {notification.type === NotificationType.Alert && notification.alertType === NotificationAlertType.NewReview && (
                                        <p>{notification.username} left a new review on {notification.productName}</p>
                                    )}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </DropdownWrapper>
    );
};
