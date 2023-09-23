import React, { useState } from 'react';
import { ReactComponent as NotificationIcon } from '../../assets/images/icons/notice.svg';
import dateFormatter from '../../utils/dateFormatter';
import {
  NotificationButton,
  NotificationList,
  NotificationText,
  NotificationTime,
  NotificationTitle,
  StyledNotification,
  StyledNotificationItem,
} from './styles';
import { useClickOutside } from '../../hooks/useClickOutside';
import PropTypes from 'prop-types';

const NotificationItem = ({ notification }) => {
  const notificationTime = dateFormatter.format(notification.date);
  const isoNotificationTime = new Date(notification.date).toISOString();
  return (
    <StyledNotificationItem>
      <NotificationTitle>{notification.title}</NotificationTitle>
      <NotificationText>{notification.text}</NotificationText>
      <NotificationTime dateTime={isoNotificationTime}>{notificationTime}</NotificationTime>
    </StyledNotificationItem>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

const Notification = ({ notifications }) => {
  const hasNotifications = notifications.length > 0;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside(() => setIsOpen(false));

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNotification ref={menuRef}>
      <NotificationButton $hasNotifications={hasNotifications} onClick={onClickHandler}>
        <NotificationIcon />
      </NotificationButton>
      <NotificationList $isOpen={isOpen}>
        {hasNotifications ? (
          notifications.map((notification) => (
            <NotificationItem notification={notification} key={notification.date} />
          ))
        ) : (
          <div style={{ textAlign: 'center' }}>No notifications</div>
        )}
      </NotificationList>
    </StyledNotification>
  );
};

Notification.propTypes = {
  notifications: PropTypes.array.isRequired,
};

export default Notification;
