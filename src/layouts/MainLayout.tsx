import { Outlet } from 'react-router-dom';
import HeaderBg from '@components/Button/header';
import GeneratorForm from '@components/Form/GeneratorForm';
import Recipes from '@components/Recipes/Recpipes';

const MainLayout = () => {
  return (
    <main>
      <HeaderBg>Pierogator świąteczny</HeaderBg>
      <section className="mt-[136px] px-4">
        <Outlet />
        <GeneratorForm />
        <Recipes />
      </section>
    </main>
  );
};

export default MainLayout;
