import { Outlet } from 'react-router-dom';
import HeaderBg from '@components/Button/header';

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
