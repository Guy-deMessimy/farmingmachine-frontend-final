import * as React from 'react';
import * as Styled from '../index-styled';

const IconSpeedSvg = (props: any) => {
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
      <path d="M8 4a.5.5 0 01.5.5V6a.5.5 0 01-1 0V4.5A.5.5 0 018 4zM3.732 5.732a.5.5 0 01.707 0l.915.914a.5.5 0 11-.708.708l-.914-.915a.5.5 0 010-.707zM2 10a.5.5 0 01.5-.5h1.586a.5.5 0 010 1H2.5A.5.5 0 012 10zm9.5 0a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zm.754-4.246a.389.389 0 00-.527-.02L7.547 9.31a.91.91 0 101.302 1.258l3.434-4.297a.389.389 0 00-.029-.518z" />
      <path
        fillRule="evenodd"
        d="M0 10a8 8 0 1115.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 010 10zm8-7a7 7 0 00-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 008 3z"
      />
    </Styled.Svg>
  );
};

export default IconSpeedSvg;
