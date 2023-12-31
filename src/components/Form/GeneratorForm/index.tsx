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
  disabled: {
    dough: boolean;
    filling: boolean;
    ingredients: boolean;
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
  const methods = useForm<FormGenerator>({
    defaultValues: {
      stepOne: {
        dough: '',
        filling: '',
        ingredients: '',
      },
      disabled: {
        dough: false,
        filling: false,
        ingredients: false,
      },
    },
  });
  const navigate = useNavigate();

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormGenerator> = async (data) => {
    const { name, imageSrc } = data?.stepOne ?? {};
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
