import BarButton from '@components/BarButton/BarButton';
import DumplingWithButton from '@components/DumplingWithButton';
import InputWhitPadlock from '@components/Form/InputWhitPadlock/InputWhitPadlock';
import Input from '@components/Form/Input/Input';
import { generateChatCompletion, generateImage } from '@src/API';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface StepOneProps {
  nextStep: () => void;
}
const content = `Generate only a json no other words.
   Response that contain three keys: dough, falling, ingredients.
   For this keys you need to generate values that correspond to dumplings.
   Values need to be min 3 words separated by coma.
   You can be creative.

    key: dough - contain description of dough separate by comma (adjective)
    key: filling - contain description of dumpling filling separate by comma (adjective)
    key: ingredients - contain ingredients of dumpling filling and dough separate by comma (noun)
   
   for example:
   {
    dough: "cienkie, elastyczne ciasto, klasyczny polski przepis z jajkami",
    filling: "wegańskie ciasto na pszennej mące uniwersalnej. wytrawne, małosolne, przepis typowo polski, tradycyjny.",
    ingredients: "cebula, szpinak, feta"
   }
   `;

const StepOne = ({ nextStep }: StepOneProps) => {
  const { setValue, watch, getValues } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImg, setIsLoadingImg] = useState(false);

  const generateBase = async () => {
    setIsLoading(true);
    const data = await generateChatCompletion(content);

    if (!data) {
      setIsLoading(false);
      return;
    }

    try {
      const { dough, filling, ingredients } = JSON.parse(
        data.choices[0].message.content,
      ) as {
        dough: string;
        filling: string;
        ingredients: string;
      };

      const isDisabledDough = getValues(
        'disabled.' + 'stepOne.dough' + 'Padlock',
      ) as boolean;
      const isDisabledFilling = getValues(
        'disabled.' + 'stepOne.filling' + 'Padlock',
      ) as boolean;
      const isDisabledIngredients = getValues(
        'disabled.' + 'stepOne.ingredients' + 'Padlock',
      ) as boolean;

      if (!isDisabledDough) {
        setValue('stepOne.dough', dough);
      }
      if (!isDisabledFilling) {
        setValue('stepOne.filling', filling);
      }
      if (!isDisabledIngredients) {
        setValue('stepOne.ingredients', ingredients);
      }
    } catch (err) {
      console.log('Parse error', err);
    } finally {
      setIsLoading(false);
    }
  };

  const generateDumplingImg = async () => {
    setIsLoadingImg(true);

    const dough = watch('stepOne.dough');
    const filling = watch('stepOne.filling');
    const ingredients = watch('stepOne.ingredients');

    if (!dough || !filling || !ingredients) {
      setIsLoadingImg(false);
      return;
    }

    const img = await generateImage(`
    Create a image of dumpling. 
      That it has dough like: ${dough}.
      That it has filling like: ${filling}.
      That it has ingredients like: ${ingredients}.

    `);

    if (!img?.data) {
      setIsLoadingImg(false);
      return;
    }

    setValue('stepOne.imageSrc', img.data[0].url);
    setIsLoadingImg(false);
  };

  const dumplingImg = watch('stepOne.imageSrc') as string;

  return (
    <div>
      <div className="mb-6">
        <DumplingWithButton
          title="Składniki"
          isLoading={isLoading}
          onClick={generateBase}
        />
      </div>
      <div className="mb-8 flex flex-col gap-6">
        <InputWhitPadlock name="stepOne.dough" label="Ciasto" />
        <InputWhitPadlock name="stepOne.filling" label="Nadzienie" />
        <InputWhitPadlock name="stepOne.ingredients" label="Składniki" />
      </div>
      <div className="mb-4">
        <DumplingWithButton
          title="Pieróg"
          isLoading={isLoadingImg}
          onClick={generateDumplingImg}
        />
      </div>
      {dumplingImg && (
        <>
          <img
            src={dumplingImg}
            loading="lazy"
            alt="some-dumpling"
            className="mb-4 w-[343px] h-[233px] rounded"
          />

          <Input name="stepOne.name" label="Nazwa" />

          <BarButton
            className="mb-[58px]"
            onClick={nextStep}
            text="Zapisz i przejdź do tworzenia przepisu"
          />
        </>
      )}
    </div>
  );
};

export default StepOne;
