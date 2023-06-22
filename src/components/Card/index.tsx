import { Fragment } from 'react';
import { SIZE } from 'baseui/spinner';
import ExtraLargeSpinner from '../Spinner';
import { SpinnerInterface } from '../../models/SpinnerConfig';

const Card: React.FC<SpinnerInterface> = (props: SpinnerInterface) => {
  return props.isLoading ? <ExtraLargeSpinner $size={SIZE.medium} /> : <Fragment>{props.children}</Fragment>;
};

export default Card;
