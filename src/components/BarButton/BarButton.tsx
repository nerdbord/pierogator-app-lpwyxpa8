interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick(e?: React.MouseEvent<HTMLButtonElement>): void;
}

const BarButton = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button
      className="font-poppins text-white text-button font-semibold bg-dark-green hover:bg-green flex justify-center items-center px-3 py-4  rounded w-full"
      onClick={onClick}
      {...(type ? { type } : {})}
    >
      {text}
    </button>
  );
};

export default BarButton;
