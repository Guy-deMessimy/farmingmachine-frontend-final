import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';
import { Tabs as BaseTabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { Button as BaseButton } from '@mui/base/Button';

export const Header = styled.div`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: auto 1fr auto; /* Trois colonnes : auto pour le logo et les boutons, 1fr pour la barre de navigation */
  align-items: center; /* Centre les éléments verticalement */
  gap: 10px; /* Espacement entre les colonnes */

  background-color: white;
  /* outline: #f0ff42;
  border: #f0ff42; */
  /* padding: 1rem; */
  color: black;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavLink = styled(BaseNavLink)`
  font-size: 1.15rem;
  color: #242424;
  text-decoration: none;
  list-style-type: none;

  &.active {
    color: #379237;
  }
`;

export const Tabs = styled(BaseTabs)`
  /* background-color: #ccc; */
  border: 1px solid red;
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
  /* border: 1px solid green; */

  &.${tabClasses.selected} {
    color: orange;
  }
`;

// const Tab = styled(BaseTab)(({ theme }) => ({
//   // Votre style par défaut pour tous les onglets ici
//   // ...

//   [`&.${tabClasses.selected}`]: {
//     // Style spécifique pour l'onglet actif ici
//     color: 'red', // Couleur du texte pour l'onglet actif
//   },
// }));

export const ButtonGroup = styled.div`
  /* border: solid 1px red; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Button = styled(BaseButton)`
  border: none;
  cursor: pointer;
  /* border: solid 1px black; */
  border-radius: 5px;
  background-color: white;
  color: black;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 5px 5px 5px;
`;
