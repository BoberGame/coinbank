import React from 'react';
import StyledButton from './styles';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', size, Icon, ...props }) => {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  Icon: PropTypes.elementType,
};

export default Button;
