import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Machine } from './machine-model';
import MachineCard from './machine-card';

interface ReportComponentProps {
  machineList: Machine[];
}

const MachineList = ({ machineList }: ReportComponentProps) => {
  return (
    <>
      {machineList.map((engine: Machine) => (
        <div key={engine.id}>
          <Link to={engine.id.toString()}>
            <MachineCard engine={engine}></MachineCard>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MachineList;
