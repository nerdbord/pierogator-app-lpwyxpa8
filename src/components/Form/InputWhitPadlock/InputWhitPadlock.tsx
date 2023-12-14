import React from 'react';
import Padlock from '@components/Padlock/Padlock';
import { Controller, useFormContext } from 'react-hook-form';

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
  const { control, watch } = useFormContext(); // retrieve all hook methods

  const isLocked = watch('disabled.' + name + 'Padlock') as boolean;

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div>
      <label htmlFor={name} className="hidden"></label>
      <h3 className="mb-[7px] font-poppins text-h3 font-medium text-dark-green">
        {label}
      </h3>

      <div
        className={`border-box flex gap-3 rounded border bg-gray-background p-4 ${
          isLocked ? 'border-gray' : 'border-transparent'
        }`}
      >
        <label htmlFor={'disabled.' + name + 'Padlock'} className="">
          <Padlock isLocked={isLocked} />
        </label>

        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <textarea
              {...field}
              className="h-auto min-h-[40px] w-full resize-none overflow-hidden overscroll-none bg-inherit font-poppins text-body font-normal outline-none"
              id={name}
              placeholder={placeholder}
              rows={1}
              onChange={(e) => {
                field.onChange(e);
                handleTextareaChange(e);
              }}
              disabled={isLocked}
              {...rest}
            />
          )}
        />
      </div>

      <Controller
        control={control}
        name={'disabled.' + name + 'Padlock'}
        render={({ field }) => (
          <input
            id={field.name}
            type="checkbox"
            className="hidden"
            checked={field.value}
            onChange={(e) => {
              field.onChange(e.target.checked);
            }}
          />
        )}
      />
    </div>
  );
}

export default InputWhitPadlock;
