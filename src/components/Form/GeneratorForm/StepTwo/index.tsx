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
}: {
  dough: string;
  filling: string;
  ingredients: string;
}) => `

  value for this JSON base one this properties:
   key: ingredients.dough, values ( make it noun): names: [${dough.split(
     ',',
   )}] quantity: generate string that can be measurement in recipe, and corelate this with name 

   key: ingredients.filling , values: ( make it noun) [${filling.split(
     ',',
   )}] quantity: generate string that can be measurement in recipe, and corelate this with name 
   
 For this two filed above you can enhance it by [${ingredients.split(',')}]


  this JSON looks like:
{
  "ingredients": {
    "dough": [
      {
        "name": "",
        "quantity": ""
      }
    ],
    "filling": [
      {
        "name": "",
        "quantity": ""
      }
    ]
  }
}
`;

const getInstructions = ({
  notes,
  ingredients,
}: {
  notes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ingredients: any;
}) => `


  when you generate all fields that this note to considerate: ${notes}

  value for this JSON base one this properties:

  ingredients = ${JSON.stringify(ingredients)}

  key: instructions.dough_preparation,              values generate instruction: base it on ingredients values, how to  prepare dough, it should ba a list starting with number of a step min step 3 
  key: instructions.filling_preparation,            values generate instruction: base it on ingredients values, hot to prepare filling, it should ba a list starting with number of a step min step 3 
  key: instructions.forming_and_cooking_dumplings,  values generate instruction: base it on ingredients values, how to prepare dumplings, it should ba a list starting with number of a step min step 3 
  key: instruction.serving,                         values generate instruction: how to serving dumplings 

  this JSON looks like:
{
  "instructions": {
    "dough_preparation": [
      ""
    ],
    "filling_preparation": [
      ""
    ],
    "forming_and_cooking_dumplings": [
      ""
    ],
    "serving": [
      ""
    ]
  }
}
`;

const StepTwo = ({ previousStep }: StepTwoProps) => {
  const { watch, setValue } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  const generateRecepis = async () => {
    setIsLoading(true);
    const { stepOne, stepTwo } = watch();

    const content = getContent(stepOne);
    const ingredients = await generateChatCompletion(content);

    const ins = getInstructions({
      notes: stepTwo,
      ingredients: ingredients?.choices[0].message.content,
    });
    const instructions = await generateChatCompletion(ins);

    if (!ingredients || !instructions) {
      setIsLoading(false);
      return;
    }

    try {
      const data = {
        ...JSON.parse(ingredients.choices[0].message.content),
        ...JSON.parse(instructions.choices[0].message.content),
      };

      setValue('stepTwo.recipe', data);
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

  const { serving, ...restInstructions } = dumplingRecipe?.instructions ?? {};

  return (
    <>
      <div className="mb-4">
        <DumplingWithButton
          title="Pieróg"
          isLoading={false}
          onClick={previousStep}
          text="Zmień"
        />
      </div>

      <img
        src={dumplingImg}
        loading="lazy"
        alt="some-dumpling"
        className="mb-4 h-[233px] w-[343px] rounded"
      />

      <Input name="stepOne.name" value={dumplingName} isDisabled={true} />

      <div className="mb-6">
        <DumplingWithButton
          title="Przepis"
          isLoading={isLoading}
          onClick={generateRecepis}
        />
      </div>

      <Input
        name="stepTwo.notes"
        label="Uwagi do przepisu"
        placeholder="chrupiące pierogi bez pieczenia, bez użycia miksera"
      />
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
              lists={Object.values(restInstructions).map((list, idx) => ({
                list,
                title:
                  ['Ciasto', 'Farsz', 'Formowanie i przygotowanie pierogów']?.[
                    idx
                  ] ?? '',
              }))}
            />
          </Accordion>
          <Accordion title="Podawanie">
            <p className="pt-4 text-body">{serving?.[0]}</p>
          </Accordion>

          <BarButton
            type="submit"
            text="Udostępnij pieroga"
            className="mb-[56px] mt-8"
          />
        </div>
      )}
    </>
  );
};

export default StepTwo;
