const List = ({
  lists,
}: {
  lists: {
    title: string;
    list: string[] | { name: string; quantity: string }[];
  }[];
}) => {
  return (
    <div>
      {lists.map(({ list, title }, idx) => {
        return (
          <ol key={idx}>
            <li>{title}</li>
            {list.map((listItem, i) => {
              if (typeof listItem === 'string') {
                return <li key={i}>{listItem}</li>;
              }

              return (
                <li key={i}>
                  {listItem.quantity} {listItem.name}
                </li>
              );
            })}
          </ol>
        );
      })}
    </div>
  );
};

export default List;
