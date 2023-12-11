import HeaderBgSvg from '@src/assets/HeaderBgSvg';
import DumplingSvg from '@src/assets/DumplingSvg';
import DumplingSvgLeft from '@src/assets/DumplingSvgLeft';
import DumplingRightSvg from '@src/assets/DumplingRightSvg';
import DumplingRightCt from '@src/assets/DumplingRightCt';
import Snow from '@src/assets/SnowSvg';

const HeaderBg = () => {
  return (
    <>
      <div className="h-screen bg-cover bg-center top-0  z-10  sticky ">
        <div className="relative">
          <HeaderBgSvg />
          <div className="absolute top-0 ml-0.5 z-10">
            <Snow />
          </div>
        </div>
        <DumplingSvgLeft top={-2.5} left={-10} rotate={-16} />
        <DumplingSvgLeft top={50} left={-22} rotate={-10} />
        <DumplingSvgLeft top={28} left={17} rotate={20} />
        <DumplingSvgLeft top={0} left={55} rotate={0} />
        <DumplingSvgLeft top={65} left={31} rotate={-45} />
        <DumplingSvgLeft top={-4.6} left={102} rotate={30} />
        <DumplingSvg top={-13.6} left={151} rotate={155} />
        <div className=" top-10 left-14 ml-5 absolute text-white font-barrio text-h1 flex ">
          <p className=" font-semibold tracking-wide  ">PIE</p>
          <p className="lowercase ">RO</p>
          <p>GA</p>
          <p className="lowercase">TO</p>
          <p>R</p>
        </div>
        <div className="  top-16 left-16 ml-3.5 mt-2 absolute text-white font-barrio text-h1 flex">
          <p className="lowercase">Ś</p>
          <p>W</p>
          <p className="lowercase">I</p>
          <p>Ą</p>
          <p className="lowercase">TE</p>
          <p>C</p>
          <p className="lowercase">Z</p>
          <p>NY</p>
        </div>
        <DumplingSvg top={-5} left={252} rotate={15} />
        <DumplingSvg top={3} left={295} rotate={37} />
        <DumplingRightSvg top={0} left={354} rotate={0} />
        <DumplingSvg top={27} left={325} rotate={-10} />
        <DumplingRightCt top={33} left={348} rotate={0} />
        <DumplingSvg top={66} left={310} rotate={-5} />
        
      </div>
    </>
  );
};

export default HeaderBg;
