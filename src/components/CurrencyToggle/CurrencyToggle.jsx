import React from 'react';
import Dropdown from '../../UI/Dropdown/Dropdown';
import usdIcon from '../../assets/images/icons/usa.svg';
import eurIcon from '../../assets/images/icons/europe.svg';
import rubIcon from '../../assets/images/icons/russia.svg';

const currencies = [
  { value: 'USD', icon: usdIcon },
  { value: 'EUR', icon: eurIcon },
  { value: 'RUB', icon: rubIcon },
];

const defaultOption = { value: 'USD', icon: usdIcon };

const CurrencyToggle = () => {
  return (
    <Dropdown
      size="lg"
      options={currencies}
      defaultOption={defaultOption}
      title="Select currency"
    />
  );
};

export default CurrencyToggle;
