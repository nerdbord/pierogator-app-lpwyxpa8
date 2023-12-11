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

const HeaderBg = () => {
  return (
    <header>
      <div className="h-screen bg-cover bg-center top-0 z-10  sticky ">
        <HeaderBgSvg />
        <div>
          <div className="absolute top-0 z-10">
            <Snow />
          </div>
          <div className="absolute top-[5px]">
            <DumplingSvg />
          </div>
          <div className="absolute top-[57.40px]">
            <DumplingSvg2 />
          </div>
          <div className="absolute top-[36.84px] left-[18.12px]">
            <DumplingSvg1 />
          </div>
          <div className="absolute top-[8px] left-[55px]">
            <DumplingSvg3 />
          </div>
          <div className="absolute top-[75.74px] left-[33.19px]">
            <DumplingSvg4 />
          </div>
          <div className="absolute top-[7px] left-[105px]">
            <DumplingSvg5 />
          </div>
          <div className="absolute top-[7px] left-[175px]">
            <DumplingSvg6 />
          </div>
          <div className="absolute top-[3px] left-[249px]">
            <DumplingSvg7 />
          </div>
          <div className="absolute top-[9px] left-[287px]">
            <DumplingSvg8 />
          </div>
          <div className="absolute top-[1.47px] left-[354.47px]">
            <DumplingSvg9 />
          </div>
          <div className="absolute top-[32.47px] left-[321.47px]">
            <DumplingSvg10 />
          </div>
          <div className="absolute top-[42.47px] left-[348.47px]">
            <DumplingSvg11 />
          </div>
          <div className="absolute top-[74.47px] left-[307.47px]">
            <DumplingSvg12 />
          </div>
        </div>
        <div className="font-barrio text-h1 text-white absolute top-[49px] left-[74px]">
          Pierogator świąteczny
        </div>
      </div>
    </header>
  );
};

export default HeaderBg;