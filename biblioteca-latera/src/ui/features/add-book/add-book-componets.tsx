import React from "react";
import { useForm } from "react-hook-form";
import { Book } from "../../../domain/book";

type AddBookProps = {
  handleSetTitulo: (titulo: string) => void;
  handleSetEditorial: (editorial: string) => void;
};
export const AddBook: React.FC<AddBookProps> = ({ handleSetTitulo, handleSetEditorial }) => {
  const {
    register,
    handleSubmit,
    /*     formState: { errors }, */
  } = useForm<Book>();
  const onSubmit = (data: Book) => {
    // handleSetTitulo(data.titulo);
    handleSetEditorial(data.editorial);
  };

  /*   console.log(errors); */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="titulo">Titulo:</label>
      {/*  <input type="text" placeholder="escribe aqui..." {...register("titulo", { required: true, maxLength: 80 })} /> */}
      <label htmlFor="editorial"></label>
      <input type="text" placeholder="escribe aqui..." {...register("editorial", { required: true, maxLength: 80 })} />

      <input type="submit" />
    </form>
  );
};
