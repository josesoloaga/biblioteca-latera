import React from "react";
import { useForm } from "react-hook-form";

type dataInput = {
  handleSetTitulo: (titulo: string) => void;
  handleSetEditorial: (editorial: string) => void;
};

type formData = {
  titulo: string;
  editorial: string;
};

export const AddBook = ({ handleSetTitulo, handleSetEditorial }: dataInput ) => {
  const {
    register,
    handleSubmit,
/*     formState: { errors }, */
  } = useForm<formData>();
  const onSubmit = (data: formData) => {
    handleSetTitulo(data.titulo);
    handleSetEditorial(data.editorial);
  };

/*   console.log(errors); */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="titulo">Titulo:</label>
      <input type="text" placeholder="escribe aqui..." {...register("titulo", { required: true, maxLength: 80 })} />
      <label htmlFor="editorial"></label>
      <input type="text" placeholder="escribe aqui..." {...register("editorial", { required: true, maxLength: 80 })} />

      <input type="submit" />
    </form>
  );
};
