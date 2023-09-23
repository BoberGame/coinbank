import React from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem/NavbarItem';
import { ReactComponent as DashboardIcon } from '../../assets/images/icons/dashboard.svg';
import { ReactComponent as WalletIcon } from '../../assets/images/icons/wallet.svg';
import { ReactComponent as PricesIcon } from '../../assets/images/icons/prices.svg';
import { ReactComponent as PortfoliosIcon } from '../../assets/images/icons/portfolios.svg';
import { ReactComponent as AccountsIcon } from '../../assets/images/icons/accounts.svg';
import { ReactComponent as CardsIcon } from '../../assets/images/icons/cards.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/icons/settings.svg';

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  height: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  height: 100%;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledList>
        <NavbarItem to={'/dashboard'} Icon={DashboardIcon}>
          Dashboard
        </NavbarItem>
        <NavbarItem to={'/wallet'} Icon={WalletIcon}>
          Wallet
        </NavbarItem>
        <NavbarItem to={'/prices'} Icon={PricesIcon}>
          Prices
        </NavbarItem>
        <NavbarItem to={'/portfolios'} Icon={PortfoliosIcon}>
          Portfolios
        </NavbarItem>
        <NavbarItem to={'/accounts'} Icon={AccountsIcon}>
          Accounts
        </NavbarItem>
        <NavbarItem to={'/cards'} Icon={CardsIcon}>
          Cards
        </NavbarItem>
        <NavbarItem to={'/settings'} Icon={SettingsIcon} style={{ marginTop: 'auto' }}>
          Settings
        </NavbarItem>
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;
