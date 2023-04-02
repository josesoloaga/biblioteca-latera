import { Book } from "../../domain/book";
import { supabase } from "../client";


export const postBook = async (payload: Book) => {
  const { title, editorial, donateUser } = payload;

  const { error } = await supabase.from("books").insert({ title: title, editorial: editorial, donateUser: donateUser });

  return error ? "error guardando datos" : "datos guardados correctamente";
};

