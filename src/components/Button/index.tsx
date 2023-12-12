interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  onClick(e?: React.MouseEvent<HTMLButtonElement>): void;
}

const Button = ({ text, type, isDisabled, onClick }: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center rounded border border-solid border-gray bg-white px-3 py-[10px] font-poppins text-button font-medium text-dark-green hover:bg-gray-light"
      onClick={onClick}
      {...(type ? { type } : {})}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
