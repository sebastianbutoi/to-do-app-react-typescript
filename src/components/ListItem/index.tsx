type Props = {
  text: string;
  action: () => void;
};

const ListItem = ({ text, action }: Props) => {
  return (
    <li>
      {text}
      <button onClick={action}>X</button>
    </li>
  );
};

export default ListItem;
