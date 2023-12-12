import { cn } from '@utils/cn';

const List = ({
  lists,
}: {
  lists: {
    title: string;
    list: string[] | { name: string; quantity: string }[];
  }[];
}) => {
  return (
    <div className="pt-4 font-poppins text-body font-normal text-dark-green">
      {lists.map(({ list, title }, idx) => {
        return (
          <ul key={idx} className="flex flex-col gap-[10px]">
            <li className={cn('font-bold', idx !== 0 && 'mt-10')}>{title}</li>
            {list.map((listItem, i) => {
              if (typeof listItem === 'string') {
                return <li key={i}>{listItem}</li>;
              }

              return (
                <li key={i}>
                  <span>
                    {i + 1}. {listItem.quantity} {listItem.name}
                  </span>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default List;
