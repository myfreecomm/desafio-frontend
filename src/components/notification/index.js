import React from 'react';
import notificationIcon from '../../assets/Notification.png';
import { NotificationContainer } from './styles';

const Notification = () => (
  <NotificationContainer>
    <img src={notificationIcon} alt="Icone de Notificação" />
  </NotificationContainer>
);

export default Notification;