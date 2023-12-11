import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

type StepOneData = {
  name: string;
  imageSrc: string;
  ingredients: {
    dough: { name: string; quantity: string }[];
    filling: { name: string; quantity: string }[];
  };
};

type StepTwoData = {
  instructions: {
    dough_preparation: string[];
    filling_preparation: string[];
    forming_and_cooking_dumplings: string[];
    serving: string[];
  };
};

export type DumplingRecipe = StepOneData & StepTwoData;

const GeneratorForm = () => {
  const methods = useForm<DumplingRecipe>();

  const {
    handleSubmit,
    // formState: { errors },
  } = methods;

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
