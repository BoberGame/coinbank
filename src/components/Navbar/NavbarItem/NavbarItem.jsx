import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 1em 0.85em;

  color: ${({ theme }) => theme.colors.neutral500};
  text-decoration: none;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 8px;

  & svg {
    width: 20px;
    height: 20px;

    & path {
      stroke: ${({ theme }) => theme.colors.neutral400};
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary50};
    border-color: ${({ theme }) => theme.colors.primary200};

    & path {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const NavbarItem = ({ children, to, Icon, ...props }) => {
  return (
    <li {...props}>
      <StyledNavLink to={to}>
        <Icon />
        <span>{children}</span>
      </StyledNavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  Icon: PropTypes.elementType,
};

export default NavbarItem;
