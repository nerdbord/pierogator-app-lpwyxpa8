import { cn } from '@utils/cn';
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
      <label htmlFor={name}>
        <h3
          className={cn(
            'font-poppins text-h3 font-medium text-dark-green',
            isDisabled ? 'mb-0 hidden' : 'mb-[7px]',
          )}
        >
          {label}
        </h3>
      </label>
      <textarea
        className={cn(
          'h-auto w-full resize-none overflow-hidden overscroll-none rounded border border-gray-light bg-gray-background p-4 font-poppins text-body font-normal outline-none',
          isDisabled ? 'mb-8' : 'mb-6',
          name === 'stepTwo.notes' ? 'min-h-[72px]' : '',
        )}
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
