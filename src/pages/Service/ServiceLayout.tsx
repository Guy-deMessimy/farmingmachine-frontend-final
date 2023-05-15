import { Outlet } from 'react-router-dom';
import ServiceActions from '../../components/Service';

function ServiceLayout() {
  return (
    <>
      <ServiceActions />
      <Outlet />
    </>
  );
}

export default ServiceLayout;
