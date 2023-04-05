import { Book } from '../../domain/book';
import { supabase } from '../client';

export const postBook = async (payload: Book) => {
  const { title, editorial, category } = payload;

  const { error } = await supabase
    .from('books')
    .insert({ title: title, editorial: editorial, category: category });

  return error ? 'error guardando libro' : 'nuevo libro guardado correctamente';
};
