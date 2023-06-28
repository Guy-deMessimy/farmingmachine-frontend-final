import { SIZE } from 'baseui/spinner';
import ExtraLargeSpinner from '../Spinner';
import { SpinnerInterface } from '../../models/SpinnerConfig';
import * as styled from './styles';

const Card: React.FC<SpinnerInterface> = (props: SpinnerInterface) => {
  return props.isLoading ? (
    <ExtraLargeSpinner $size={SIZE.medium} />
  ) : (
    <styled.ContainerFragment>{props.children}</styled.ContainerFragment>
  );
};

export default Card;
