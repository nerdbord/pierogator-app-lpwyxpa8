import Input from '@components/Form/Input/Input';
import { generateChatCompletion } from '@src/API';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface StepOneProps {
  nextStep: () => void;
}

const StepOne = ({ nextStep }: StepOneProps) => {
  const { setValue } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  const generateBase = async () => {
    setIsLoading(true);
    const data = await generateChatCompletion();

    if (!data) {
      return;
    }

    try {
      const { dough, falling } = JSON.parse(
        data.choices[0].message.content,
      ) as {
        dough: string;
        falling: string;
        ingredients: string;
      };

      setValue('ingredients.dough', dough);
      setValue('ingredients.falling', falling);
    } catch (err) {
      console.log('Parse error', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={generateBase}>{JSON.stringify(isLoading)}Generuj</button>
      <Input name="ingredients.dough" label="Ciasto" />
      <Input name="ingredients.falling" label="Nadzienie" />
      <Input name="ingredients.ingredients" label="Składniki" />

      <button type="button" onClick={nextStep}>
        Zapisz i przejdź do tworzenia przepisu
      </button>
    </div>
  );
};

export default StepOne;
