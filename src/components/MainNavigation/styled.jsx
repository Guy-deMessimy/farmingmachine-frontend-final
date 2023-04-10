import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const NavLink = styled(BaseNavLink)`
  font-size: 1.15rem;
  color: #242424;
  text-decoration: none;
  list-style-type: none;

  &.active {
    color: #379237;
  }
`;
