import React, { useState } from 'react';
import Padlock from '@components/Padlock/Padlock';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

function Input({
  name,
  label,
  placeholder = 'wypisz, wygeneruj lub zostaw puste',
  ...rest
}: InputProps &
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
      <h3 className="text-dark-green font-poppins font-medium text-h3 mb-[7px]">
        {label}
      </h3>

      <div className="flex bg-gray-background p-4 gap-3 rounded">
        <label htmlFor={name + 'Padlock'} className="">
          <Padlock isLocked={isLocked} />
        </label>

        <textarea
          className="w-full min-h-[40px] h-auto overflow-hidden overscroll-none bg-inherit outline-none resize-none font-poppins text-body font-normal"
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

export default Input;
