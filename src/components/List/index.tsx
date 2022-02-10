import ListItem from "../ListItem";

type Props = {
  list: (string | never)[];
  remove: (arg0: number) => void;
};

const List = ({ list, remove }: Props) => {
  return (
    <ul>
      {list.map((element, index) => (
        <ListItem text={element} key={index} action={() => remove(index)} />
      ))}
    </ul>
  );
};

export default List;
