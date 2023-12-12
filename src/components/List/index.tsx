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
          <ul key={idx}>
            <li>{title}</li>
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
