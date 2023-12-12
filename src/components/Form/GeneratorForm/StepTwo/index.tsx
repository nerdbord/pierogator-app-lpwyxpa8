import { generateChatCompletion } from '@src/API';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { StepTwoData } from '..';

import Accordion from '@components/Accordion';
import List from '@components/List';
import BarButton from '@components/BarButton/BarButton';
import DumplingWithButton from '@components/DumplingWithButton';
import Input from '@components/Form/Input/Input';

interface StepTwoProps {
  previousStep: () => void;
}

const getContent = ({
  dough,
  filling,
  ingredients,
  notes,
}: {
  name: string;
  dough: string;
  filling: string;
  ingredients: string;
} & StepTwoData['stepTwo']) => `

  Do it fast
  Create a JSON no other words. ONLY JSON!!!
  Return values in polish.
  
  VIP: when you generate all fields that this note to considerate :${notes}
  
  value for this JSON base one this properties:
   key: ingredients.dough, values ( make it noun): names: [${dough.split(
     ',',
   )}] quantity: generate string that can be measurement in recipe, and corelate this with name 

   key: ingredients.filling , values: ( make it noun) [${filling.split(
     ',',
   )}] quantity: generate string that can be measurement in recipe, and corelate this with name 
   
 For this two filed above you can enhance it by [${ingredients.split(',')}]

  key: instructions.dough_preparation, values: how to prepare dough in steps (make it array)
  key: instructions.filling_preparation, values: how to prepare filling in steps (make it array) 
  key: instructions.forming_and_cooking_dumplings, values: how to prepare filling in steps (make it array) 

  key: serving,  values: how to serving this dumplings

  this JSON looks like:
    {
      "ingredients": {
        "dough": [
          {
            "name": "",
            "quantity": ""
          },
        ],
        "filling": [
          {
            "name": "",
            "quantity": ""
          },
        ]
      },
      "instructions": {
        "dough_preparation": [
          "",
        ],
        "filling_preparation": [
          "",
        ],
        "forming_and_cooking_dumplings": [
          "",
        ],
        
      },
        "serving": [
          ""
        ]
    }
`;

const StepTwo = ({ previousStep }: StepTwoProps) => {
  const { watch, setValue } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  const generateRecepis = async () => {
    setIsLoading(true);
    const { stepOne, stepTwo } = watch();

    const content = getContent({ ...stepOne, ...stepTwo });

    console.log(content, 'content');
    const data = await generateChatCompletion(content);

    if (!data) {
      setIsLoading(false);
      return;
    }

    try {
      const recipe = JSON.parse(data.choices[0].message.content);

      setValue('stepTwo.recipe', recipe);
    } catch (err) {
      console.log('Parse error', err);
    } finally {
      setIsLoading(false);
    }
  };

  const dumplingImg = watch('stepOne.imageSrc') as string;
  const dumplingName = watch('stepOne.name') as string;
  const dumplingRecipe = watch(
    'stepTwo.recipe',
  ) as StepTwoData['stepTwo']['recipe'];

  return (
    <>
      <div className="mb-4">
        <DumplingWithButton
          title="Pieróg"
          isLoading={isLoading}
          onClick={previousStep}
          text="Zmień"
        />
      </div>

      <img src={dumplingImg} loading="lazy" alt="some-dumpling" />

      <Input name="stepOne.name" value={dumplingName} disabled />

      <div className="mb-6 mt-8">
        <DumplingWithButton
          title="Przepis"
          isLoading={isLoading}
          onClick={generateRecepis}
        />
      </div>

      <Input name="stepTwo.notes" label="Uwagi do przepisu" />
      {dumplingRecipe && (
        <div className="flex flex-col gap-2">
          <Accordion title="Składniki">
            <List
              lists={Object.values(dumplingRecipe.ingredients).map(
                (list, idx) => ({
                  list,
                  title: ['Ciasto', 'Farsz']?.[idx] ?? '',
                }),
              )}
            />
          </Accordion>
          <Accordion title="Przygotowanie">
            <List
              lists={Object.values(dumplingRecipe.instructions).map(
                (list, idx) => ({
                  list,
                  title:
                    [
                      'Ciasto',
                      'Farsz',
                      'Formowanie i przygotowanie pierogów',
                    ]?.[idx] ?? '',
                }),
              )}
            />
          </Accordion>
          <Accordion title="Podawanie">
            <p className="pt-4 text-body">{dumplingRecipe.serving?.[0]}</p>
          </Accordion>

          <BarButton
            type="submit"
            text="Zapisz i przejdź do tworzenia przepisu"
            className="mb-[56px] mt-8"
          />
        </div>
      )}
    </>
  );
};

export default StepTwo;
