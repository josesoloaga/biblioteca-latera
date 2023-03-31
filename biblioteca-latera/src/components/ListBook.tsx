


type FormInputs = {
    title: string;
    editorial: string;
  };


export const ListBook = (props:FormInputs) => {
  const { title, editorial } = props;
  return (
    <ul>
      <li>
        <h4>{title}</h4>
        <p>{editorial}</p>
      </li>
    </ul>
  );
};
