import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

export type StepOneData = {
  stepOne: {
    name: string;
    imageSrc: string;

    dough: { name: string; quantity: string }[];
    filling: { name: string; quantity: string }[];
    ingredients: { name: string; quantity: string }[];
  };
};

export type StepTwoData = {
  stepTwo: {
    notes: string;
  };
};

export type DumplingRecipe = StepOneData & StepTwoData;

const GeneratorForm = () => {
  const methods = useForm<DumplingRecipe>();

  const {
    handleSubmit,
    // formState: { errors },
    watch,
  } = methods;
  console.log('watch', watch());
  const onSubmit: SubmitHandler<DumplingRecipe> = (data) => console.log(data);

  const [steps, setSteps] = useState<'StepOne' | 'StepTwo'>('StepOne');

  const firstStep = () => {
    setSteps('StepOne');
  };

  const secondStep = () => {
    setSteps('StepTwo');
  };

  const isFirstStep = steps === 'StepOne';
  const isSecondStep = steps === 'StepTwo';

  // pass all methods into the context
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isFirstStep && <StepOne nextStep={secondStep} />}
        {isSecondStep && <StepTwo previousStep={firstStep} />}
      </form>
    </FormProvider>
  );
};

export default GeneratorForm;
