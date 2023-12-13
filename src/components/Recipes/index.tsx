import Button from '@components/Button';
import DumplingWithButton from '@components/DumplingWithButton';
import DumplingWithTitle from '@components/DumplingWithTitle';
import { deleteDumplingRecipeById } from '@src/API';
import { useNavigate } from 'react-router-dom';

interface ListItemProps {
  _id: string;
  imageSrc: string;
  name: string;
}

function ListItem({ imageSrc, name }: ListItemProps) {
  return (
    <div className=" flex flex-col">
      <img
        className="w-[162px] h-[118px] mb-[8px] rounded"
        src={imageSrc}
        alt={name}
      />
      <p className="font-poppins">{name}</p>
    </div>
  );
}

interface ListProps {
  items: ListItemProps[];
}

function List({ items }: ListProps) {
  return (
    <div className="flex flex-wrap justify-between">
      {items.map((item) => (
        <div key={item._id} className="gap-5 mb-8">
          <ListItem {...item} />
        </div>
      ))}
    </div>
  );
}

function MyList({
  items,
  onDeleteSuccess,
}: ListProps & { onDeleteSuccess: (item: { _id: string }) => void }) {
  const navigate = useNavigate();

  const onClickHandler = (id: string) => {
    navigate(`/dumpling/${id}`);
  };

  const onDelete = async (_id: string) => {
    const deletedItem = await deleteDumplingRecipeById(_id);

    if (!deletedItem._id) {
      return;
    }
    onDeleteSuccess(deletedItem);
  };

  return (
    <div className="flex flex-wrap justify-between">
      {items.map((item) => (
        <div key={item._id} className="gap-5 mb-8">
          <ListItem {...item} />
          <div className="flex gap-2">
            <Button text="Otwórz" onClick={() => onClickHandler(item._id)} />
            <Button text="Usuń" onClick={() => onDelete(item._id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

interface RecipesProps {
  myDumplings: ListItemProps[];
  otherDumplings: ListItemProps[];
  onDeleteSuccess: (item: { _id: string }) => void;
}

function Recipes({
  myDumplings,
  otherDumplings,
  onDeleteSuccess,
}: RecipesProps) {
  const navigate = useNavigate();
  return (
    <div className="flex-col ">
      <div className="mb-[16px] mt-[32px]">
        <DumplingWithButton
          title="Moje Pierogi"
          text="Nowy Pieróg"
          onClick={() => navigate('/dumpling-creator')}
          isLoading={false}
        />
      </div>

      <MyList items={myDumplings} onDeleteSuccess={onDeleteSuccess} />

      <div className="flex justify-self-start mb-[16px] mt-[32px]">
        <DumplingWithTitle title="Pierogarnia" where="left" />
      </div>
      <List items={otherDumplings} />
    </div>
  );
}

export default Recipes;
