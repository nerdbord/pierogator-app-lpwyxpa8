import CloseSvg from '@src/assets/CloseSvg';
import OpenSvg from '@src/assets/OpenSvg';
import { cn } from '@utils/cn';
import useToggle from '@utils/useToggle';
// import classNames from 'classnames';

interface AccordionProps {
  initialState?: boolean;
  title: string;
}

const Accordion = ({
  initialState = true,
  children,
  title,
}: React.PropsWithChildren<AccordionProps>) => {
  const [flag, setFlag] = useToggle(initialState);

  return (
    <div className={cn('rounded-[4px] border border-gray p-4')}>
      <div
        onClick={setFlag.toggle}
        className={cn(
          'flex cursor-pointer items-center justify-between',
          'font-poppins text-[16px] font-medium text-gray-dark',
        )}
      >
        <h3>{title}</h3>

        <div className={cn(flag && 'mt-[-2px] ')}>
          {flag ? <OpenSvg /> : <CloseSvg />}
        </div>
      </div>

      <div
        className={cn(
          'grid grid-rows-[0fr] transition-all duration-300 ease-in-out',
          flag ? 'grid-rows-[1fr]' : 'opacity-0',
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
