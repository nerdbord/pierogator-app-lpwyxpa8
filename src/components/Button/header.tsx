import DumplingSvg from '@src/assets/Dumplings/DumplingSvg';
import DumplingSvg1 from '@src/assets/Dumplings/DumplingSvg1';
import DumplingSvg10 from '@src/assets/Dumplings/DumplingSvg10';
import DumplingSvg11 from '@src/assets/Dumplings/DumplingSvg11';
import DumplingSvg2 from '@src/assets/Dumplings/DumplingSvg2';
import DumplingSvg3 from '@src/assets/Dumplings/DumplingSvg3';
import DumplingSvg4 from '@src/assets/Dumplings/DumplingSvg4';
import DumplingSvg5 from '@src/assets/Dumplings/DumplingSvg5';
import DumplingSvg6 from '@src/assets/Dumplings/DumplingSvg6';
import DumplingSvg7 from '@src/assets/Dumplings/DumplingSvg7';
import DumplingSvg8 from '@src/assets/Dumplings/DumplingSvg8';
import DumplingSvg9 from '@src/assets/Dumplings/DumplingSvg9';
import DumplingSvg12 from '@src/assets/Dumplings/DunplingSvg12';
import HeaderBgSvg from '@src/assets/HeaderBgSvg';

import Snow from '@src/assets/SnowSvg';

interface ListItemProps {
  children: React.ReactNode;
}

const HeaderBg = ({ children }: ListItemProps) => {
  return (
    <header className="fixed top-0 flex content-center justify-center">
      <div className="relative z-10 flex flex-col justify-center bg-cover bg-center">
        <HeaderBgSvg />
        <div>
          <div className="absolute top-0">
            <Snow />
          </div>
          <div className="absolute top-0">
            <div className="absolute top-[5px]">
              <DumplingSvg />
            </div>
            <div className="absolute top-[57.40px]">
              <DumplingSvg2 />
            </div>
            <div className="absolute left-[18.12px] top-[36.84px]">
              <DumplingSvg1 />
            </div>
            <div className="absolute left-[55px] top-[8px]">
              <DumplingSvg3 />
            </div>
            <div className="absolute left-[33.19px] top-[75.74px]">
              <DumplingSvg4 />
            </div>
            <div className="absolute left-[105px] top-[7px]">
              <DumplingSvg5 />
            </div>
            <div className="absolute left-[146px] top-[0px]">
              <DumplingSvg6 />
            </div>
            <div className="absolute left-[249px] top-[3px]">
              <DumplingSvg7 />
            </div>
            <div className="absolute left-[287px] top-[9px]">
              <DumplingSvg8 />
            </div>
            <div className="absolute left-[354.47px] top-[1.47px]">
              <DumplingSvg9 />
            </div>
            <div className="absolute left-[321.47px] top-[32.47px]">
              <DumplingSvg10 />
            </div>
            <div className="absolute left-[348.47px] top-[42.47px]">
              <DumplingSvg11 />
            </div>
            <div className="absolute left-[307.47px] top-[74.47px]">
              <DumplingSvg12 />
            </div>
          </div>
        </div>
        <div className=" absolute right-2/4 top-[49px] translate-x-2/4   text-center font-barrio text-h1 text-white">
          {children}
        </div>
      </div>
    </header>
  );
};

export default HeaderBg;
