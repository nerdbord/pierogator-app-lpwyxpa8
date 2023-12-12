import PadlockLockedSvg from '@src/assets/PadlockLockedSvg';
import PadlockOpenSvg from '@src/assets/PadlockOpenSvg';

const Padlock = ({ isLocked }: { isLocked: boolean }) => {
  return (
    <div
      className={`flex justify-center items-center p-2  rounded-full w-min ${
        isLocked ? 'bg-bright-yellow' : 'bg-gray'
      }`}
    >
      {isLocked ? <PadlockLockedSvg /> : <PadlockOpenSvg />}
    </div>
  );
};

export default Padlock;
