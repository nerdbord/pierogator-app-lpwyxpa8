import { useFormContext } from 'react-hook-form';

function Input({
  name,
  label,
  placeholder = 'wypisz, wygeneruj lub zostaw puste',
  ...rest
}: { name: string; label?: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(name)}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
export default Input;
