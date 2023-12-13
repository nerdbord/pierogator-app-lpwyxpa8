import DumplingWithTitle from '@components/DumplingWithTitle';

interface ListItemProps {
  _id: number;
  imageSrc: string;
  name: string;
}

function ListItem({ _id, imageSrc, name }: ListItemProps) {
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

const data: ListItemProps[] = [
  {
    _id: 1,
    imageSrc:
      'https://imgs.search.brave.com/043DDlS6ZetFxP6evikKNxzTlvkrgWoQscKE6kXVj9o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/ODUxMjczL2VzL2Zv/dG8vcGllcm9naS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WWtkQ21yNUtDdy1F/YVUzSGlPM1NDc0g0/V1UzQlNlOU5kZGR4/U2czNkItOD0',
    name: 'Pierogi jeden',
  },
  {
    _id: 2,
    imageSrc:
      'https://imgs.search.brave.com/_ahLemEudiXb6uFkooqlewgiWgfmn9ZWDb8Y-PhtRr8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMi8wOS9waWVy/b2dpLXJ1c2tpZS1w/aG90by1kNjcwZjhh/LmpwZz9xdWFsaXR5/PTkwJnJlc2l6ZT01/NTYsNTA1',
    name: 'pierozek dwa',
  },
  {
    _id: 3,
    imageSrc:
      'https://imgs.search.brave.com/043DDlS6ZetFxP6evikKNxzTlvkrgWoQscKE6kXVj9o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/ODUxMjczL2VzL2Zv/dG8vcGllcm9naS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WWtkQ21yNUtDdy1F/YVUzSGlPM1NDc0g0/V1UzQlNlOU5kZGR4/U2czNkItOD0',
    name: 'Pierozek trzy',
  },
];

function Recipes() {
  return (
    <div className="flex-col ">
      <div className=" flex justify-self-start mb-[16px] mt-[32px]">
        <DumplingWithTitle title="Pierogarnia" where="left" />
      </div>

      <List items={data} />
    </div>
  );
}

export default Recipes;
