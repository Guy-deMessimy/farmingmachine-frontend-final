import * as styled from '../styles';
import { Machine } from './machine-model';

interface ReportComponentProps {
  engine: {
    modelName: string;
  };
}

const MachineCard = ({ engine }: ReportComponentProps) => {
  return (
    <>
      <styled.CardMachine>
        <styled.CardTitle className="card-title">{engine.modelName}</styled.CardTitle>
        <styled.CardPhoto
          src="https://www.entraid.com/wp-content/uploads/2015/11/moissonneuse-batteuse-700x388.jpg"
          alt="Machine"
          className="card-photo"
        />
        <styled.IconLine>
          <styled.Icon src="chemin/vers/icon1.png" alt="Icon 1" className="icon" />
          <styled.Icon src="chemin/vers/icon2.png" alt="Icon 2" className="icon" />
          <styled.Icon src="chemin/vers/icon3.png" alt="Icon 3" className="icon" />
          <styled.Icon src="chemin/vers/icon4.png" alt="Icon 4" className="icon" />
        </styled.IconLine>
        <styled.PriceLine>Prix : 1000 €</styled.PriceLine>
      </styled.CardMachine>
    </>
  );
};

export default MachineCard;
