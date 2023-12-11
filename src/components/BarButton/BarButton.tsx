interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const BarButton = ({ text, onClick, ...rest }: ButtonProps) => {
  return (
    <button
      className="font-poppins text-white text-button font-semibold bg-dark-green hover:bg-green flex justify-center items-center px-3 py-4  rounded w-full"
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default BarButton;
