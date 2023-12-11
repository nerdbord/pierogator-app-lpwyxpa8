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
    <div>
      <div onClick={setFlag.toggle}>
        <h3>{title}</h3>
      </div>

      <div
        className={cn(
          'grid grid-rows-[0fr] px-4 transition-all duration-300 ease-in-out',
          flag ? 'grid-rows-[1fr] pb-4' : 'opacity-0',
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
