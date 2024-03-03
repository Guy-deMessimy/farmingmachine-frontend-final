import styled from 'styled-components';

// import { device } from './Device';
// import { Link } from 'react-router-dom';

export const ContainerFragment = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  height: 100%;
  background: #badb42;
  padding: 5px 5px 5px 5px;
`;

export const MachineWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Divise la page en deux colonnes, 1/3 et 2/3 de la largeur */
  height: 100vh; /* 100% de la hauteur de la vue */
  /* overflow: scroll; */
  /* border: solid 3px green; */
`;

export const FilteredOptions = styled.div`
  background-color: #f0f0f0; /* Couleur de fond du bloc gauche */
  padding: 20px; /* Ajoutez du rembourrage selon vos besoins */
  /* border: solid 1px red; */
  color: black;
  /* position: sticky;
  box-sizing: border-box; */
  /* top: 20px;  */
  /* Le bloc restera fixe sous le header */
  /* z-index: 50;  */
  /* Un z-index inférieur à celui du header */
  /* height: 100%; */
  position: sticky; /* Fixe la colonne de gauche */

  /* bottom: 0;
  left: 0; */
  background-color: #f0f0f0; /* Couleur de fond, ajustez selon vos besoins */
  padding: 20px; /* Espacement interne, ajustez selon vos besoins */
`;

export const MachineList = styled.div`
  /* display: flex;
  flex-wrap: wrap; /* Permet au contenu de passer à la ligne si nécessaire */
  /* padding: 20px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Trois colonnes égales */
  gap: 20px; /* Espacement entre les cartes, ajustez selon vos besoins */
  overflow: auto;
`;

export const CardMachine = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 15px;
  width: 100%; /* Ajustez la largeur selon vos besoins */
`;

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const CardPhoto = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px; /* Espacement entre le titre et la photo */
`;

export const IconLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px; /* Espacement entre la photo et la ligne d'icônes */
`;

export const Icon = styled.img`
  width: 20px; /* Ajustez la taille selon vos besoins */
  height: 20px;
  margin-right: 5px; /* Espacement entre les icônes */
`;

export const PriceLine = styled.div`
  margin-top: 10px; /* Espacement entre la ligne d'icônes et la ligne de prix */
`;
