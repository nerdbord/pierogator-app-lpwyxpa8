import { Outlet } from 'react-router-dom';
import HeaderBg from '@components/Button/header';
import { useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();
  const isDumplingsCreatorRoute = location.pathname === '/dumplings-creator';

  console.log(location.pathname);

  return (
    <main>
      <HeaderBg>
        {isDumplingsCreatorRoute ? 'Pierogarnia świateczny' : 'Pierogarnia'}
      </HeaderBg>
      <section className="mt-[136px] px-4">
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
