import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { device } from './Device';
// import { Link } from 'react-router-dom';

export const Page = styled.h3`
  border: 1px solid red;
`;

export const CategoryLink = styled(Link)`
  border: 1px solid red;
  display: flex;
  height: 100%;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: space-around;
`;

export const CategoryImg = styled.img`
  border-radius: 10%;
`;

// export const FondTitle = styled.div`
//   position: relative;
//   width: 98%;
//   display: flex;
//   justify-content: center;
//   @media ${device.mobile} {
//     margin-bottom: 1.5em;
//     margin-top: 5vh;
//   }
// `;
