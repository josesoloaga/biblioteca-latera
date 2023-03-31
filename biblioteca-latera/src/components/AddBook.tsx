import { useForm } from "react-hook-form";

type FormInputs = {
  title: string;
  editorial: string;
};

export const AddBook = (props) => {
  const { setTitle, setEditorial } = props;

  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    setTitle(data.title);
    setEditorial(data.editorial);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Titulo:</label>
      <input id="title" placeholder="escribe aquí..." {...register("title")}></input>
      <label htmlFor="editorial">Editorial:</label>
      <input id="editorial" placeholder="escribe aquí..." {...register("editorial")}></input>
      <input type="submit" />
    </form>
  );
};
