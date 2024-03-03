import { useState } from 'react';
import { DummyMachine } from './machine-dummy-list';
import { Machine } from './machine-model';
import MachineList from './machine-list';
import * as styled from '../styles';

const MachinePage = () => {
  const [machines, setMachines] = useState<Array<Machine>>(DummyMachine);

  return (
    <styled.MachineWrapper>
      <styled.FilteredOptions>mes options de filtre</styled.FilteredOptions>
      <styled.MachineList>
        <MachineList machineList={machines} />
      </styled.MachineList>
    </styled.MachineWrapper>
  );
};

export default MachinePage;
