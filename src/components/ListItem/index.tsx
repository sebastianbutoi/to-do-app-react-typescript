import "./style.css";

type Props = {
  text: string;
  action: () => void;
};

const ListItem = (props: Props): JSX.Element => {
  const { text, action } = props;
  return (
    <li>
      {text}
      <button onClick={action}>X</button>
    </li>
  );
};

export default ListItem;
