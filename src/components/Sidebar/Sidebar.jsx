import React from 'react';
import logo from '../../assets/images/logo.svg';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const StyledSidebar = styled.aside`
  max-width: ${({ theme }) => theme.sizes.sidebar};
  width: 100%;
  height: 100vh;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white};
  border-right: ${({ theme }) => theme.border};
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div className="sidebarLogo">
        <img src={logo} alt="" />
      </div>
      <Navbar />
    </StyledSidebar>
  );
};

export default Sidebar;
