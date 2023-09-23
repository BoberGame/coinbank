import React, { useState } from 'react';
import ArrowDownIcon from '../../assets/images/icons/arrow-down.svg';
import {
  StyledDropdownHeader,
  DropdownList,
  Icon,
  StyledDropdown,
  StyledDropdownItem,
} from './styles';
import { useClickOutside } from '../../hooks/useClickOutside';
import PropTypes from 'prop-types';

const DropdownHeader = ({ option, size, onClickHandler }) => {
  return (
    <StyledDropdownHeader onClick={onClickHandler}>
      <Icon $size={size} src={option.icon} alt="Dropdown item icon" />
      {option.value}
      <img src={ArrowDownIcon} alt="Arrow down" />
    </StyledDropdownHeader>
  );
};

DropdownHeader.propTypes = {
  option: PropTypes.object,
  size: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

const DropdownItem = ({ option, size, onSelectHandler }) => {
  return (
    <StyledDropdownItem onClick={() => onSelectHandler(option)}>
      {option.icon && <Icon $size={size} src={option.icon} alt="Dropdown item icon" />}
      {option.value}
    </StyledDropdownItem>
  );
};

DropdownItem.propTypes = {
  option: PropTypes.object,
  size: PropTypes.string.isRequired,
  onSelectHandler: PropTypes.func.isRequired,
};

const Dropdown = ({ options, title, defaultOption, size = 'lg' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ value: '', icon: null });
  const menuRef = useClickOutside(() => setIsOpen(false));

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const onSelectHandler = (item) => {
    setSelectedItem({ value: item.value, icon: item.icon });
    setIsOpen(false);
  };

  return (
    <StyledDropdown title={title} $size={size} ref={menuRef}>
      <DropdownHeader
        option={!selectedItem.value ? defaultOption : selectedItem}
        size={size}
        onClickHandler={onClickHandler}
      />
      <DropdownList $isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem
            onSelectHandler={onSelectHandler}
            option={option}
            size={size}
            key={option.value}
          />
        ))}
      </DropdownList>
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  defaultOption: PropTypes.object,
  size: PropTypes.string.isRequired,
};

export default Dropdown;
