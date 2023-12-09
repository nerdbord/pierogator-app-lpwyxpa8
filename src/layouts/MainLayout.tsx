import DumplingSvg from '@src/assets/DumplingSvg';
import Snow from '@src/assets/SnowSvg';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main>
      <header className="bg-dark-green text-center mb-[18px]">
        <h1 className="text-h1 font-barrio font-normal text-white uppercase">
          Pierogator świąteczny
        </h1>
        <Snow />
        <DumplingSvg />
      </header>
      <section className="px-4">
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
