import { Outlet } from 'react-router-dom';
// import MainNavigation from '../components/MainNavigation';
import MainNavigation from '../components/MainNavigation/indexbix';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
