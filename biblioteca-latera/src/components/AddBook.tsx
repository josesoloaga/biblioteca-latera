import { useForm } from "react-hook-form";

type FormInputs = {
    title: string;
    editorial: string;
  }

export const AddBook = ()=>{

    const { register, handleSubmit } = useForm<FormInputs>();
    const onSubmit = (data:FormInputs) => console.log(data);

return<form onSubmit={handleSubmit(onSubmit)}>
<input placeholder="escribe aquí..." {...register("title")}></input>
<label htmlFor="editorial">Editorial:</label>
<input placeholder="escribe aquí..." {...register("editorial")}></input>
<input type="submit" />
</form>
}