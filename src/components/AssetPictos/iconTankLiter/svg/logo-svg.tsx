import * as React from 'react';
import * as Styled from '../index-styled';

const IconTankLiterSvg = (props: any) => {
  return (
    <Styled.Svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={props.alt}
      width={props.width}
      height={props.height}
      {...props}
    >
      <title>{props.title}</title>
      <path d="M20 8h-5v6H2v3h1c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2v-5l-3-4M6 18.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5m12 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5M17 12V9.5h2.5l2 2.5H17m-3-2.5c0 1.9-1.6 3.5-3.5 3.5h-6C2.6 13 1 11.4 1 9.5S2.6 6 4.5 6H5V5H4V4h4v1H7v1h3.5C12.4 6 14 7.6 14 9.5z" />
    </Styled.Svg>
  );
};

export default IconTankLiterSvg;
