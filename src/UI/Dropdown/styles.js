import styled, { css } from 'styled-components';
import defaultButton from '../../styles/defaultButton';

export const StyledDropdown = styled.div`
  position: relative;
  font-size: ${({ $size, theme }) =>
    ($size === 'lg' ? theme.typography.fs200 : theme.typography.fs100)};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledDropdownHeader = styled.button`
  ${defaultButton};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  padding: 0.62em 1em;

  font-size: inherit;
  font-weight: 500;
  line-height: 1.4;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  border-radius: 8px;
`;

export const Icon = styled.img`
  width: ${({ $size }) => ($size === 'lg' ? '20px' : '16px')};
  height: ${({ $size }) => ($size === 'lg' ? '20px' : '16px')};

  object-fit: cover;
  border-radius: 50%;
  pointer-events: none;
`;

export const StyledDropdownItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 0.62em 1em;
  width: 100%;

  font-size: inherit;

  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral300};
  }

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.neutral100};
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  z-index: 50;
  opacity: 0;
  visibility: hidden;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.white};
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  /* border-top: none; */
  border-radius: 8px;
`;
