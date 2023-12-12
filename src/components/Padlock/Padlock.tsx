import PadlockLockedSvg from '@src/assets/PadlockLockedSvg';
import PadlockOpenSvg from '@src/assets/PadlockOpenSvg';

const Padlock = ({ isLocked }: { isLocked: boolean }) => {
  return (
    <div
      className={`flex w-min items-center justify-center  rounded-full p-2 ${
        isLocked ? 'bg-bright-yellow' : 'bg-gray'
      }`}
    >
      {isLocked ? <PadlockLockedSvg /> : <PadlockOpenSvg />}
    </div>
  );
};

export default Padlock;
