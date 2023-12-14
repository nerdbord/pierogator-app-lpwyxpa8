import { findDumplingRecipeById } from '@src/API';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@components/Accordion';
import List from '@components/List';
import Button from '@components/Button';
import DumplingWithTitle from '@components/DumplingWithTitle';

interface Ingredient {
  name: string;
  quantity: string;
}

interface Instructions {
  name: string;
  quantity: string;
}

interface DumplingType {
  recipe: {
    author: string;
    imageSrc: string;
    ingredients: {
      dough: Ingredient[];
      filling: Ingredient[];
    };
    instructions: {
      dough_preparation: Instructions[];
      filling_preparation: Instructions[];
      forming_and_cooking_dumplings: Instructions[];
      serving: string[];
    };
    name: string;
    __v: number;
    _id: string;
  };
}

const DumplingPage = () => {
  const { id } = useParams();
  const [dumpling, setDumpling] = useState<DumplingType | null>(null); // Use the DumplingType

  const navigate = useNavigate();

  useEffect(() => {
    const getDumpling = async () => {
      const dumpling = await findDumplingRecipeById(id!);
      setDumpling(dumpling);
    };

    getDumpling();
  }, [id]);

  if (!dumpling) {
    return null;
  }

  const { serving, ...otherInstructions } = dumpling.recipe.instructions;

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <Button onClick={() => navigate(-1)} text="Wróć" />
        <DumplingWithTitle title="Pieróg" where="left" />
      </div>
      <img
        className="mb-4 h-[233px] w-[343px] rounded"
        src={dumpling.recipe.imageSrc}
        alt={dumpling.recipe.name}
      />
      <div className="mb-8 w-full rounded bg-gray-background p-4">
        <h3 className="font-poppins text-sm font-normal text-dark-green">
          {dumpling.recipe.name}
        </h3>
      </div>
      <div className="mb-4 flex justify-end">
        <DumplingWithTitle title="Przepis" where="left" />
      </div>

      <div className="mb-[58px] flex flex-col gap-2">
        <Accordion title="Składniki">
          <List
            lists={Object.values(dumpling.recipe.ingredients).map(
              (list, idx) => ({
                list,
                title: ['Ciasto', 'Farsz']?.[idx] ?? '',
              }),
            )}
          />
        </Accordion>
        <Accordion title="Przygotowanie">
          <List
            lists={Object.values(otherInstructions).map((list, idx) => ({
              list,
              title:
                ['Ciasto:', 'Farsz', 'Formowanie i przygotowanie pierogów:']?.[
                  idx
                ] ?? '',
            }))}
          />
        </Accordion>
        <Accordion title="Podawanie">
          {serving.map((instruction, idx) => {
            return (
              <div className="mt-4 text-body" key={idx}>
                {instruction}
              </div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default DumplingPage;
