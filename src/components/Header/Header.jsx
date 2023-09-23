import React from 'react';
import PropsTypes from 'prop-types';
import Button from '../../UI/Button/Button';
import { ReactComponent as DashboardIcon } from '../../assets/images/icons/dashboard.svg';
import CurrencyToggle from '../CurrencyToggle/CurrencyToggle';
import Notification from '../Notification/Notification';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { StyledHeader, StyledHeaderWrapper, StyledTitle } from './styles';

const notifications = [
  {
    title: 'Coinbank Encourages Users to Convert BUSD',
    text: 'This is a general announcement. Products and services referred to here may.',
    date: Date.now(),
  },
];

const userData = {
  firstName: 'Egor',
  lastName: 'Bobrov',
  fullName: 'Egor Bobrov',
  avatar: 'https://tvline.com/wp-content/uploads/2017/04/agents-of-shield-framework-fitz.jpeg',
};

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      <StyledHeaderWrapper>
        <CurrencyToggle />
        <Button size="sm" type="button" Icon={DashboardIcon}>
          Connect Wallet
        </Button>
        <Notification notifications={notifications} />
        <ProfileMenu userData={userData} />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropsTypes.string,
};

export default Header;
