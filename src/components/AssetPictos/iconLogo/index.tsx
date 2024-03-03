import React from 'react';
import FarmingMachineLogoSvg from './svg/logo-svg';
import * as Styled from './index-styled';

const FarmingMachineLogo = (props: any) => {
  const { title, alt, width, height } = props;

  return (
    <Styled.Logo>
      <FarmingMachineLogoSvg title={title} alt={alt} width={width} height={height} />
    </Styled.Logo>
  );
};

export default FarmingMachineLogo;
