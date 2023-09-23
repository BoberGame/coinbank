import React, { useState } from 'react';
import {
  StyledProfileButton,
  StyledProfileIcon,
  StyledProfileList,
  StyledProfileMenu,
  StyledProfileMenuItem,
} from './styles';
import ArrowDownIcon from '../../assets/images/icons/arrow-down.svg';
import { Link } from 'react-router-dom';
import { shortenFullName } from '../../utils/nameFormatter';
import { useClickOutside } from '../../hooks/useClickOutside';
import PropTypes from 'prop-types';

const ProfileIcon = ({ fullName, imgSrc }) => {
  return (
    <StyledProfileIcon $isEmpty={!imgSrc}>
      {imgSrc ? (
        <img src={imgSrc} alt={`${fullName}'s profile avatar`} />
      ) : (
        <span>{shortenFullName(fullName)}</span>
      )}
    </StyledProfileIcon>
  );
};

ProfileIcon.propTypes = {
  fullName: PropTypes.string,
  imgSrc: PropTypes.string,
};

const ProfileList = ({ isOpen, userData }) => {
  return (
    <StyledProfileList $isOpen={isOpen}>
      <StyledProfileMenuItem>
        <ProfileIcon fullName={userData.fullName} imgSrc={userData.avatar} />
        <span>{`${userData.firstName[0]}. ${userData.lastName}`}</span>
      </StyledProfileMenuItem>
      <StyledProfileMenuItem>
        <Link to="/profile" tabIndex="-1">
          My profile
        </Link>
      </StyledProfileMenuItem>
      <StyledProfileMenuItem>
        <Link to="/settings" tabIndex="-1">
          Settings
        </Link>
      </StyledProfileMenuItem>
      <StyledProfileMenuItem>
        <Link to="/login" tabIndex="-1">
          Logout
        </Link>
      </StyledProfileMenuItem>
    </StyledProfileList>
  );
};

ProfileList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
};

const ProfileMenu = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useClickOutside(() => setIsOpen(false));

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledProfileMenu ref={menuRef}>
      <StyledProfileButton onClick={onClickHandler}>
        <ProfileIcon fullName={userData.fullName} imgSrc={userData.avatar} />
        <img src={ArrowDownIcon} alt="Arrow down" />
      </StyledProfileButton>
      <ProfileList isOpen={isOpen} userData={userData} />
    </StyledProfileMenu>
  );
};

ProfileMenu.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ProfileMenu;
