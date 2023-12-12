import { cn } from '@utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const BarButton = ({ text, onClick, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={cn(
        'font-poppins text-button font-semibold bg-dark-green hover:bg-green text-white flex justify-center items-center px-3 py-4 rounded w-full',
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
