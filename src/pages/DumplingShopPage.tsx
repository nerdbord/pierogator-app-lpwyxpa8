import Recipes from '@components/Recipes';
import { findMyDumplingRecipes, listAllDumplingRecipes } from '@src/API';
import { useEffect, useState } from 'react';

type DumplingType = {
  status: 'fulfilled' | 'rejected';
  value:
    | { name: string; imageSrc: string; _id: string }[]
    | { recipes: { name: string; imageSrc: string; _id: string }[] };
};
const prepareDumplings = (dumplings: DumplingType) => {
  if (dumplings.status !== 'fulfilled') {
    return [];
  }

  if ('recipes' in dumplings.value) {
    return dumplings.value.recipes.map(({ _id, imageSrc, name }) => ({
      _id,
      imageSrc,
      name,
    }));
  }

  return dumplings.value.map(({ _id, imageSrc, name }) => ({
    _id,
    imageSrc,
    name,
  }));
};

const DumplingShopPage = () => {
  const [dumplings, setDumplings] = useState<{
    myDumplings: ReturnType<typeof prepareDumplings>;
    allDumplings: ReturnType<typeof prepareDumplings>;
  }>({
    myDumplings: [],
    allDumplings: [],
  });

  useEffect(() => {
    const getDumplings = async () => {
      const dumplingsPromises = [
        findMyDumplingRecipes(),
        listAllDumplingRecipes(),
      ];

      const [myDumplings, allDumplings] = (await Promise.allSettled(
        dumplingsPromises,
      )) as DumplingType[];

      setDumplings({
        myDumplings: prepareDumplings(myDumplings),
        allDumplings: prepareDumplings(allDumplings),
      });
    };

    getDumplings();
  }, []);

  return (
    <div>
      <Recipes
        myDumplings={dumplings.myDumplings}
        otherDumplings={dumplings.allDumplings}
        onDeleteSuccess={(item: { _id: string }) => {
          setDumplings((prev) => ({
            ...prev,
            myDumplings: prev.myDumplings.filter(
              (dumpling) => dumpling._id !== item._id,
            ),
          }));
        }}
      />
    </div>
  );
};

export default DumplingShopPage;
