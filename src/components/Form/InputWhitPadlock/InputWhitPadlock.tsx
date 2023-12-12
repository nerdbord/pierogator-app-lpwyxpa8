import React, { useState } from 'react';
import Padlock from '@components/Padlock/Padlock';
import { useFormContext } from 'react-hook-form';

interface InputWhitPadlockProps {
  name: string;
  label?: string;
  placeholder?: string;
}

function InputWhitPadlock({
  name,
  label,
  placeholder = 'wypisz, wygeneruj lub zostaw puste',
  ...rest
}: InputWhitPadlockProps &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >) {
  const { register } = useFormContext(); // retrieve all hook methods
  const [isLocked, setIsLocked] = useState(false);

  const handleCheckboxChange = () => {
    setIsLocked((prev) => !prev);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div>
      <label htmlFor={name} className="pr-4"></label>
      <h3 className="mb-[7px] font-poppins text-h3 font-medium text-dark-green">
        {label}
      </h3>

      <div
        className={`border-box flex gap-3 rounded border bg-gray-background p-4 ${
          isLocked ? 'border-gray' : 'border-transparent'
        }`}
      >
        <label htmlFor={name + 'Padlock'} className="">
          <Padlock isLocked={isLocked} />
        </label>

        <textarea
          className="h-auto min-h-[40px] w-full resize-none overflow-hidden overscroll-none bg-inherit font-poppins text-body font-normal outline-none"
          id={name}
          {...register(name)}
          placeholder={placeholder}
          rows={1}
          onChange={handleTextareaChange}
          {...rest}
        />
      </div>

      <input
        id={name + 'Padlock'}
        type="checkbox"
        className="hidden"
        checked={isLocked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default InputWhitPadlock;
