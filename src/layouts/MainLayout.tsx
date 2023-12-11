import { Outlet } from 'react-router-dom';
import HeaderBg from '@components/Button/header';

const MainLayout = () => {
  return (
    <main>
      <HeaderBg />

      <section className="px-4 mt-[136px]">
        <Outlet />
      </section>

      <div
        onClick={() => {
          console.log('asdf');
        }}
        className="bg-red"
      >
        asdfasds
      </div>
    </main>
  );
};

export default MainLayout;
