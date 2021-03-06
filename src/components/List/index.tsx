import ListItem from "../ListItem";
import "./style.css";

type Props = {
  list: (string | never)[];
  remove: (arg0: number) => void;
};

const List = (props: Props): JSX.Element => {
  const { list, remove } = props;
  return (
    <ul>
      {list.map((element, index) => (
        <ListItem text={element} key={index} action={() => remove(index)} />
      ))}
    </ul>
  );
};

export default List;
