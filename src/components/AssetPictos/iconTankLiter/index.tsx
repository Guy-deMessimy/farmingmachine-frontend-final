import IconTankLiterSvg from './svg/logo-svg';
import * as Styled from './index-styled';

export interface Logo {
  alt: string;
  title: string;
  width: string;
  height: string;
}

const IconTankLiterLogo = (props: Logo) => {
  const { title, alt, width, height } = props;

  return (
    <Styled.Logo>
      <IconTankLiterSvg title={title} alt={alt} width={width} height={height} />
    </Styled.Logo>
  );
};

export default IconTankLiterLogo;
