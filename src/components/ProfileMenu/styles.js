import styled, { css } from 'styled-components';
import defaultButton from '../../styles/defaultButton';

export const StyledProfileMenu = styled.div`
  display: flex;
  position: relative;
`;

export const StyledProfileButton = styled.button`
  ${defaultButton}
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const StyledProfileList = styled.div`
  display: block;
  width: 140px;
  min-height: 100px;

  position: absolute;
  top: calc(100% + 10px);
  right: 0;

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
  border-radius: 8px;
`;

export const StyledProfileMenuItem = styled.button`
  ${defaultButton}
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 0.62em 1em;
  width: 100%;

  color: ${({ theme }) => theme.colors.neutral900};
  font-size: ${({ theme }) => theme.typography.fs200};
  font-weight: 500;
  cursor: pointer;

  &:first-child {
    padding: 0.5em 0.6em;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral300};
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.neutral100};
  }
`;

export const StyledProfileIcon = styled.a`
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;

  border: 2px solid ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 12px 0 #ada3f5 inset;
  border-radius: 50%;
  background-color: ${({ $isEmpty, theme }) => $isEmpty && theme.colors.primary300};
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    letter-spacing: 1px;
    text-shadow: 0 4px 4px rgba(161, 145, 243, 0.3);
    font-size: ${({ theme }) => theme.typography.fs200};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }
`;
