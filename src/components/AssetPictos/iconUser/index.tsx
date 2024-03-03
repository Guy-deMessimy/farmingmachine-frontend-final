import IconUserSvg from './svg/logo-svg';
import * as Styled from './index-styled';

const IconUser = (props: any) => {
  const { title, alt, width, height } = props;
  return (
    <Styled.User>
      <IconUserSvg title={title} alt={alt} width={width} height={height} />
    </Styled.User>
  );
};

export default IconUser;
