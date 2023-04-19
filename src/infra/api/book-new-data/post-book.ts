import { Book } from '../../../domain/models/book';
import { supabase } from '../client';

export const postBook = async (payload: Book) => {
  const { title, autor, category } = payload;

  const { error } = await supabase
    .from('books')
    .insert({ title: title, autor: autor, category: category.toUpperCase() });

  return error ? 'error guardando libro' : 'nuevo libro guardado correctamente';
};
