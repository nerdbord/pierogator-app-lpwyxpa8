import { useFormContext } from 'react-hook-form';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
}
function Input({
  name,
  label,
  placeholder,
  isDisabled = false,
  ...rest
}: InputProps &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >) {
  const { register } = useFormContext(); // retrieve all hook methods

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div>
      <label htmlFor={name} className="">
        <h3
          className={`${
            isDisabled ? 'hidden ' : ''
          }text-dark-green font-poppins font-medium text-h3 mb-[7px]`}
        >
          {label}
        </h3>
      </label>
      <textarea
        className={`w-full h-auto overflow-hidden overscroll-none bg-gray-background outline-none resize-none font-poppins text-body font-normal rounded border border-gray-light p-4 ${
          isDisabled ? 'mb-9' : 'mb-6'
        }`}
        id={name}
        {...register(name)}
        placeholder={placeholder}
        disabled={isDisabled}
        rows={1}
        onChange={handleTextareaChange}
        {...rest}
      />
    </div>
  );
}
export default Input;
