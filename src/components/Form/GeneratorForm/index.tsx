import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { DumplingRecipe, createDumplingRecipe } from '@src/API';
import { useNavigate } from 'react-router-dom';

export type StepOneData = {
  stepOne: {
    name: string;
    imageSrc: string;

    dough: string;
    filling: string;
    ingredients: string;
  };
};

export type StepTwoData = {
  stepTwo: {
    notes: string;
    recipe: Omit<DumplingRecipe, 'name' | 'imageSrc'> & { serving: string[] };
  };
};

export type FormGenerator = StepOneData & StepTwoData;

const GeneratorForm = () => {
  const methods = useForm<FormGenerator>();
  const navigate = useNavigate();

  const { handleSubmit, watch } = methods;
  console.log('watch', watch());

  const onSubmit: SubmitHandler<FormGenerator> = async (data) => {
    const { name = '', imageSrc } = data?.stepOne ?? {};
    const { recipe } = data?.stepTwo ?? {};

    if (!imageSrc || !recipe) {
      return null;
    }

    const response = await createDumplingRecipe({
      name,
      imageSrc,
      ingredients: {
        ...recipe.ingredients,
      },
      instructions: {
        ...recipe.instructions,
        serving: recipe.serving,
      },
    });

    if (!response?.recipe) {
      return;
    }
    navigate('/');
  };

  const [steps, setSteps] = useState<'StepOne' | 'StepTwo'>('StepOne');

  const firstStep = () => {
    setSteps('StepOne');
  };

  const secondStep = () => {
    setSteps('StepTwo');
  };

  const isFirstStep = steps === 'StepOne';
  const isSecondStep = steps === 'StepTwo';

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
