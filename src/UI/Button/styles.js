import styled, { css } from 'styled-components';

const sizes = {
  sm: css`
    font-size: ${({ theme }) => theme.typography.fs200};
    & svg {
      width: 20px;
      height: 20px;
    }
  `,
  lg: css`
    font-size: ${({ theme }) => theme.typography.fs300};
    & svg {
      width: 24px;
      height: 24px;
    }
  `,
};

const variants = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};

    & svg,
    & path {
      stroke: ${({ theme }) => theme.colors.white};
    }

    &:hover,
    &:focus-visible {
      box-shadow: 0 0 12px 0 rgba(82, 53, 232, 0.5);
    }
  `,
  outline: css`
    border: 1px solid ${({ theme }) => theme.colors.primary400};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};

    & svg,
    & path {
      stroke: ${({ theme }) => theme.colors.primary};
    }

    &:hover,
    &:focus-within {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};

      svg,
      path {
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  column-gap: 8px;
  padding: 0.7em 1.5em;

  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease-out;

  ${({ $size }) => sizes[$size]}
  ${({ $variant }) => variants[$variant]}
`;

export default StyledButton;
