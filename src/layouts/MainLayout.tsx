import { Outlet } from 'react-router-dom';
import HeaderBg from '@components/Button/header';

const MainLayout = () => {
  return (
    <main className="h-full">
      <HeaderBg />
      <section className="mt-[136px] h-full px-4">
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
