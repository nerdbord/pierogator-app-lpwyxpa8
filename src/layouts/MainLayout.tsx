import { Outlet } from 'react-router-dom';
import HeaderBg from '@components/Button/header';

const MainLayout = () => {
  return (

    <main>
      <HeaderBg>Pierogator świąteczny</HeaderBg>
      <section className="mt-[136px] px-4">

        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
