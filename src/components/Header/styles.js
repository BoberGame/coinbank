import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  padding: 20px 32px 24px 32px;

  border-bottom: ${({ theme }) => theme.border};
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fs600};
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.neutral900};
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;
