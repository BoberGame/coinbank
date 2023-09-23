import styled, { css } from 'styled-components';
import defaultButton from '../../styles/defaultButton';

export const StyledNotification = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-inline: 8px;
`;

export const NotificationButton = styled.button`
  ${defaultButton}
  position: relative;

  ${({ $hasNotifications, theme }) =>
    $hasNotifications &&
    css`
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        display: block;

        position: absolute;
        top: 0;
        right: -1px;

        background-color: #e83535;
        border-radius: 50%;
        border: 2px solid ${theme.colors.white};
      }
    `}
`;

export const NotificationList = styled.ul`
  display: block;
  width: 350px;
  min-height: 80px;

  position: absolute;
  top: calc(100% + 20px);
  right: 0;

  opacity: 0;
  visibility: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: 8px;
`;

export const StyledNotificationItem = styled.li`
  display: inline-block;
  padding: 0.5em 0.8em;
  position: relative;

  font-size: ${({ theme }) => theme.typography.fs200};
  color: ${({ theme }) => theme.colors.neutral900};
  line-height: 1.2;
  text-decoration: none;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral300};
  }
`;

export const NotificationTitle = styled.h5`
  margin-bottom: 4px;
  font-weight: 500;
`;

export const NotificationText = styled.p`
  /* margin-bottom: 0.1em; */
`;

export const NotificationTime = styled.time`
  display: flex;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.typography.fs100};
`;
