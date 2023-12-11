import Input from '@components/Form/Input/Input';
import { generateChatCompletion } from '@src/API';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { DumplingRecipe, StepOneData, StepTwoData } from '..';

interface StepTwoProps {
  previousStep: () => void;
}

const content = ({
  name,
  dough,
  filling,
  ingredients,
  notes,
}: Omit<StepOneData['stepOne'], 'imageSrc'> & StepTwoData['stepTwo']) => `

  Create a JSON no other words. ONLY JSON!!!
  Return values in polish.
  this JSON looks like:
    {
      "ingredients": {
        "dough": [
          {
            "name": "mąki pszennej",
            "quantity": "2 szklanki"
          },
          {
            "name": "jajka",
            "quantity": "2"
          },
          {
            "name": "wody",
            "quantity": "0.5 szklanki"
          },
        ],
        "filling": [
          {
            "name": "mąki pszennej",
            "quantity": "2 szklanki"
          },
          {
            "name": "jajka",
            "quantity": "2"
          },
          {
            "name": "wody",
            "quantity": "0.5 szklanki"
          },
        ]
      },
      "instructions": {
        "dough_preparation": [
          "1. Wymieszaj mąkę pszeniczną, jajka i wodę w misce, aż powstanie gładkie, elastyczne ciasto na pierogi.",
          "2. Owinij ciasto w folię spożywczą i pozostaw je na około 30 minut, aby odpoczęło.",
        ],
        "filling_preparation": [
          "1. Ugotuj ziemniaki w osolonej wodzie do momentu, gdy będą miękkie. Odcedź i odstaw do ostygnięcia.",
          "2. Pokrój cebulę na drobne kawałki i podsmaż na patelni z odrobiną oleju, aż stanie się miękka i lekko złocista.",
        ],
        "forming_and_cooking_dumplings": [
          "1. Rozwałkuj ciasto na cienką warstwę.",
          "2. Pokrój ciasto w okręgi za pomocą szklanki lub foremki do pierogów.",
        ],
        "serving": [
          "Pierogi powinno się podawać na talerzu i można do nich dodać śmietanę lub sos."
        ]
      },

      Generate it base on this values (don't return them in response):
      name:${name}
      dough:${dough}
      filling:${filling}
      ingredients:${ingredients}
      notes on the recipe:${notes}
`;

const StepTwo = ({ previousStep }: StepTwoProps) => {
  const { watch } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  const generateRecepis = async () => {
    setIsLoading(true);
    const { stepOne, stepTwo } = watch() as DumplingRecipe;

    const data = await generateChatCompletion(
      content({ ...stepOne, ...stepTwo }),
    );

    if (!data) {
      return;
    }

    try {
      console.log('data', JSON.parse(data.choices[0].message.content));
    } catch (err) {
      console.log('Parse error', err);
    } finally {
      setIsLoading(false);
    }
  };

  const dumplingImg = watch('stepOne.imageSrc') as string;
  const dumplingName = watch('stepOne.name');

  return (
    <div>
      <button type="button" onClick={previousStep}>
        Zmień
      </button>

      <img src={dumplingImg} loading="lazy" alt="some-dumpling" />

      <Input name="stepOne.name" value={dumplingName} disabled />

      <button onClick={generateRecepis}>
        {JSON.stringify(isLoading)} Generuj
      </button>

      <Input name="stepTwo.notes" label="Uwagi do przepisu" />
    </div>
  );
};

export default StepTwo;
