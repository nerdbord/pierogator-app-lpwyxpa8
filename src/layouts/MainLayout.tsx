import { Outlet } from 'react-router-dom';
import HeaderBg from '@components/Button/header';
import GeneratorForm from '@components/Form/GeneratorForm';
import Recipes from '@components/Recipes/Recpipes';



const MainLayout = () => {
  return (
    <main>
      <HeaderBg />
      <section className="px-4 mt-[136px]">
        <Outlet />
        <GeneratorForm />

      </section>
    </main>
  );
};

export default MainLayout;
