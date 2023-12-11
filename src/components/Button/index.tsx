interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  onClick(e?: React.MouseEvent<HTMLButtonElement>): void;
}

const Button = ({ text, type, isDisabled, onClick }: ButtonProps) => {
  return (
    <button
      className="font-poppins text-dark-green text-button font-medium bg-white hover:bg-gray-light flex justify-center items-center px-3 py-[10px] border rounded border-gray border-solid"
      onClick={onClick}
      {...(type ? { type } : {})}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
