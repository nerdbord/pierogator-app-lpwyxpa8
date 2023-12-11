import BarButton from '@components/BarButton/BarButton';
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
   
   for example:
   {
    dough: "cienkie, elastyczne ciasto, klasyczny polski przepis z jajkami",
    falling: "wegańskie ciasto na pszennej mące uniwersalnej. wytrawne, małosolne, przepis typowo polski, tradycyjny.",
    ingredients: "cebula, szpinak, feta"
   }

    Return values in polish.
   `;

const StepOne = ({ nextStep }: StepOneProps) => {
  const { setValue, watch } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingImg, setIsLoadingImg] = useState(false);

  const generateBase = async () => {
    setIsLoading(true);
    const data = await generateChatCompletion(content);

    if (!data) {
      return;
    }

    try {
      const { dough, falling, ingredients } = JSON.parse(
        data.choices[0].message.content,
      ) as {
        dough: string;
        falling: string;
        ingredients: string;
      };

      setValue('stepOne.dough', dough);
      setValue('stepOne.falling', falling);
      setValue('stepOne.ingredients', ingredients);
    } catch (err) {
      console.log('Parse error', err);
    } finally {
      setIsLoading(false);
    }
  };

  const generateDumplingImg = async () => {
    setIsLoadingImg(true);

    const dough = watch('stepOne.dough');
    const falling = watch('stepOne.falling');
    const ingredients = watch('stepOne.ingredients');

    if (!dough || !falling || !ingredients) {
      return;
    }

    const img = await generateImage(`
    Create a image of dumpling. 
      That it has dough like: ${dough}.
      That it has falling like: ${falling}.
      That it has ingredients like: ${ingredients}.

      Make it look cartoonish.
    `);

    if (!img?.data) {
      return;
    }

    setValue('stepOne.imageSrc', img.data[0].url);
    setIsLoadingImg(false);
  };

  const dumplingImg = watch('stepOne.imageSrc') as string;
  return (
    <div>
      <button onClick={generateBase}>{JSON.stringify(isLoading)}Generuj</button>
      <Input name="stepOne.dough" label="Ciasto" />
      <Input name="stepOne.falling" label="Nadzienie" />
      <Input name="stepOne.ingredients" label="Składniki" />
      <button onClick={generateDumplingImg}>
        {JSON.stringify(isLoadingImg)}Generuj
      </button>
      {dumplingImg && (
        <>
          <img src={dumplingImg} loading="lazy" alt="some-dumpling" />

          <Input name="stepOne.name" label="Nazwa" />

          <BarButton
            onClick={nextStep}
            text="Zapisz i przejdź do tworzenia przepisu"
          />
        </>
      )}
    </div>
  );
};

export default StepOne;
