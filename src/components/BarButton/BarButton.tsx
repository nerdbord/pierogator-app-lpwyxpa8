import { cn } from '@utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const BarButton = ({ text, onClick, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-center rounded bg-dark-green px-3 py-4 font-poppins text-button font-semibold text-white hover:bg-green',
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default BarButton;
