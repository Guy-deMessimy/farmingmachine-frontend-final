import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { Tab as BaseTab } from '@mui/base/Tab';
import { Button as BaseButton } from '@mui/base/Button';

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  background-color: white;
  outline: none;
  padding: 1px 1px 1px 1px;
  color: black;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavLink = styled(BaseNavLink)`
  width: 100%;
  border: none;
  font-size: 1.15rem;
  color: #242424;
  text-decoration: none;
  list-style-type: none;
  &.active {
    color: orange;
  }
`;

export const Tabs = styled(BaseTabs)`
  border: none;
  display: flex;
  justify-content: center;
`;

export const TabsList = styled(BaseTabsList)`
  display: flex;
  gap: 50px;
  border: none;
`;

export const Tab = styled(BaseTab)`
  background-color: white;
  border: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: none;
`;

export const Button = styled(BaseButton)`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 5px 5px 5px;
`;
